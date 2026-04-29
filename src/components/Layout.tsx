import { useEffect, useState, type ReactNode } from 'react';
import {
  BarChart3,
  Bell,
  Calendar,
  CalendarRange,
  ChevronDown,
  ChevronRight,
  FileText,
  Grid2x2,
  Menu,
  Plus,
  RefreshCw,
  Search,
  Users,
  Wallet,
} from 'lucide-react';
import { BrandMark } from './BrandMark';
import type { NavKey } from '../types';

type NavItem = {
  key?: NavKey;
  label: string;
  icon: typeof Calendar;
  count?: number;
  disabled?: boolean;
};

type NavGroup = {
  label: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    label: 'Today',
    items: [
      { key: 'digest', label: 'Daily digest', icon: BarChart3, count: 3 },
      { label: 'Reservations', icon: CalendarRange, disabled: true },
      { label: 'Events', icon: Calendar, count: 12, disabled: true },
    ],
  },
  {
    label: 'Operations',
    items: [
      { key: 'exceptions', label: 'Exceptions', icon: FileText, count: 6 },
      { key: 'customers', label: 'Customers', icon: Users },
      { label: 'Revenue ledger', icon: Wallet, disabled: true },
    ],
  },
  {
    label: 'Group',
    items: [
      { key: 'multi-unit', label: 'Multi-unit', icon: Grid2x2 },
      { label: 'Sources', icon: RefreshCw, count: 11, disabled: true },
    ],
  },
];

const breadcrumbs: Record<NavKey, { venue: string; crumb: string; mobile: string; venueChip: string }> = {
  digest: { venue: 'Star Lanes Polaris', crumb: 'Daily digest', mobile: 'Daily digest', venueChip: 'Polaris' },
  exceptions: { venue: 'Star Lanes Polaris', crumb: 'Exceptions', mobile: 'Exceptions', venueChip: 'Polaris' },
  customers: { venue: 'Star Lanes Polaris', crumb: 'Customers › Diana Chen', mobile: 'Diana Chen', venueChip: 'Polaris' },
  'multi-unit': { venue: 'Star Lanes Group', crumb: 'Multi-unit operations', mobile: 'Multi-unit', venueChip: 'Group · 2 venues' },
};

