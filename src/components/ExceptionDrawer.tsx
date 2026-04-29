import { X } from 'lucide-react';
import { useEffect } from 'react';
import { Pill } from './Pill';
import { SystemTag } from './SystemTag';
import { SeverityPill } from './StatusPill';
import type { ExceptionItem, ExceptionStatus } from '../types';

export function ExceptionDrawer({
  item,
  onClose,
  onStatus,
}: {
  item: ExceptionItem | null;
  onClose: () => void;
  onStatus: (id: string, status: ExceptionStatus) => void;
}) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [item, onClose]);

  if (!item) return null;

  return (
    <>
      <div className="fixed inset-0 z-30 bg-ink/40 backdrop-blur-[2px]" onClick={onClose} />
      <aside className="fixed right-0 top-0 z-40 flex h-full w-full max-w-[480px] flex-col border-l border-line bg-bg shadow-drawer">
        <header className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <SeverityPill severity={item.severity} />
              <SystemTag label={item.source} />
              <Pill variant="muted">{item.status}</Pill>
            </div>
            <h3 className="font-serif text-[22px] font-medium leading-tight -tracking-[0.015em] text-ink">
              {item.title}
            </h3>
            <div className="mt-1 font-mono text-[11px] text-ink-3">
              Impact · ${item.dollarImpact.toLocaleString()}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-line bg-surface text-ink-2 hover:bg-bg-alt"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </header>

        <div className="flex-1 space-y-3 overflow-y-auto bg-bg p-6">
          <Section title="What happened">{item.whatHappened}</Section>
          <Section title="Why it matters">{item.whyItMatters}</Section>
          <Section title="Recommended fix">
            <p className="mb-2">{item.recommendedFix}</p>
            <div className="flex flex-wrap gap-2 text-[11.5px] text-ink-2">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-3">From</span>
              <span>{item.currentClassification}</span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink-3">To</span>
              <span className="font-medium text-ink">{item.recommendedClassification}</span>
            </div>
          </Section>
          <Section title="AI explanation" muted>
            {item.aiExplanation}
          </Section>
        </div>

        <footer className="flex flex-wrap gap-2 border-t border-line bg-surface px-6 py-4">
          <button
            type="button"
            onClick={() => onStatus(item.id, 'Reviewing')}
            className="rounded-md border border-line bg-surface px-3.5 py-1.5 text-[12px] font-medium text-ink transition-colors hover:bg-bg-alt"
          >
            Mark Reviewed
          </button>
          <button
            type="button"
            onClick={() => onStatus(item.id, 'Ready for R365')}
            className="rounded-md border border-ink bg-ink px-3.5 py-1.5 text-[12px] font-medium text-bg transition-colors hover:bg-[#2a2a26]"
          >
            Send to R365
          </button>
          <button
            type="button"
            onClick={() => onStatus(item.id, 'Ignored')}
            className="ml-auto rounded-md px-3.5 py-1.5 text-[12px] font-medium text-ink-3 transition-colors hover:bg-bg-alt"
          >
            Ignore
          </button>
        </footer>
      </aside>
    </>
  );
}

function Section({
  title,
  children,
  muted = false,
}: {
  title: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border border-line ${muted ? 'bg-bg-alt' : 'bg-surface'} p-4`}
    >
      <div className="eyebrow mb-2">{title}</div>
      <div className="text-[13px] leading-[1.55] text-ink-2">{children}</div>
    </div>
  );
}
