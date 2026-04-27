const fmt = (n: number) => `$${n.toLocaleString()}`;

export function RevenueTruthBar({ realized, deferred, comps, giftCards }: { realized: number; deferred: number; comps: number; giftCards: number }) {
  const total = realized + deferred + comps + giftCards;
  const seg = (value: number) => `${(value / total) * 100}%`;

  return (
    <div className="rounded-xl border border-warm-200 bg-white p-4 shadow-card">
      <h3 className="font-serifish text-lg text-warm-900">Revenue Truth Bar</h3>
      <div className="mt-3 flex h-4 overflow-hidden rounded-full bg-warm-100">
        <div style={{ width: seg(realized) }} className="bg-emerald-500" title="Realized" />
        <div style={{ width: seg(deferred) }} className="bg-amber-500" title="Deferred" />
        <div style={{ width: seg(comps) }} className="bg-rose-400" title="Comps" />
        <div style={{ width: seg(giftCards) }} className="bg-indigo-400" title="Gift Cards" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <p>Realized revenue: <strong>{fmt(realized)}</strong></p>
        <p>Deferred deposits: <strong>{fmt(deferred)}</strong></p>
        <p>Comps / inventory: <strong>{fmt(comps)}</strong></p>
        <p>Gift cards / liability: <strong>{fmt(giftCards)}</strong></p>
      </div>
    </div>
  );
}
