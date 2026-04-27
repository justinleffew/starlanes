import { AiBriefCard } from '../components/AiBriefCard';
import { CustomerTimeline } from '../components/CustomerTimeline';
import { customers, featuredCustomer } from '../data/customers';

export function CustomerScreen({ customerId }: { customerId?: string }) {
  const customer = (customerId && customers[customerId]) || featuredCustomer;

  return (
    <div className="space-y-4">
      <h1 className="font-serifish text-3xl text-warm-900">Customer Profile</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-warm-200 bg-white p-4 shadow-card">
          <h3 className="font-serifish text-2xl text-warm-900">{customer.name}</h3>
          <p className="text-sm text-zinc-600">{customer.segment}</p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
            <p>Total lifetime spend: <strong>${customer.totalLifetimeSpend.toLocaleString()}</strong></p>
            <p>Visit history: <strong>{customer.visitCount} visits</strong></p>
            <p>Event deposits: <strong>${customer.eventDeposits.toLocaleString()}</strong></p>
            <p>One customer record: <strong>Active</strong></p>
          </div>
          <div className="mt-4 rounded-lg border border-warm-200 p-3 text-xs">
            <p><strong>Matched identifiers:</strong></p>
            <p>{customer.identifiers.email}</p>
            <p>{customer.identifiers.phone}</p>
            <p>{customer.identifiers.cardToken}</p>
            <p>{customer.identifiers.bookingId}</p>
          </div>
        </div>
        <div className="rounded-xl border border-warm-200 bg-white p-4 shadow-card">
          <h3 className="font-serifish text-lg text-warm-900">Spend by source system</h3>
          <div className="mt-3 space-y-2">
            {customer.spendBySystem.map((s) => (
              <div key={s.system}>
                <div className="flex justify-between text-sm"><span>{s.system}</span><strong>${s.amount.toLocaleString()}</strong></div>
                <div className="mt-1 h-2 rounded bg-warm-100"><div className="h-2 rounded bg-warm-600" style={{ width: `${Math.min((s.amount / 9000) * 100, 100)}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-warm-200 bg-white p-4 shadow-card">
          <h3 className="font-serifish text-lg text-warm-900">Before Command</h3>
          <p className="mt-2 text-sm text-zinc-700">Records split across POS, attractions, lanes, and events. Teams cannot trust one customer ledger for loyalty or diligence.</p>
        </div>
        <div className="rounded-xl border border-warm-200 bg-white p-4 shadow-card">
          <h3 className="font-serifish text-lg text-warm-900">After Command</h3>
          <p className="mt-2 text-sm text-zinc-700">Unified identity and activity timeline tied to one revenue ledger. Exception risk drops and loyalty readiness improves.</p>
        </div>
      </div>
      <CustomerTimeline events={customer.timeline} />
      <AiBriefCard title="AI next-best-action" summary="Offer this customer an OSU launch package calibrated to recent spend mix. This lifts cross-location conversion while keeping margin guardrails intact." />
    </div>
  );
}
