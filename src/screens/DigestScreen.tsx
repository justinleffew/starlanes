import { AiBriefCard } from '../components/AiBriefCard';
import { MetricCard } from '../components/MetricCard';
import { RevenueTruthBar } from '../components/RevenueTruthBar';
import { digestMetrics, topSpenders } from '../data/metrics';

export function DigestScreen({ onOpenExceptions, onOpenCustomer }: { onOpenExceptions: () => void; onOpenCustomer: (id: string) => void }) {
  return (
    <div className="space-y-4">
      <h1 className="font-serifish text-3xl text-warm-900">Daily Operator Digest</h1>
      <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
        <MetricCard label="Yesterday revenue" value={`$${digestMetrics.yesterdayRevenue.toLocaleString()}`} />
        <MetricCard label="Realized revenue" value={`$${digestMetrics.realizedRevenue.toLocaleString()}`} />
        <MetricCard label="Deferred event deposits" value={`$${digestMetrics.deferredEventDeposits.toLocaleString()}`} />
        <button onClick={onOpenExceptions}><MetricCard label="Exception count" value={`${digestMetrics.exceptionCount}`} note="Tap to open queue" /></button>
        <MetricCard label="Lane utilization" value={`${digestMetrics.laneUtilization}%`} />
        <MetricCard label="Square says vs Command says" value={`$${digestMetrics.squareSays.toLocaleString()} / $${digestMetrics.commandSays.toLocaleString()}`} />
      </div>
      <RevenueTruthBar realized={digestMetrics.realizedRevenue} deferred={digestMetrics.deferredEventDeposits} comps={digestMetrics.comps} giftCards={digestMetrics.giftCards} />
      <AiBriefCard title="Today’s operating summary" summary={digestMetrics.aiSummary} />
      <div className="rounded-xl border border-warm-200 bg-white p-4 shadow-card">
        <h3 className="font-serifish text-xl text-warm-900">Top Spenders / High-Value Customers</h3>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {topSpenders.map((spender) => (
            <button key={spender.id} onClick={() => onOpenCustomer(spender.id)} className="rounded-lg border border-warm-200 p-3 text-left hover:bg-warm-50">
              <p className="font-medium">{spender.name}</p>
              <p className="text-sm text-zinc-600">${spender.spend.toLocaleString()}</p>
              <p className="text-xs text-zinc-500">{spender.systems}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
