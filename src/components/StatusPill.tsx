import { Pill, type PillVariant } from './Pill';
import type { ExceptionStatus, Severity } from '../types';

const statusVariant: Record<ExceptionStatus, PillVariant> = {
  New: 'warn',
  Reviewing: 'info',
  'Ready for R365': 'good',
  Ignored: 'muted',
};

const severityVariant: Record<Severity, PillVariant> = {
  Low: 'info',
  Medium: 'warn',
  High: 'alert',
  Critical: 'alert',
};

export function StatusPill({ status }: { status: ExceptionStatus }) {
  return <Pill variant={statusVariant[status]}>{status}</Pill>;
}

export function SeverityPill({ severity }: { severity: Severity }) {
  return <Pill variant={severityVariant[severity]}>{severity}</Pill>;
}

export function SeverityText({ severity }: { severity: Severity }) {
  return <SeverityPill severity={severity} />;
}
