import type { ReactNode } from 'react';
import { Delta, type DeltaDirection } from './Delta';

export function MetricCard({
  label,
  figure,
  currency,
  delta,
  deltaDirection = 'flat',
  vs,
  onClick,
}: {
  label: string;
  figure: ReactNode;
  currency?: boolean;
  delta?: ReactNode;
  deltaDirection?: DeltaDirection;
  vs?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col gap-1.5 bg-surface p-[18px_20px] transition-colors duration-150 ${
        onClick ? 'cursor-pointer hover:bg-surface-2' : ''
      }`}
    >
      <div className="font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink-3">
        {label}
      </div>
      <div className="num-fig text-[28px] font-medium leading-none text-ink">
        {currency && <span className="currency-prefix">$</span>}
        {figure}
      </div>
      {(delta || vs) && (
        <div className="mt-0.5 flex items-center gap-2">
          {delta && <Delta direction={deltaDirection}>{delta}</Delta>}
          {vs && <span className="font-mono text-[10.5px] text-ink-3">{vs}</span>}
        </div>
      )}
    </div>
  );
}
