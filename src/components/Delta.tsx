import type { ReactNode } from 'react';

export type DeltaDirection = 'up' | 'down' | 'flat';

const colorClass: Record<DeltaDirection, string> = {
  up: 'text-good',
  down: 'text-alert',
  flat: 'text-ink-3',
};

const arrow: Record<DeltaDirection, string> = {
  up: '↑',
  down: '↓',
  flat: '→',
};

export function Delta({
  direction,
  children,
  showArrow = true,
}: {
  direction: DeltaDirection;
  children: ReactNode;
  showArrow?: boolean;
}) {
  return (
    <span className={`font-mono text-[10.5px] font-medium ${colorClass[direction]}`}>
      {showArrow && direction !== 'flat' ? `${arrow[direction]} ` : ''}
      {children}
    </span>
  );
}
