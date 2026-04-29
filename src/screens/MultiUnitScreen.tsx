import { Card, SectionHeader } from '../components/Card';
import { Delta } from '../components/Delta';
import { Pill } from '../components/Pill';
import {
  acquisitionReadiness,
  comparisonRows,
  crossLocationReach,
  osu,
  polaris,
} from '../data/locations';

export function MultiUnitScreen() {
  return (
    <div>
      <div className="eyebrow mb-2">Group › Multi-unit operations</div>
      <h1 className="h-page mb-1">
        Two locations. <em>One operating system.</em>
      </h1>
      <p className="mb-7 text-[13.5px] leading-[1.5] text-ink-3">
        Polaris in production · OSU connected, 18 days from soft open · Real-time, all systems
      </p>

      {/* Hero */}
      <div className="mb-6 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-2">
        <UnitCard unit={polaris} />
        <UnitCard unit={osu} />
      </div>

      {/* Comparison */}
      <SectionHeader
        count="trailing 30 days · OSU forecast based on Polaris baseline"
        action="Export to CSV →"
      >
        Unit economics, side by side
      </SectionHeader>
      <div className="mb-6">
        <Card>
          <div>
            <div className="hidden grid-cols-[1.3fr_1fr_1fr_0.8fr] gap-4 bg-bg-alt px-[18px] py-2 font-mono text-[9.5px] font-medium uppercase tracking-[0.1em] text-ink-3 sm:grid">
              <div>Metric</div>
              <div className="text-right">Polaris</div>
              <div className="text-right">OSU (forecast)</div>
              <div className="text-right">Δ</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={row.metric}
                className={`flex flex-col gap-2 px-[18px] py-3.5 sm:grid sm:grid-cols-[1.3fr_1fr_1fr_0.8fr] sm:items-center sm:gap-4 ${
                  i === comparisonRows.length - 1 ? '' : 'border-b border-line-soft'
                }`}
              >
                <div className="text-[13px] font-medium text-ink">
                  {row.metric}
                  <small className="ml-0 block font-normal text-[11px] text-ink-3 sm:inline-block">{row.sub}</small>
                </div>
                <div className="flex flex-wrap gap-2 sm:contents">
                  <span className="num inline-flex items-center gap-1 rounded bg-bg-alt px-2 py-1 text-[11.5px] text-ink sm:bg-transparent sm:px-0 sm:py-0 sm:text-right sm:text-[12.5px]">
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.08em] text-ink-3 sm:hidden">Polaris</span>
                    <span className="sm:flex-1 sm:text-right">{row.polaris}</span>
                  </span>
                  <span className="num inline-flex items-center gap-1 rounded bg-bg-alt px-2 py-1 text-[11.5px] text-ink sm:bg-transparent sm:px-0 sm:py-0 sm:text-right sm:text-[12.5px]">
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.08em] text-ink-3 sm:hidden">OSU</span>
                    <span className="sm:flex-1 sm:text-right">
                      {row.osu} <span className="text-[10.5px] text-ink-3">{row.osuTag}</span>
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded bg-bg-alt px-2 py-1 sm:bg-transparent sm:px-0 sm:py-0 sm:text-right">
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.08em] text-ink-3 sm:hidden">Δ</span>
                    <span className="sm:flex-1 sm:text-right">
                      {row.delta === 'pending' ? (
                        <span className="font-mono text-[11.5px] font-medium text-ink-3">pending</span>
                      ) : (
                        <Delta direction={row.deltaDirection} showArrow={false}>
                          {row.delta}
                        </Delta>
                      )}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Footer two-col */}
      <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-[1.4fr_1fr]">
        <div
          className="overflow-hidden rounded-lg border border-line"
          style={{ background: 'linear-gradient(180deg, #ffffff 0%, #fbf6ea 100%)' }}
        >
          <div className="flex items-center justify-between border-b border-line-soft px-[18px] py-4">
            <div className="text-[13px] font-medium text-ink">Acquisition readiness</div>
            <div className="font-mono text-[10px] tracking-[0.05em] text-ink-3">
              For diligence-grade reporting
            </div>
          </div>
          <div className="px-[22px] pb-6 pt-5">
            <div className="mb-3.5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div className="font-serif text-[17px] font-medium -tracking-[0.01em] text-ink">
                Star Lanes Group is <em className="italic text-amber-deep">diligence-ready</em>
              </div>
              <div className="num-fig text-[30px] font-medium leading-none text-good">
                {acquisitionReadiness.score}
                <span className="text-[55%] text-ink-3">{acquisitionReadiness.total}</span>
              </div>
            </div>
            <div className="mt-1 grid gap-2.5">
              {acquisitionReadiness.bars.map((bar) => (
                <div
                  key={bar.label}
                  className="grid grid-cols-[1fr_auto] items-center gap-2 text-[12px] sm:grid-cols-[200px_1fr_auto] sm:gap-3"
                >
                  <div className="text-ink-2">{bar.label}</div>
                  <div className="col-span-2 h-1.5 overflow-hidden rounded-[3px] bg-bg-alt sm:col-span-1">
                    <div
                      className={`h-full rounded-[3px] ${bar.tone === 'good' ? 'bg-good' : 'bg-warn'}`}
                      style={{ width: `${bar.pct}%` }}
                    />
                  </div>
                  <div className="num text-[11px] font-medium text-ink">{bar.pct}%</div>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t border-line-soft pt-3.5 text-[12px] leading-[1.55] text-ink-2">
              Buyers paying multi-unit FEC operators in 2026 are paying{' '}
              <strong className="font-semibold text-ink">5×–6× EBITDA</strong> for businesses that score above 8/10
              on this rubric. <em className="italic text-amber-deep">Star Lanes Group is in that bracket.</em>
            </div>
          </div>
        </div>

        <Card title="Cross-location guests" meta="Identity stitched · last 90 days">
          <div className="px-[22px] pb-6 pt-4">
            <div className="grid grid-cols-2 gap-4">
              {crossLocationReach.map((stat) => (
                <div key={stat.label}>
                  <div className="mb-1 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink-3">
                    {stat.label}
                  </div>
                  <div
                    className={`num-fig text-[24px] font-medium -tracking-[0.015em] ${
                      stat.accent ? 'text-amber-deep' : stat.positive ? 'text-good' : 'text-ink'
                    }`}
                  >
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3.5 border-t border-line-soft pt-3.5 text-[12px] leading-[1.5] text-ink-2">
              Guests visiting both Polaris and OSU spend{' '}
              <strong className="font-semibold text-ink">2.8× the average single-location guest</strong>. The
              cross-location loyalty bridge identified them automatically — no signup needed.
            </div>
          </div>
        </Card>
      </div>

    </div>
  );
}

function UnitCard({ unit }: { unit: typeof polaris | typeof osu }) {
  const isOsu = unit.status === 'pre-launch';
  return (
    <div
      className="bg-surface p-6"
      style={
        isOsu
          ? { background: 'linear-gradient(135deg, #ffffff 0%, #fbf6ea 100%)' }
          : undefined
      }
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="font-serif text-[20px] font-medium -tracking-[0.01em] text-ink">
            {isOsu ? (
              <>
                <em className="italic text-amber-deep">{unit.name}</em>
                {(unit as typeof osu).nameSuffix ? ` ${(unit as typeof osu).nameSuffix}` : ''}
              </>
            ) : (
              unit.name
            )}
          </div>
          <div className="mt-1 flex items-center gap-3 font-mono text-[10.5px] text-ink-3">
            <span className="inline-flex items-center gap-1.5">
              <span
                className={`h-1.5 w-1.5 rounded-full ${isOsu ? 'bg-amber-deep' : 'animate-pulse bg-good'}`}
              />
              {unit.statusLine}
            </span>
          </div>
        </div>
        <Pill variant={unit.pillVariant}>{unit.pillLabel}</Pill>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {unit.stats.map((stat) => (
          <div key={stat.label}>
            <div className="mb-1 font-mono text-[9.5px] font-medium uppercase tracking-[0.08em] text-ink-3">
              {stat.label}
            </div>
            <div className="num-fig text-[22px] font-medium leading-none text-ink">
              {stat.currency && <span className="currency-prefix">$</span>}
              {stat.figure}
            </div>
            <div className="mt-1">
              <Delta direction={stat.deltaDirection} showArrow={false}>
                {stat.foot}
              </Delta>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
