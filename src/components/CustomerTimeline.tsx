export function CustomerTimeline({ events }: { events: Array<{ time: string; event: string; system: string }> }) {
  return (
    <div className="rounded-xl border border-warm-200 bg-white p-4 shadow-card">
      <h3 className="font-serifish text-lg text-warm-900">Activity Timeline</h3>
      <ol className="mt-3 space-y-3">
        {events.map((e) => (
          <li key={`${e.time}-${e.event}`} className="border-l-2 border-warm-200 pl-3">
            <p className="text-xs text-warm-700">{e.time} · {e.system}</p>
            <p className="text-sm text-zinc-700">{e.event}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
