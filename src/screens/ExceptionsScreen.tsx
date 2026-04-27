import { ExceptionTable } from '../components/ExceptionTable';
import type { ExceptionFilters, ExceptionItem } from '../types';
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
    <div className="space-y-4">
      <h1 className="font-serifish text-3xl text-warm-900">Exception / Reconciliation Queue</h1>
      <div className="grid gap-2 rounded-xl border border-warm-200 bg-white p-3 md:grid-cols-4">
        <input value={filters.query} onChange={(e) => onFilter({ query: e.target.value })} className="rounded border border-warm-200 p-2 text-sm" placeholder="Search exceptions" />
        <select value={filters.source} onChange={(e) => onFilter({ source: e.target.value as ExceptionFilters['source'] })} className="rounded border border-warm-200 p-2 text-sm">
          {SOURCE_OPTIONS.map((s) => <option key={s} value={s}>{s === 'All' ? 'All sources' : s}</option>)}
        </select>
        <select value={filters.status} onChange={(e) => onFilter({ status: e.target.value as ExceptionFilters['status'] })} className="rounded border border-warm-200 p-2 text-sm">
          {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={filters.severity} onChange={(e) => onFilter({ severity: e.target.value as ExceptionFilters['severity'] })} className="rounded border border-warm-200 p-2 text-sm">
          {SEVERITY_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <ExceptionTable items={items} onOpen={onOpen} />
    </div>
  );
}
