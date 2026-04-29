export type LaneRow = {
  window: string;
  pct: number;
  tone?: 'good' | 'warn' | 'alert' | 'info';
};

const fillColor: Record<NonNullable<LaneRow['tone']>, string> = {
  good: 'bg-good',
  warn: 'bg-warn',
  alert: 'bg-alert',
  info: 'bg-info',
};

export function LaneUtilizationChart({ rows }: { rows: LaneRow[] }) {
  return (
    <div className="flex flex-col gap-2.5 px-[18px] py-[14px] pb-[18px]">
      {rows.map((row) => (
        <div key={row.window} className="grid grid-cols-[60px_1fr_50px] items-center gap-3 sm:grid-cols-[60px_1fr_50px]">
          <span className="font-mono text-[10.5px] text-ink-3">{row.window}</span>
          <div className="h-3.5 overflow-hidden rounded-[3px] bg-bg-alt">
            <div
              className={`h-full rounded-[3px] transition-[width] duration-500 ease-out ${fillColor[row.tone ?? 'good']}`}
              style={{ width: `${row.pct}%` }}
            />
          </div>
          <span className="num text-right text-[11px] font-medium text-ink">{row.pct}%</span>
        </div>
      ))}
    </div>
  );
}