export function Layout({
  active,
  onNavigate,
  children,
}: {
  active: NavKey;
  onNavigate: (key: NavKey) => void;
  children: ReactNode;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [active]);

  const crumbs = breadcrumbs[active];

  return (
    <div className="min-h-screen">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[240px_1fr] xl:grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-0 z-[60] flex h-screen w-[280px] max-w-[85vw] flex-col overflow-y-auto border-r border-line bg-bg-alt p-[20px_14px] transition-transform duration-200 md:sticky md:top-0 md:w-auto md:max-w-none md:translate-x-0 md:shadow-none ${
            drawerOpen ? 'translate-x-0 shadow-[0_8px_32px_rgba(0,0,0,0.18)]' : '-translate-x-full'
          }`}
        >
          <div className="mb-4 flex items-center gap-2.5 border-b border-line px-2 pb-[22px] pt-1.5">
            <BrandMark />
            <div className="font-serif text-[17px] font-medium leading-none -tracking-[0.015em] text-ink">
              Star Lanes <em className="font-normal italic text-ink-3">Command</em>
            </div>
          </div>

          {/* Venue switcher */}
          <button
            type="button"
            className="mb-[18px] flex cursor-pointer items-center justify-between gap-2 rounded-md border border-line bg-surface px-2.5 py-2 transition-colors duration-150 hover:border-ink-3"
          >
            <div className="flex min-w-0 flex-col gap-px text-left">
              <div className="font-mono text-[9px] uppercase tracking-[0.08em] text-ink-3">Venue</div>
              <div className="truncate text-[13px] font-medium leading-tight text-ink">{crumbs.venueChip}</div>
            </div>
            <ChevronDown className="h-3 w-3 flex-shrink-0 text-ink-3" />
          </button>

          {navGroups.map((group) => (
            <div key={group.label} className="mb-[18px]">
              <div className="px-2 pb-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-ink-3">
                {group.label}
              </div>
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = item.key === active;
                const isInteractive = !item.disabled && item.key !== undefined;
                return (
                  <button
                    key={item.label}
                    type="button"
                    disabled={!isInteractive}
                    onClick={() => item.key && onNavigate(item.key)}
                    className={`relative mb-px flex w-full items-center gap-2.5 rounded-[5px] px-2 py-[7px] text-left text-[13px] font-medium transition-all duration-100 ${
                      isActive
                        ? 'bg-surface text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04)]'
                        : isInteractive
                        ? 'text-ink-2 hover:bg-black/[0.03] hover:text-ink'
                        : 'cursor-default text-ink-2 opacity-70'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute -left-3.5 top-2 bottom-2 w-0.5 rounded-r bg-amber md:block hidden" />
                    )}
                    <Icon className={`h-3.5 w-3.5 flex-shrink-0 ${isActive ? 'text-amber' : 'text-ink-3'}`} />
                    <span className="flex-1">{item.label}</span>
                    {item.count !== undefined && (
                      <span className="ml-auto rounded-[3px] bg-black/[0.04] px-1.5 py-px font-mono text-[10px] text-ink-3">
                        {item.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}

          <div className="mt-auto border-t border-line pt-4">
            <button
              type="button"
              className="flex w-full items-center gap-2.5 rounded-[5px] px-2 py-1.5 text-left transition-colors hover:bg-black/[0.03]"
            >
              <div className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full bg-ink font-serif text-[12px] font-medium text-bg">
                D
              </div>
              <div className="flex min-w-0 flex-col">
                <div className="text-[12.5px] font-medium leading-tight text-ink">Doug Mechling</div>
                <div className="text-[10.5px] leading-tight text-ink-3">Owner · Star Lanes</div>
              </div>
            </button>
          </div>
        </aside>

        {/* Backdrop */}
        {drawerOpen && (
          <div
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-[2px] md:hidden"
          />
        )}

        {/* Main */}
        <main className="flex min-w-0 flex-col">
          {/* Topbar */}
          <div className="sticky top-0 z-10 flex h-14 items-center gap-3 border-b border-line bg-bg/90 px-3.5 backdrop-blur-md md:h-[52px] md:gap-4 md:px-6">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-line bg-transparent text-ink hover:bg-bg-alt md:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>

            <div className="flex flex-1 items-center min-w-0 truncate font-serif text-[16px] font-medium -tracking-[0.01em] text-ink md:hidden">
              {crumbs.mobile}
            </div>

            <div className="hidden items-center gap-2 text-[12.5px] text-ink-3 md:flex">
              <strong className="font-medium text-ink">{crumbs.venue}</strong>
              <ChevronRight className="h-3 w-3 text-ink-4" />
              <span>{crumbs.crumb}</span>
            </div>

            <div className="hidden flex-1 md:block" />

            <div className="hidden w-[280px] items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-1.5 text-[12.5px] text-ink-3 md:flex lg:w-[280px]">
              <Search className="h-3 w-3 text-ink-3" />
              <span className="flex-1 truncate">Search customers, events, revenue</span>
              <span className="rounded-[3px] border border-line bg-bg-alt px-1.5 py-px font-mono text-[10px] text-ink-3">⌘K</span>
            </div>

            <button
              type="button"
              aria-label="Search"
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-line bg-transparent text-ink-2 hover:bg-bg-alt md:hidden"
            >
              <Search className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              className="hidden items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[12px] font-medium text-ink-2 transition-colors hover:bg-black/[0.04] md:flex"
            >
              <Bell className="h-3 w-3" />
              Alerts
            </button>

            <button
              type="button"
              className="flex items-center gap-1 rounded-md bg-ink px-2.5 py-1.5 text-[11.5px] font-medium text-bg transition-colors hover:bg-[#2a2a26] md:px-2.5 md:py-1.5 md:text-[12px]"
            >
              <Plus className="h-3 w-3" />
              New
            </button>
          </div>

          <div className="w-full max-w-[1320px] px-4 pb-16 pt-[18px] md:px-8 md:pt-7 md:pb-16">{children}</div>
        </main>
      </div>
    </div>
  );
}
