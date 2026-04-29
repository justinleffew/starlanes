import type { SystemKey } from '../types';

const colorClass: Record<SystemKey, string> = {
  Square: 'text-sys-square',
  'Triple Seat': 'text-sys-tripleseat',
  Embed: 'text-sys-embed',
  Conqueror: 'text-sys-conqueror',
  Rex: 'text-sys-rex',
  R365: 'text-ink-3',
  '501 Fund': 'text-sys-fund',
};

export function SystemTag({ label, suffix }: { label: SystemKey | string; suffix?: string }) {
  const cls = (colorClass as Record<string, string>)[label] ?? 'text-ink-3';
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-[3px] bg-black/[0.03] px-1.5 py-[1px] font-mono text-[9.5px] font-medium uppercase tracking-[0.05em] ${cls}`}
    >
      <span className="h-1 w-1 rounded-full bg-current" />
      <span>
        {label}
        {suffix ? ` · ${suffix}` : ''}
      </span>
    </span>
  );
}
