export function MetricCard({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-xl border border-warm-200 bg-white p-4 shadow-card">
      <p className="text-xs uppercase tracking-wide text-warm-700">{label}</p>
      <p className="mt-2 font-serifish text-3xl text-warm-900">{value}</p>
      {note && <p className="mt-1 text-xs text-zinc-600">{note}</p>}
    </div>
  );
}
