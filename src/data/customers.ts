import type { CustomerRecord, SystemKey } from '../types';

export type CustomerActivityItem = {
  id: string;
  day: string;
  time: string;
  title: string;
  detailLeading?: string;
  detailTrailing?: string;
  systems: Array<{ system: SystemKey; suffix?: string }>;
  amount: string;
  highlight?: boolean;
};

export type CustomerProfile = CustomerRecord & {
  initials: string;
  segmentVariant: 'good' | 'warn' | 'alert' | 'info' | 'muted';
  segmentLabel: string;
  email: string;
  phone: string;
  city: string;
  firstSeen: string;
  ltv: {
    spend: string;
    spendFoot: string;
    avgTicket: string;
    avgTicketFoot: string;
    lastVisit: string;
    lastVisitFoot: string;
    frequency: string;
    frequencyFoot: string;
    tier: string;
    tierFoot: string;
  };
  segmentTitle: { lead: string; emphasis: string };
  segmentReason: string;
  nextActionTitle: string;
  nextActionBody: string;
  nextActionValue: string;
  identitySources: Array<{ name: string; via: string }>;
  activity: CustomerActivityItem[];
};

const diana: CustomerProfile = {
  id: 'cust-diana',
  name: 'Diana Chen',
  initials: 'DC',
  segment: 'Date-night regular + corporate buyer',
  segmentVariant: 'warn',
  segmentLabel: 'Frequent · High value',
  totalLifetimeSpend: 3847,
  visitCount: 19,
  eventDeposits: 180,
  email: 'd.chen@stratton-co.com',
  phone: '(614) 555-0142',
  city: 'Worthington, OH',
  firstSeen: 'First seen · Sept 14, 2023',
  identifiers: {
    email: 'd.chen@stratton-co.com',
    phone: '(614) 555-0142',
    cardToken: 'tok_DC_4471',
    bookingId: 'TS-77194',
  },
  spendBySystem: [
    { system: 'Square', amount: 1680 },
    { system: 'Embed', amount: 480 },
    { system: 'Conqueror', amount: 1287 },
    { system: 'Triple Seat', amount: 400 },
  ],
  timeline: [
    { time: 'Apr 24 · 6:42pm', event: 'Visit · 4 systems unified into one record', system: 'Square' },
    { time: 'Apr 18 · 8:14pm', event: 'Date night · lane + bar + dinner', system: 'Square' },
    { time: 'Apr 11 · 7:30pm', event: 'Family visit · 4 guests · arcade-heavy', system: 'Embed' },
    { time: 'Mar 28 · 9:02pm', event: 'Lane + cocktails · 1 hr', system: 'Conqueror' },
    { time: 'Mar 14', event: 'Booked corporate event · Stratton-Co retreat · May 18', system: 'Triple Seat' },
  ],
  ltv: {
    spend: '$3,847',
    spendFoot: 'across 19 visits',
    avgTicket: '$202',
    avgTicketFoot: '+ 1 corporate event',
    lastVisit: 'Yesterday',
    lastVisitFoot: '$284 · 2.5 hrs',
    frequency: '~2.4×',
    frequencyFoot: 'per month, last 6mo',
    tier: 'Gold',
    tierFoot: '$1,153 to platinum',
  },
  segmentTitle: { lead: 'Date-night regular', emphasis: '+ corporate buyer' },
  segmentReason:
    '19 visits in 6 months, evening pattern (avg 7–9pm), high lane:bar ratio, bringing party of 2–4. Now also a corporate buyer — May event places her in the dual-track segment worth ~3× standard CAC value.',
  nextActionTitle: 'Send Stratton-Co holiday-party teaser',
  nextActionBody:
    'Diana booked her May retreat 9 weeks out — the same lead time would put a Q4 holiday-party touch in early October.',
  nextActionValue: '$2.5K–4K',
  identitySources: [
    { name: 'Square Customer ID', via: 'SQ-4471892' },
    { name: 'Triple Seat contact', via: 'via email' },
    { name: 'Embed game card', via: 'via phone' },
    { name: 'Rex booking', via: 'via email' },
    { name: 'Wi-Fi opt-in', via: 'via MAC + email' },
  ],
  activity: [
    {
      id: 'a1',
      day: 'Apr 24',
      time: '6:42pm',
      title: 'Visit · 2.5 hours · 4 systems unified into one record',
      systems: [
        { system: 'Square', suffix: '2 cocktails $22' },
        { system: 'Embed', suffix: '$40 game card' },
        { system: 'Conqueror', suffix: 'Lane 8 · 1 hr' },
        { system: 'Triple Seat', suffix: '$180 deposit · May 18 event' },
      ],
      amount: '$284',
      highlight: true,
    },
    {
      id: 'a2',
      day: 'Apr 18',
      time: '8:14pm',
      title: 'Date night · lane + bar + dinner',
      systems: [{ system: 'Square' }, { system: 'Conqueror' }],
      amount: '$208',
    },
    {
      id: 'a3',
      day: 'Apr 11',
      time: '7:30pm',
      title: 'Family visit · 4 guests · arcade-heavy',
      systems: [{ system: 'Embed' }, { system: 'Square' }],
      amount: '$238',
    },
    {
      id: 'a4',
      day: 'Mar 28',
      time: '9:02pm',
      title: 'Lane + cocktails · 1 hr',
      systems: [{ system: 'Conqueror' }, { system: 'Square' }],
      amount: '$112',
    },
    {
      id: 'a5',
      day: 'Mar 14',
      time: '—',
      title: 'Booked corporate event · Stratton-Co retreat · May 18, 2026',
      detailLeading: '$180 deposit held · 28 guests confirmed · F&B package: Standard',
      systems: [{ system: 'Triple Seat' }],
      amount: '$1,400 est.',
    },
  ],
};

export const customers: Record<string, CustomerProfile> = {
  'cust-diana': diana,
};

export const featuredCustomer = diana;
