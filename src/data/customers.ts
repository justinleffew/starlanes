import type { CustomerRecord } from '../types';

export const customers: Record<string, CustomerRecord> = {
  'cust-ava': {
    id: 'cust-ava',
    name: 'Ava Mitchell',
    segment: 'Corporate Event Planner',
    totalLifetimeSpend: 19420,
    visitCount: 14,
    eventDeposits: 6200,
    identifiers: {
      email: 'ava@northbranchcreative.com',
      phone: '(614) 555-0181',
      cardToken: 'tok_9H2D_A14X',
      bookingId: 'TS-88421',
    },
    spendBySystem: [
      { system: 'Square', amount: 8120 },
      { system: 'Embed', amount: 2580 },
      { system: 'Conqueror', amount: 3390 },
      { system: 'Triple Seat', amount: 5330 },
    ],
    timeline: [
      { time: '5:42 PM', event: 'Square tab opened for team food + beverage package', system: 'Square' },
      { time: '6:08 PM', event: 'Embed cards loaded ($240)', system: 'Embed' },
      { time: '6:15 PM', event: 'Conqueror lane session started (2 lanes)', system: 'Conqueror' },
      { time: '7:51 PM', event: 'Triple Seat deposit collected for May corporate event', system: 'Triple Seat' },
      { time: '9:17 PM', event: 'Square final settlement posted', system: 'Square' },
    ],
  },
  'cust-ryan': {
    id: 'cust-ryan',
    name: 'Ryan Carter',
    segment: 'League Captain',
    totalLifetimeSpend: 11880,
    visitCount: 28,
    eventDeposits: 0,
    identifiers: {
      email: 'ryan.carter@example.com',
      phone: '(614) 555-0130',
      cardToken: 'tok_7J8Q_R31N',
      bookingId: 'TS-0',
    },
    spendBySystem: [
      { system: 'Square', amount: 7360 },
      { system: 'Conqueror', amount: 4520 },
    ],
    timeline: [
      { time: '6:02 PM', event: 'Conqueror weekly league lane check-in', system: 'Conqueror' },
      { time: '7:29 PM', event: 'Square food + beverage settlement', system: 'Square' },
    ],
  },
  'cust-noah': {
    id: 'cust-noah',
    name: 'Noah Reed',
    segment: 'Family Weekend Guest',
    totalLifetimeSpend: 9040,
    visitCount: 11,
    eventDeposits: 0,
    identifiers: {
      email: 'noah.reed@example.com',
      phone: '(614) 555-0176',
      cardToken: 'tok_2K9P_N66M',
      bookingId: 'TS-0',
    },
    spendBySystem: [
      { system: 'Square', amount: 4120 },
      { system: 'Embed', amount: 4920 },
    ],
    timeline: [
      { time: '4:55 PM', event: 'Embed arcade card family load', system: 'Embed' },
      { time: '6:48 PM', event: 'Square dinner and beverages', system: 'Square' },
    ],
  },
};

export const featuredCustomer = customers['cust-ava'];
