import type { ExceptionStatus, Severity } from '../types';

const statusStyle: Record<ExceptionStatus, string> = {
  New: 'bg-amber-100 text-amber-900 border-amber-200',
  Reviewing: 'bg-blue-100 text-blue-900 border-blue-200',
  'Ready for R365': 'bg-emerald-100 text-emerald-900 border-emerald-200',
  Ignored: 'bg-zinc-100 text-zinc-700 border-zinc-200',
};

const severityStyle: Record<Severity, string> = {
  Low: 'text-zinc-700',
  Medium: 'text-blue-700',
  High: 'text-amber-700 font-medium',
  Critical: 'text-red-700 font-semibold',
};

export function StatusPill({ status }: { status: ExceptionStatus }) {
  return <span className={`rounded-full border px-2 py-1 text-xs ${statusStyle[status]}`}>{status}</span>;
}

export function SeverityText({ severity }: { severity: Severity }) {
  return <span className={`text-xs ${severityStyle[severity]}`}>{severity}</span>;
}
