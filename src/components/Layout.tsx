import type { ReactNode } from 'react';
import type { NavKey } from '../types';

const navItems: Array<{ key: NavKey; label: string }> = [
  { key: 'digest', label: 'Daily Digest' },
  { key: 'exceptions', label: 'Exceptions' },
  { key: 'customers', label: 'Customers' },
  { key: 'multi-unit', label: 'Multi-Unit' },
];

export function Layout({
  active,
  onNavigate,
  children,
}: {
  active: NavKey;
  onNavigate: (key: NavKey) => void;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-warm-50">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[240px_1fr]">
        <aside className="border-r border-warm-200 bg-[#f8f1e7] p-4">
          <p className="font-serifish text-2xl text-warm-900">Star Lanes Command</p>
          <p className="mt-1 text-xs text-zinc-600">Read-only operating layer</p>
          <nav className="mt-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`w-full rounded-md px-3 py-2 text-left text-sm ${active === item.key ? 'bg-warm-900 text-white' : 'hover:bg-warm-100'}`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full rounded-md px-3 py-2 text-left text-sm text-zinc-400" disabled>Reports</button>
            <button className="w-full rounded-md px-3 py-2 text-left text-sm text-zinc-400" disabled>Settings</button>
          </nav>
        </aside>
        <main className="p-6">
          <div className="mb-5 rounded-lg border border-warm-200 bg-white px-4 py-2 text-sm text-zinc-500">Search customers, exceptions, deposits…</div>
          {children}
        </main>
      </div>
    </div>
  );
}
