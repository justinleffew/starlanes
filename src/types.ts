export type NavKey = 'digest' | 'exceptions' | 'customers' | 'multi-unit';

export type SystemKey = 'Square' | 'Triple Seat' | 'Embed' | 'Conqueror' | 'R365' | 'Rex' | '501 Fund';

export type Severity = 'Low' | 'Medium' | 'High' | 'Critical';
export type ExceptionStatus = 'New' | 'Reviewing' | 'Ready for R365' | 'Ignored';

export interface ExceptionItem {
  id: string;
  title: string;
  source: SystemKey;
  severity: Severity;
  dollarImpact: number;
  currentClassification: string;
  recommendedClassification: string;
  suggestedAction: string;
  status: ExceptionStatus;
  customerId?: string;
  whatHappened: string;
  whyItMatters: string;
  recommendedFix: string;
  aiExplanation: string;
}

export interface CustomerRecord {
  id: string;
  name: string;
  segment: string;
  totalLifetimeSpend: number;
  visitCount: number;
  eventDeposits: number;
  identifiers: {
    email: string;
    phone: string;
    cardToken: string;
    bookingId: string;
  };
  spendBySystem: Array<{ system: string; amount: number }>;
  timeline: Array<{ time: string; event: string; system: string }>;
}

export interface ExceptionFilters {
  query: string;
  source: 'All' | SystemKey;
  status: 'All' | ExceptionStatus;
  severity: 'All' | Severity;
}

export const SOURCE_OPTIONS: Array<'All' | SystemKey> = ['All', 'Square', 'Triple Seat', 'Embed', 'Conqueror', 'R365'];
export const STATUS_OPTIONS: Array<'All' | ExceptionStatus> = ['All', 'New', 'Reviewing', 'Ready for R365', 'Ignored'];
export const SEVERITY_OPTIONS: Array<'All' | Severity> = ['All', 'Low', 'Medium', 'High', 'Critical'];
