import { Search } from 'lucide-react';
import { Card } from '../components/Card';
import { ExceptionRow } from '../components/ExceptionRow';
import { StatusPill } from '../components/StatusPill';
import type { ExceptionFilters, ExceptionItem, SystemKey } from '../types';
import { SEVERITY_OPTIONS, SOURCE_OPTIONS, STATUS_OPTIONS } from '../types';

export function ExceptionsScreen({
  items,
  onOpen,
  filters,
  onFilter,
}: {
  items: ExceptionItem[];
  onOpen: (item: ExceptionItem) => void;
  filters: ExceptionFilters;
  onFilter: (next: Partial<ExceptionFilters>) => void;
}) {
  return (
    <div>
      <div className="eyebrow mb-2">Operations › Exception queue</div>
      <h1 className="h-page mb-2">
        The reconciliation <em>queue.</em>
      </h1>
      <p className="mb-7 text-[13.5px] leading-[1.5] text-ink-3">
        Every classification mismatch, surfaced before it lands in R365. Tap any row to see what happened, why it
        matters, and the fix Command recommends.
      </p>

      {/* Filter bar */}
      <div className="mb-5 grid grid-cols-1 gap-2 rounded-lg border border-line bg-surface p-3 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <label className="flex items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-1.5 text-[12.5px] text-ink-3">
          <Search className="h-3 w-3 text-ink-3" />
          <input
            value={filters.query}
            onChange={(e) => onFilter({ query: e.target.value })}
            placeholder="Search exceptions"
            className="flex-1 bg-transparent text-[12.5px] text-ink outline-none placeholder:text-ink-3"
          />
        </label>
        <select
          value={filters.source}
          onChange={(e) => onFilter({ source: e.target.value as 'All' | SystemKey })}
          className="rounded-md border border-line bg-surface px-2.5 py-1.5 text-[12.5px] text-ink outline-none"
        >
          {SOURCE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s === 'All' ? 'All sources' : s}
            </option>
          ))}
        </select>
        <select
          value={filters.status}
          onChange={(e) => onFilter({ status: e.target.value as ExceptionFilters['status'] })}
          className="rounded-md border border-line bg-surface px-2.5 py-1.5 text-[12.5px] text-ink outline-none"
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s === 'All' ? 'All statuses' : s}
            </option>
          ))}
        </select>
        <select
          value={filters.severity}
          onChange={(e) => onFilter({ severity: e.target.value as ExceptionFilters['severity'] })}
          className="rounded-md border border-line bg-surface px-2.5 py-1.5 text-[12.5px] text-ink outline-none"
        >
          {SEVERITY_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s === 'All' ? 'All severities' : s}
            </option>
          ))}
        </select>
      </div>

      <Card title={`${items.length} exception${items.length === 1 ? '' : 's'}`} meta="auto-classified · 0 manual entries">
        <div className="py-1.5">
          {items.length === 0 ? (
            <div className="px-[18px] py-10 text-center text-[12.5px] text-ink-3">
              No exceptions match the current filters.
            </div>
          ) : (
            items.map((item, i) => (
              <ExceptionRow
                key={item.id}
                severity={item.severity}
                title={item.title}
                detail={
                  <>
                    <span>{item.suggestedAction}</span>
                    <span className="hidden text-ink-4 md:inline">·</span>
                    <span className="hidden md:inline">
                      <span className="text-ink-3">From </span>
                      <span className="text-ink-2">{item.currentClassification}</span>
                      <span className="text-ink-3"> → </span>
                      <span className="text-ink-2">{item.recommendedClassification}</span>
                    </span>
                  </>
                }
                systems={[item.source]}
                amount={`$${item.dollarImpact.toLocaleString()}`}
                onClick={() => onOpen(item)}
                rightSlot={<StatusPill status={item.status} />}
                isLast={i === items.length - 1}
              />
            ))
          )}
        </div>
      </Card>
    </div>
  );
}
