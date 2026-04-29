import type { ReactNode } from 'react';

export function Card({
  title,
  meta,
  children,
  className = '',
  bodyClassName = '',
}: {
  title?: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-lg border border-line bg-surface ${className}`}>
      {(title || meta) && (
        <div className="flex items-center justify-between border-b border-line-soft px-[18px] py-4">
          {title && <div className="text-[13px] font-medium text-ink">{title}</div>}
          {meta && <div className="font-mono text-[10px] tracking-[0.05em] text-ink-3">{meta}</div>}
        </div>
      )}
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}

export function SectionHeader({
  children,
  count,
  action,
  onAction,
  className = '',
}: {
  children: ReactNode;
  count?: ReactNode;
  action?: ReactNode;
  onAction?: () => void;
  className?: string;
}) {
  return (
    <h2 className={`mb-3.5 flex flex-wrap items-baseline gap-x-3 gap-y-1 h-section ${className}`}>
      <span>{children}</span>
      {count && <span className="font-mono text-[11px] font-normal text-ink-3">{count}</span>}
      {action && (
        <button
          type="button"
          onClick={onAction}
          className="ml-auto cursor-pointer text-[11.5px] font-medium text-amber"
        >
          {action}
        </button>
      )}
    </h2>
  );
}
