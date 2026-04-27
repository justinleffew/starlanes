export function LocationComparison({
  locations,
}: {
  locations: ReadonlyArray<{ name: string; monthlyRevenue: number; exceptionVolume: number; reconciliationTax: number; identityMatchRate: number; exitReadiness: number }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {locations.map((l) => (
        <div key={l.name} className="rounded-xl border border-warm-200 bg-white p-4 shadow-card">
          <h3 className="font-serifish text-xl text-warm-900">{l.name}</h3>
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <p>Revenue: <strong>${l.monthlyRevenue.toLocaleString()}</strong></p>
            <p>Exceptions: <strong>{l.exceptionVolume}</strong></p>
            <p>Reconciliation tax: <strong>${l.reconciliationTax.toLocaleString()}</strong></p>
            <p>Identity match: <strong>{l.identityMatchRate}%</strong></p>
            <p className="col-span-2">Exit-readiness score: <strong>{l.exitReadiness}/100</strong></p>
          </div>
        </div>
      ))}
    </div>
  );
}
