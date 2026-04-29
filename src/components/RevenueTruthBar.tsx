import { Card } from './Card';

const fmt = (n: number) => `$${n.toLocaleString()}`;

export function RevenueTruthBar({
  realized,
  deferred,
  comps,
  giftCards,
  squareGross,
}: {
  realized: number;
  deferred: number;
  comps: number;
  giftCards: number;
  squareGross: number;
}) {
  const total = realized + deferred + comps + giftCards;
  const pct = (n: number) => Math.round((n / total) * 100);

  return (
    <Card title="Revenue classification" meta="Auto-classified · 0 manual entries">
      <div className="px-[18px] pt-1">
        <div className="my-3 flex h-8 overflow-hidden rounded-[5px] border border-line">
          <div
            className="flex items-center justify-center font-mono text-[10px] font-medium text-white"
            style={{ flex: realized / total, background: '#4a7c59' }}
          >
            {pct(realized)}%
          </div>
          <div
            className="flex items-center justify-center font-mono text-[10px] font-medium text-white"
            style={{ flex: deferred / total, background: '#4a6b85' }}
          >
            {pct(deferred)}%
          </div>
          <div
            className="flex items-center justify-center font-mono text-[10px] font-medium text-ink"
            style={{ flex: comps / total, background: '#b8b3a3' }}
          >
            {pct(comps)}%
          </div>
          <div
            className="flex items-center justify-center font-mono text-[10px] font-medium text-white"
            style={{ flex: giftCards / total, background: '#b8632a' }}
          >
            {pct(giftCards)}%
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-2 gap-x-6 px-[18px] pt-3.5 pb-1 sm:grid-cols-2">
        <LegendItem swatch="#4a7c59" label="Realized — F&B, lanes, arcade, darts" value={fmt(realized)} />
        <LegendItem swatch="#4a6b85" label="Deferred — event deposits" value={fmt(deferred)} />
        <LegendItem swatch="#b8b3a3" label="Inventory comps — bev packages" value={fmt(comps)} />
        <LegendItem swatch="#b8632a" label="Gift card redemption" value={fmt(giftCards)} />
      </div>

      <div className="m-[16px_18px_18px] flex items-start gap-2.5 rounded-[5px] bg-alert-soft p-3 text-[12px] leading-[1.5] text-alert">
        <span className="mt-px text-[14px] leading-none">⚠</span>
        <div>
          Square reported <strong className="font-semibold text-alert">{fmt(squareGross)} in gross sales</strong>.
          That&apos;s {fmt(squareGross - realized)} higher than realized revenue — the deferred deposits and comp
          checks are <strong className="font-semibold text-alert">auto-routed to R365 correctly</strong>, no
          journal entries needed.
        </div>
      </div>
    </Card>
  );
}

function LegendItem({ swatch, label, value }: { swatch: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 text-[12px]">
      <div className="h-2 w-2 rounded-[2px]" style={{ background: swatch }} />
      <div className="flex-1 text-ink-2">{label}</div>
      <div className="num font-medium text-ink">{value}</div>
    </div>
  );
}
