export function BrandMark() {
  return (
    <div className="relative h-7 w-7 overflow-hidden rounded-md bg-ink">
      <div
        className="absolute inset-[6px_4px]"
        style={{
          background:
            'linear-gradient(105deg, transparent 49%, #c2680a 49%, #c2680a 51%, transparent 51%), linear-gradient(75deg, transparent 49%, #c2680a 49%, #c2680a 51%, transparent 51%)',
        }}
      />
      <div className="absolute bottom-[5px] left-1/2 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-amber" />
    </div>
  );
}
