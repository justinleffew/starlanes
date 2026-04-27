import { LocationComparison } from '../components/LocationComparison';
import { OfferCard } from '../components/OfferCard';
import { locations } from '../data/locations';
import { offers } from '../data/offers';

export function MultiUnitScreen({ onOpenOffer }: { onOpenOffer: (id: string) => void }) {
  return (
    <div className="space-y-4">
      <h1 className="font-serifish text-3xl text-warm-900">Multi-Unit Dashboard</h1>
      <LocationComparison locations={locations} />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-warm-200 bg-white p-4 shadow-card">
          <h3 className="font-serifish text-lg">Buyer diligence risk</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
            <li>Revenue classification drift across systems increases diligence friction.</li>
            <li>Cross-location loyalty identity is only partially linked today.</li>
            <li>Reconciliation tax estimated at $19,000/month across both units.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-warm-200 bg-white p-4 shadow-card">
          <h3 className="font-serifish text-lg">Cross-location loyalty readiness</h3>
          <p className="mt-2 text-sm text-zinc-700">Command preview shows 1,420 shared households likely to visit both Polaris and OSU within 90 days of launch when identity is normalized.</p>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {offers.map((offer) => (
          <OfferCard key={offer.id} title={offer.name} price={offer.price} timeline={offer.timeline} onOpen={() => onOpenOffer(offer.id)} />
        ))}
      </div>
    </div>
  );
}
