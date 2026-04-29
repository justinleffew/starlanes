import type { SystemKey } from '../types';

export const digestMetrics = {
  date: 'Friday · April 24, 2026 · Yesterday',
  greeting: 'Good morning, Doug.',
  syncedAt: 'Synced 6:14am · 11 sources',
  yesterdayGross: 42180,
  realizedRevenue: 34902,
  realizedDeltaPct: 8.4,
  deferredDeposits: 4800,
  comps: 2953,
  giftCards: 1265,
  laneOccupancy: 83,
  uniqueGuests: 412,
  identifiedPct: 68,
  pendingExceptions: 3,
};

export const truthBreakdown = {
  realized: 30370,
  deferred: 7592,
  comps: 2953,
  giftCards: 1265,
  squareGross: 42180,
};

export const laneUtilization = [
  { window: '11–2pm', pct: 22, tone: 'info' as const },
  { window: '2–4pm', pct: 41, tone: 'warn' as const },
  { window: '4–6pm', pct: 68, tone: 'good' as const },
  { window: '6–9pm', pct: 96, tone: 'good' as const },
  { window: '9pm–close', pct: 78, tone: 'good' as const },
];

export type DigestException = {
  id: string;
  severity: 'High' | 'Medium' | 'Low';
  title: string;
  detail: string;
  emphasis?: string;
  amount: string;
  systems: SystemKey[];
};

export const digestExceptions: DigestException[] = [
  {
    id: 'dx-1',
    severity: 'High',
    title: 'Beverage package overrun — Hilton Polaris event',
    detail:
      'Premium bar package billed at $2,400. Bar consumption rang $2,847 — 18% over package. Erin should review for next quote.',
    amount: '$447 var.',
    systems: ['Triple Seat', 'Square'],
  },
  {
    id: 'dx-2',
    severity: 'Medium',
    title: 'Lane reservation conflict — Lane 14, Saturday 7pm',
    detail:
      'Rex sold 1 hour, Triple Seat holds same lane for OhioHealth event same window. Rex booking made 2 hours after event hold.',
    amount: '2 parties',
    systems: ['Rex', 'Triple Seat'],
  },
  {
    id: 'dx-3',
    severity: 'Low',
    title: 'Loyalty enrollment opportunity — 41 unidentified high-spend guests',
    detail:
      'Wi-Fi opt-in captured but no Square Customer linked. Avg spend $58 each. One-click batch enroll available.',
    amount: '+$2,378 LTV',
    systems: ['Embed', 'Square'],
  },
];

export type TopSpender = {
  id: string;
  initials: string;
  avatarBg?: string;
  name: string;
  meta: string;
  total: string;
};

export const topSpenders: TopSpender[] = [
  {
    id: 'cust-maguire',
    initials: 'RB',
    avatarBg: '#5a6a8a',
    name: 'Maguire & Strickler LLC',
    meta: 'Corporate event · 42 guests · Premium bar',
    total: '$8,420',
  },
  {
    id: 'cust-hahn',
    initials: 'MK',
    name: 'Marcus & Kelsey Hahn',
    meta: 'Birthday party · 14 kids · Add-on arcade $320',
    total: '$1,180',
  },
  {
    id: 'cust-diana',
    initials: 'DC',
    name: 'Diana Chen',
    meta: 'Lane + bar + arcade · returning · 4th visit Q2',
    total: '$284',
  },
  {
    id: 'cust-james',
    initials: 'JN',
    name: 'James Nakamura',
    meta: 'Darts league · weekly · loyalty member',
    total: '$162',
  },
];

export const aiBrief = {
  recipient: 'For Erin · Sales · 9am stand-up',
  meta: '3 min read',
  body: [
    {
      kind: 'p' as const,
      runs: [
        { t: 'text' as const, value: 'Yesterday cleared ' },
        { t: 'strong' as const, value: '$34,900 realized' },
        { t: 'text' as const, value: ', up 8% on the comparable Friday. The corporate room ran the Hilton group; the premium bar package ' },
        { t: 'em' as const, value: 'came in 18% over consumption' },
        { t: 'text' as const, value: ", so consider tightening the per-head bev allotment on next month's Hilton repeat. Bowling ran " },
        { t: 'strong' as const, value: '83% occupancy' },
        { t: 'text' as const, value: ' peak window, with Lanes 4 and 12 idle past 9pm — Tuesday/Wednesday promo audience could fill those. Three high-value corporate prospects opened inquiries from Eventective overnight; ' },
        { t: 'strong' as const, value: 'Maguire & Strickler is the priority follow-up' },
        { t: 'text' as const, value: ' — they hosted a 200-pax holiday party with us in 2024.' },
      ],
    },
  ],
};
