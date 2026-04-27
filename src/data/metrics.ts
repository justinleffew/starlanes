export const digestMetrics = {
  yesterdayRevenue: 48210,
  realizedRevenue: 41870,
  deferredEventDeposits: 4340,
  comps: 1230,
  giftCards: 770,
  exceptionCount: 6,
  laneUtilization: 74,
  squareSays: 47990,
  commandSays: 41870,
  aiSummary:
    'Revenue closed strong, but 6 major exceptions still inflate top-line sales. Command isolates deferred event deposits and beverage package comps to protect margin visibility before R365 posting.',
};

export const topSpenders = [
  { id: 'cust-ava', name: 'Ava Mitchell', spend: 1840, systems: 'Square + Embed + Conqueror + Triple Seat' },
  { id: 'cust-ryan', name: 'Ryan Carter', spend: 1320, systems: 'Square + Conqueror' },
  { id: 'cust-noah', name: 'Noah Reed', spend: 1110, systems: 'Square + Embed' },
] as const;
