import { useMemo, useState } from 'react';
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
  const [selectedCustomerId, setSelectedCustomerId] = useState<string>('cust-ava');
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
      {active === 'multi-unit' && <MultiUnitScreen onOpenOffer={setOfferId} />}

      <ExceptionDrawer item={selected} onClose={() => setSelected(null)} onStatus={updateStatus} />

      {offerId && (
        <div className="fixed inset-0 z-10 grid place-items-center bg-black/30 p-4" onClick={() => setOfferId(null)}>
          <div className="w-full max-w-lg rounded-xl border border-warm-300 bg-white p-5 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const offer = offers.find((o) => o.id === offerId);
              if (!offer) return null;
              return (
                <>
                  <h3 className="font-serifish text-2xl text-warm-900">{offer.name}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{offer.price} · {offer.timeline}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                    {offer.details.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </>
              );
            })()}
            <button className="mt-4 rounded bg-warm-900 px-4 py-2 text-sm text-white" onClick={() => setOfferId(null)}>Close</button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default App;
