import { SeverityText, StatusPill } from './StatusPill';
import { SystemTag } from './SystemTag';
import type { ExceptionItem } from '../types';

export function ExceptionTable({ items, onOpen }: { items: ExceptionItem[]; onOpen: (item: ExceptionItem) => void }) {
  return (
    <div className="overflow-hidden rounded-xl border border-warm-200 bg-white shadow-card">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-warm-50 text-xs uppercase tracking-wide text-warm-700">
          <tr>
            <th className="p-3">Exception</th><th className="p-3">Source</th><th className="p-3">Severity</th><th className="p-3">Impact</th><th className="p-3">Current</th><th className="p-3">Recommended</th><th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} onClick={() => onOpen(item)} className="cursor-pointer border-t border-warm-100 hover:bg-warm-50/50">
              <td className="p-3"><p className="font-medium">{item.title}</p><p className="text-xs text-zinc-500">{item.suggestedAction}</p></td>
              <td className="p-3"><SystemTag label={item.source} /></td>
              <td className="p-3"><SeverityText severity={item.severity} /></td>
              <td className="p-3">${item.dollarImpact.toLocaleString()}</td>
              <td className="p-3 text-xs">{item.currentClassification}</td>
              <td className="p-3 text-xs">{item.recommendedClassification}</td>
              <td className="p-3"><StatusPill status={item.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
