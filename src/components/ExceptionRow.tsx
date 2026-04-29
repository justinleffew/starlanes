import type { ReactNode } from 'react';
import type { Severity, SystemKey } from '../types';
import { SystemTag } from './SystemTag';

const severityColor: Record<Severity, string> = {
  Critical: 'bg-alert',
  High: 'bg-alert',
  Medium: 'bg-warn',
  Low: 'bg-info',
};

export function ExceptionRow({
  title,
  detail,
  systems,
  amount,
  severity,
  onClick,
  rightSlot,
  isLast = false,
}: {
  title: ReactNode;
  detail?: ReactNode;
  systems?: SystemKey[];
  amount?: ReactNode;
  severity: Severity;
  onClick?: () => void;
  rightSlot?: ReactNode;
  isLast?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={`grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-3 px-[18px] py-3 transition-colors duration-150 hover:bg-surface-2 ${
        isLast ? '' : 'border-b border-line-soft'
      }`}
    >
      <div className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${severityColor[severity]}`} />
      <div className="min-w-0">
        <div className="mb-0.5 text-[12.5px] font-medium text-ink">{title}</div>
        {detail && (
          <div className="flex flex-wrap items-center gap-2 text-[11.5px] leading-[1.4] text-ink-3">
            <span>{detail}</span>
            {systems?.map((s) => <SystemTag key={s} label={s} />)}
          </div>
        )}
      </div>
      <div className="flex items-center gap-3 text-right">
        {amount && <span className="num text-[12px] font-medium text-ink">{amount}</span>}
        {rightSlot}
      </div>
    </div>
  );
}
