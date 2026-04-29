import { Calendar } from 'lucide-react';
import { Card, SectionHeader } from '../components/Card';
import { ExceptionRow } from '../components/ExceptionRow';
import { LaneUtilizationChart } from '../components/LaneUtilizationChart';
import { MetricCard } from '../components/MetricCard';
import { RevenueTruthBar } from '../components/RevenueTruthBar';
import {
  aiBrief,
  digestExceptions,
  digestMetrics,
  laneUtilization,
  topSpenders,
  truthBreakdown,
} from '../data/metrics';
import type { Severity } from '../types';

const fmtNum = (n: number) => n.toLocaleString();
const fmtFig = (n: number) => `$${fmtNum(n)}`;

export function DigestScreen({
  onOpenExceptions,
  onOpenCustomer,
}: {
  onOpenExceptions: () => void;
  onOpenCustomer: (id: string) => void;
}) {
  const severityMap: Record<'High' | 'Medium' | 'Low', Severity> = {
    High: 'High',
    Medium: 'Medium',
    Low: 'Low',
  };

  return (
    <div>
      <header className="mb-7 flex flex-col gap-3 border-b border-line pb-6 md:mb-7 md:flex-row md:items-end md:justify-between md:gap-8">
        <div className="flex-1">
          <span className="mb-3.5 inline-flex items-center gap-2 rounded-full bg-amber-soft px-2.5 py-1 font-mono text-[10.5px] font-medium uppercase tracking-[0.04em] text-amber-deep">
            <Calendar className="h-2.5 w-2.5" />
            {digestMetrics.date}
          </span>
          <h1 className="h-page mb-1">
            Yesterday at <em>Polaris.</em>
          </h1>
          <p className="text-[13.5px] leading-[1.5] text-ink-3">
            {fmtFig(digestMetrics.yesterdayGross)} across the floor. {digestMetrics.pendingExceptions} things need
            your attention before doors open at 4pm.
          </p>
        </div>
        <div className="flex flex-col gap-1 text-left md:items-end md:text-right">
          <div className="font-serif text-[14px] italic text-ink-3">{digestMetrics.greeting}</div>
          <div className="font-mono text-[11px] text-ink-3">{digestMetrics.syncedAt}</div>
        </div>
      </header>

      {/* Metric row */}
      <div className="mb-7 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-4">
        <MetricCard
          label="Realized revenue"
          figure={fmtNum(digestMetrics.realizedRevenue)}
          currency
          delta={`${digestMetrics.realizedDeltaPct}%`}
          deltaDirection="up"
          vs="vs. last Fri"
        />
        <MetricCard
          label="Deferred deposits"
          figure={fmtNum(digestMetrics.deferredDeposits)}
          currency
          delta="3 events"
          deltaDirection="flat"
          vs="held as liability"
        />
        <MetricCard
          label="Lane occupancy"
          figure={`${digestMetrics.laneOccupancy}%`}
          delta="6 pts"
          deltaDirection="up"
          vs="peak 6–9pm"
        />
        <MetricCard
          label="Unique guests"
          figure={fmtNum(digestMetrics.uniqueGuests)}
          delta="12%"
          deltaDirection="up"
          vs={`${digestMetrics.identifiedPct}% identified`}
        />
      </div>

      {/* Two-column body */}
      <div className="grid gap-5 lg:grid-cols-[1.7fr_1fr]">
        {/* Left column */}
        <div>
          <SectionHeader count={`how ${fmtFig(digestMetrics.yesterdayGross)} actually splits`}>
            The truth, broken down
          </SectionHeader>
          <div className="mb-6">
            <RevenueTruthBar
              realized={truthBreakdown.realized}
              deferred={truthBreakdown.deferred}
              comps={truthBreakdown.comps}
              giftCards={truthBreakdown.giftCards}
              squareGross={truthBreakdown.squareGross}
            />
          </div>

          <SectionHeader
            count={`${digestExceptions.length} items`}
            action="Mark all reviewed →"
            onAction={onOpenExceptions}
          >
            Needs your attention
          </SectionHeader>
          <div className="mb-6">
            <Card>
              <div className="py-1.5">
                {digestExceptions.map((ex, i) => (
                  <ExceptionRow
                    key={ex.id}
                    severity={severityMap[ex.severity]}
                    title={ex.title}
                    detail={ex.detail}
                    systems={ex.systems}
                    amount={ex.amount}
                    onClick={onOpenExceptions}
                    isLast={i === digestExceptions.length - 1}
                  />
                ))}
              </div>
            </Card>
          </div>

          <SectionHeader count="auto-drafted · edit before sending">Brief for the morning huddle</SectionHeader>
          <div
            className="overflow-hidden rounded-lg border border-line"
            style={{ background: 'linear-gradient(180deg, #ffffff 0%, #faf6ec 100%)' }}
          >
            <div className="flex items-center justify-between border-b border-line-soft px-[18px] py-4">
              <div className="text-[13px] font-medium text-ink">{aiBrief.recipient}</div>
              <div className="font-mono text-[10px] tracking-[0.05em] text-ink-3">{aiBrief.meta}</div>
            </div>
            <div className="px-[18px] py-4 pb-[18px] text-[13px] leading-[1.6] text-ink-2">
              {aiBrief.body[0].runs.map((run, idx) => {
                if (run.t === 'strong') return <strong key={idx} className="font-semibold text-ink">{run.value}</strong>;
                if (run.t === 'em') return <em key={idx} className="italic text-amber-deep">{run.value}</em>;
                return <span key={idx}>{run.value}</span>;
              })}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5">
          <Card title="Lane utilization · yesterday" meta="24 lanes">
            <LaneUtilizationChart rows={laneUtilization} />
          </Card>

          <Card title="Top guests · yesterday" meta="Click to open profile">
            <div className="py-1">
              {topSpenders.map((sp, i) => (
                <button
                  key={sp.id}
                  type="button"
                  onClick={() => onOpenCustomer(sp.id)}
                  className={`grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-2.5 px-[18px] py-2.5 text-left transition-colors hover:bg-surface-2 ${
                    i === topSpenders.length - 1 ? '' : 'border-b border-line-soft'
                  }`}
                >
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-medium"
                    style={{
                      background: sp.avatarBg ?? '#f3f0e8',
                      color: sp.avatarBg ? '#fff' : '#4a4a44',
                    }}
                  >
                    {sp.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12.5px] font-medium leading-tight text-ink">{sp.name}</div>
                    <div className="text-[11px] leading-tight text-ink-3">{sp.meta}</div>
                  </div>
                  <div className="num text-right text-[12px] font-medium text-ink">{sp.total}</div>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
