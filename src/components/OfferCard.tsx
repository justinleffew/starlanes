export function OfferCard({ title, price, timeline, onOpen }: { title: string; price: string; timeline: string; onOpen: () => void }) {
  return (
    <button onClick={onOpen} className="w-full rounded-xl border border-warm-300 bg-white p-4 text-left shadow-card hover:border-warm-600">
      <p className="text-xs uppercase tracking-wide text-warm-700">Recommended path</p>
      <h3 className="mt-1 font-serifish text-xl text-warm-900">{title}</h3>
      <p className="mt-2 text-sm text-zinc-700">{price} · {timeline}</p>
    </button>
  );
}
