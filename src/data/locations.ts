export const polaris = {
  id: 'polaris',
  name: 'Polaris',
  status: 'live' as const,
  statusLine: 'Live · 11 sources · Synced 6:14am',
  pillVariant: 'good' as const,
  pillLabel: 'Healthy',
  stats: [
    { label: 'Yesterday revenue', figure: '34,902', currency: true, foot: '↑ 8.4% vs. last Fri', deltaDirection: 'up' as const },
    { label: 'MTD', figure: '682K', currency: true, foot: '↑ 6.2% YoY', deltaDirection: 'up' as const },
    { label: 'Lane occupancy', figure: '83%', foot: '↑ 6 pts vs. avg', deltaDirection: 'up' as const },
  ],
};

export const osu = {
  id: 'osu',
  name: 'OSU',
  nameSuffix: '· Lane Avenue',
  status: 'pre-launch' as const,
  statusLine: 'Pre-launch · 11 sources connected · Soft open May 12',
  pillVariant: 'info' as const,
  pillLabel: 'Connected',
  stats: [
    { label: 'Pre-launch bookings', figure: '147K', currency: true, foot: 'May–July deposits held', deltaDirection: 'flat' as const },
    { label: 'Configured', figure: '100%', foot: 'All sources mapped', deltaDirection: 'up' as const },
    { label: 'Days to open', figure: '18', foot: 'Pre-launch checklist 11/14', deltaDirection: 'flat' as const },
  ],
};

export const comparisonRows = [
  {
    metric: 'Revenue per square foot',
    sub: 'blended, monthly',
    polaris: '$19.48',
    osu: '$22.10',
    osuTag: 'est.',
    delta: '+13.5%',
    deltaDirection: 'up' as const,
  },
  {
    metric: 'F&B mix',
    sub: '% of total realized revenue',
    polaris: '38.4%',
    osu: '42.0%',
    osuTag: 'target',
    delta: '+3.6 pts',
    deltaDirection: 'up' as const,
  },
  {
    metric: 'Event revenue mix',
    sub: 'corporate + private events',
    polaris: '28.1%',
    osu: '31.0%',
    osuTag: 'target',
    delta: '+2.9 pts',
    deltaDirection: 'up' as const,
  },
  {
    metric: 'Lane occupancy',
    sub: 'weighted, peak windows',
    polaris: '81.6%',
    osu: '—',
    osuTag: 'tracking',
    delta: 'pending',
    deltaDirection: 'flat' as const,
  },
  {
    metric: 'Labor as % of revenue',
    sub: 'monthly',
    polaris: '26.4%',
    osu: '28.5%',
    osuTag: 'est.',
    delta: '+2.1 pts',
    deltaDirection: 'down' as const,
  },
  {
    metric: 'Identified guest %',
    sub: 'matched across systems',
    polaris: '68%',
    osu: '—',
    osuTag: 'starts at launch',
    delta: 'pending',
    deltaDirection: 'flat' as const,
  },
];

export const acquisitionReadiness = {
  score: '8.4',
  total: '/10',
  bars: [
    { label: 'Auditable financials, system-generated', pct: 95, tone: 'good' as const },
    { label: 'Repeatable unit economics', pct: 88, tone: 'good' as const },
    { label: 'Customer database — owned, transferable', pct: 92, tone: 'good' as const },
    { label: 'Owner-independence (process in system, not head)', pct: 71, tone: 'warn' as const },
    { label: 'Multi-location reporting consistency', pct: 80, tone: 'good' as const },
  ],
};

export const crossLocationReach = [
  { label: 'Unified records', value: '8,247' },
  { label: 'Identified at both', value: '412' },
  { label: 'Cross-LTV', value: '$1,242', accent: true },
  { label: 'vs. single-loc avg', value: '2.8×', positive: true },
];

// Backwards-compat shim used elsewhere.
export const locations = [polaris, osu] as const;
