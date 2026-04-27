import type { ExceptionItem, ExceptionStatus } from '../types';

export function ExceptionDrawer({
  item,
  onClose,
  onStatus,
}: {
  item: ExceptionItem | null;
  onClose: () => void;
  onStatus: (id: string, status: ExceptionStatus) => void;
}) {
  if (!item) return null;

  return (
    <aside className="fixed right-0 top-0 z-20 h-full w-full max-w-md border-l border-warm-200 bg-white p-5 shadow-2xl">
      <button onClick={onClose} className="text-sm text-warm-700">Close</button>
      <h3 className="mt-2 font-serifish text-2xl text-warm-900">{item.title}</h3>
      <div className="mt-4 space-y-3 text-sm text-zinc-700">
        <section><h4 className="font-semibold text-warm-900">What happened</h4><p>{item.whatHappened}</p></section>
        <section><h4 className="font-semibold text-warm-900">Why it matters</h4><p>{item.whyItMatters}</p></section>
        <section><h4 className="font-semibold text-warm-900">Recommended fix</h4><p>{item.recommendedFix}</p></section>
        <section><h4 className="font-semibold text-warm-900">AI explanation</h4><p>{item.aiExplanation}</p></section>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <button onClick={() => onStatus(item.id, 'Reviewing')} className="rounded-md border px-3 py-2 text-xs">Mark Reviewed</button>
        <button onClick={() => onStatus(item.id, 'Ready for R365')} className="rounded-md border bg-warm-900 px-3 py-2 text-xs text-white">Send to R365</button>
        <button onClick={() => onStatus(item.id, 'Ignored')} className="rounded-md border px-3 py-2 text-xs">Ignore</button>
      </div>
    </aside>
  );
}
