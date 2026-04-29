import { useMemo, useState } from 'react';
import { X } from 'lucide-react';
import { ExceptionDrawer } from './components/ExceptionDrawer';
import { Layout } from './components/Layout';
import { exceptionSeed } from './data/exceptions';
import { offers } from './data/offers';
import { CustomerScreen } from './screens/CustomerScreen';
import { DigestScreen } from './screens/DigestScreen';
import { ExceptionsScreen } from './screens/ExceptionsScreen';
import { MultiUnitScreen } from './screens/MultiUnitScreen';
import type { ExceptionFilters, ExceptionItem, ExceptionStatus, NavKey } from './types';

const defaultFilters: ExceptionFilters = { query: '', source: 'All', status: 'All', severity: 'All' };

function App() {
  const [active, setActive] = useState<NavKey>('digest');
  const [selectedCustomerId, setSelectedCustomerId] = useState<string>('cust-diana');
  const [exceptions, setExceptions] = useState<ExceptionItem[]>(exceptionSeed);
  const [selected, setSelected] = useState<ExceptionItem | null>(null);
  const [offerId, setOfferId] = useState<string | null>(null);
  const [filters, setFilters] = useState<ExceptionFilters>(defaultFilters);

  const filtered = useMemo(
    () =>
      exceptions.filter((e) => {
        const queryMatch = `${e.title} ${e.suggestedAction}`.toLowerCase().includes(filters.query.toLowerCase());
        const sourceMatch = filters.source === 'All' || e.source === filters.source;
        const statusMatch = filters.status === 'All' || e.status === filters.status;
        const severityMatch = filters.severity === 'All' || e.severity === filters.severity;
        return queryMatch && sourceMatch && statusMatch && severityMatch;
      }),
    [exceptions, filters],
  );

  const updateStatus = (id: string, status: ExceptionStatus) => {
    setExceptions((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
    setSelected((prev) => (prev && prev.id === id ? { ...prev, status } : prev));
  };

  return (
    <Layout active={active} onNavigate={setActive}>
      {active === 'digest' && (
        <DigestScreen
          onOpenExceptions={() => setActive('exceptions')}
          onOpenCustomer={(id) => {
            setSelectedCustomerId(id);
            setActive('customers');
          }}
        />
      )}
      {active === 'exceptions' && (
        <ExceptionsScreen
          items={filtered}
          onOpen={setSelected}
          filters={filters}
          onFilter={(next) => setFilters((prev) => ({ ...prev, ...next }))}
        />
      )}
      {active === 'customers' && <CustomerScreen customerId={selectedCustomerId} />}
      {active === 'multi-unit' && <MultiUnitScreen />}

      <ExceptionDrawer item={selected} onClose={() => setSelected(null)} onStatus={updateStatus} />

      {offerId && (
        <div
          className="fixed inset-0 z-40 grid place-items-center bg-ink/40 p-4 backdrop-blur-[2px]"
          onClick={() => setOfferId(null)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-lg border border-line bg-surface shadow-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const offer = offers.find((o) => o.id === offerId);
              if (!offer) return null;
              return (
                <>
                  <div className="flex items-start justify-between border-b border-line-soft px-6 py-5">
                    <div>
                      <div className="eyebrow mb-1">Commercial path</div>
                      <h3 className="font-serif text-[24px] font-medium -tracking-[0.015em] text-ink">
                        {offer.name}
                      </h3>
                      <p className="mt-1 font-mono text-[11px] text-ink-3">
                        {offer.price} · {offer.timeline}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setOfferId(null)}
                      aria-label="Close"
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-surface text-ink-2 hover:bg-bg-alt"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <ul className="space-y-2 px-6 py-5 text-[13px] leading-[1.5] text-ink-2">
                    {offer.details.map((d) => (
                      <li key={d} className="flex gap-2.5">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-amber" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-end gap-2 border-t border-line-soft bg-bg-alt px-6 py-4">
                    <button
                      type="button"
                      onClick={() => setOfferId(null)}
                      className="rounded-md border border-line bg-surface px-3.5 py-1.5 text-[12.5px] font-medium text-ink hover:bg-bg-alt"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="rounded-md border border-ink bg-ink px-3.5 py-1.5 text-[12.5px] font-medium text-bg hover:bg-[#2a2a26]"
                    >
                      Start scoping →
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default App;
