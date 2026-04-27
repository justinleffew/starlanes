export function AiBriefCard({ title, summary }: { title: string; summary: string }) {
  return (
    <div className="rounded-xl border border-warm-200 bg-gradient-to-br from-white to-warm-50 p-4 shadow-card">
      <p className="text-xs uppercase tracking-wide text-warm-700">AI Operator Brief</p>
      <h3 className="mt-1 font-serifish text-xl text-warm-900">{title}</h3>
      <p className="mt-2 text-sm text-zinc-700">{summary}</p>
    </div>
  );
}
