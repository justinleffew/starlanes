import type { ReactNode } from 'react';

export type PillVariant = 'good' | 'warn' | 'alert' | 'info' | 'muted';

const variantClass: Record<PillVariant, string> = {
  good: 'bg-good-soft text-good',
  warn: 'bg-warn-soft text-warn',
  alert: 'bg-alert-soft text-alert',
  info: 'bg-info-soft text-info',
  muted: 'bg-black/[0.04] text-ink-3',
};

export function Pill({ variant = 'muted', children }: { variant?: PillVariant; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-[7px] py-[2px] font-mono text-[10px] font-medium uppercase tracking-[0.04em] whitespace-nowrap ${variantClass[variant]}`}
    >
      <span className="h-[5px] w-[5px] rounded-full bg-current" />
      {children}
    </span>
  );
}
