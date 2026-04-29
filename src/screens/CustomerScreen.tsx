import { Mail, MapPin, Phone, Send, Tag } from 'lucide-react';
import { Card, SectionHeader } from '../components/Card';
import { Pill } from '../components/Pill';
import { SystemTag } from '../components/SystemTag';
import { customers, featuredCustomer } from '../data/customers';

export function CustomerScreen({ customerId }: { customerId?: string }) {
  const customer = (customerId && customers[customerId]) || featuredCustomer;

  return (
    <div>
      <div className="eyebrow mb-2">Customers › Profile</div>
      <h1 className="h-page mb-6">
        One guest. <em>Every system.</em>
      </h1>

      {/* Hero */}
      <div className="mb-6 grid grid-cols-1 items-center gap-6 rounded-lg border border-line bg-surface p-6 md:grid-cols-[auto_1fr_auto]">
        <div
          className="flex h-[72px] w-[72px] items-center justify-center rounded-full font-serif text-[26px] font-medium text-white"
          style={{ background: 'linear-gradient(135deg, #5a6a8a 0%, #3a4a6a 100%)' }}
        >
          {customer.initials}
        </div>
        <div className="flex min-w-0 flex-col gap-1">
          <div className="flex flex-wrap items-center gap-3 font-serif text-[24px] font-medium leading-tight -tracking-[0.015em] text-ink">
            {customer.name}
            <Pill variant={customer.segmentVariant}>{customer.segmentLabel}</Pill>
          </div>
          <div className="mt-0.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-ink-3">
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3 w-3 text-ink-4" />
              {customer.email}
            </span>
            <span className="text-ink-4">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3 w-3 text-ink-4" />
              {customer.phone}
            </span>
            <span className="text-ink-4">·</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-ink-4" />
              {customer.city}
            </span>
            <span className="text-ink-4">·</span>
            <span className="num">{customer.firstSeen}</span>
          </div>
        </div>
        <div className="flex flex-shrink-0 flex-wrap gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-3.5 py-1.5 text-[12.5px] font-medium text-ink transition-colors hover:bg-bg-alt"
          >
            <Send className="h-3 w-3" />
            Send offer
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-md border border-ink bg-ink px-3.5 py-1.5 text-[12.5px] font-medium text-bg transition-colors hover:bg-[#2a2a26]"
          >
            <Tag className="h-3 w-3" />
            Tag segment
          </button>
        </div>
      </div>

      {/* LTV row */}
      <div className="mb-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3 lg:grid-cols-5">
        <LtvCell label="Lifetime spend" figure={customer.ltv.spend} foot={customer.ltv.spendFoot} />
        <LtvCell label="Avg ticket" figure={customer.ltv.avgTicket} foot={customer.ltv.avgTicketFoot} />
        <LtvCell label="Last visit" figure={customer.ltv.lastVisit} foot={customer.ltv.lastVisitFoot} />
        <LtvCell label="Visit frequency" figure={customer.ltv.frequency} foot={customer.ltv.frequencyFoot} />
        <LtvCell label="Loyalty tier" figure={customer.ltv.tier} foot={customer.ltv.tierFoot} amber />
      </div>

      {/* Body grid */}
      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <SectionHeader count="last 30 days" action="Export →">
            Activity across all systems
          </SectionHeader>
          <Card>
            <div className="py-1">
              {customer.activity.map((item, i) => (
                <div
                  key={item.id}
                  className={`grid grid-cols-[60px_1fr] items-start gap-2.5 px-[18px] py-3.5 sm:grid-cols-[70px_1fr_auto] sm:gap-3.5 ${
                    i === customer.activity.length - 1 ? '' : 'border-b border-line-soft'
                  }`}
                  style={item.highlight ? { background: 'rgba(245, 230, 204, 0.4)' } : undefined}
                >
                  <div className="font-mono text-[10.5px] leading-[1.4] text-ink-3">
                    <div className="font-medium text-ink">{item.day}</div>
                    {item.time}
                  </div>
                  <div className="flex min-w-0 flex-col gap-1">
                    <div className="text-[13px] font-medium leading-[1.4] text-ink">{item.title}</div>
                    <div className="flex flex-wrap items-center gap-2 text-[11.5px] leading-[1.4] text-ink-3">
                      {item.detailLeading && <span>{item.detailLeading}</span>}
                      {item.systems.map((s) => (
                        <SystemTag key={`${item.id}-${s.system}`} label={s.system} suffix={s.suffix} />
                      ))}
                      {item.detailTrailing && <span>{item.detailTrailing}</span>}
                    </div>
                  </div>
                  <div className="num col-start-2 text-left text-[11.5px] font-medium text-ink-2 sm:col-start-3 sm:pt-px sm:text-right sm:text-[12.5px] sm:text-ink">
                    {item.amount}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-5">
          <Card title="Segment" meta="Auto-classified">
            <div className="px-[18px] py-4">
              <div className="mb-1 font-serif text-[17px] font-medium -tracking-[0.01em] text-ink">
                {customer.segmentTitle.lead}{' '}
                <em className="italic text-amber-deep">{customer.segmentTitle.emphasis}</em>
              </div>
              <div className="text-[12px] leading-[1.5] text-ink-3">
                <strong className="font-medium text-ink-2">Why:</strong> {customer.segmentReason}
              </div>
            </div>
          </Card>

          <Card
            title="Suggested next action"
            meta={<Pill variant="warn">Time-sensitive</Pill>}
          >
            <div className="px-[18px] py-4">
              <div className="mb-3 text-[13px] leading-[1.5] text-ink">
                <strong className="font-semibold">{customer.nextActionTitle}</strong> the week of Oct 6.{' '}
                {customer.nextActionBody} Estimated value:{' '}
                <strong className="font-semibold text-amber-deep">{customer.nextActionValue}</strong>.
              </div>
              <button
                type="button"
                className="w-full rounded-md border border-ink bg-ink px-3.5 py-2 text-center text-[12.5px] font-medium text-bg transition-colors hover:bg-[#2a2a26]"
              >
                Schedule reminder
              </button>
            </div>
          </Card>

          <Card title="Identity sources" meta="5 of 11 connected">
            <div>
              {customer.identitySources.map((src, i) => (
                <div
                  key={src.name}
                  className={`grid grid-cols-[1fr_auto_auto] items-center gap-2.5 px-[18px] py-2.5 text-[12px] ${
                    i === customer.identitySources.length - 1 ? '' : 'border-b border-line-soft'
                  }`}
                >
                  <span className="font-medium text-ink">{src.name}</span>
                  <span className="num text-[10.5px] text-ink-3">{src.via}</span>
                  <span className="inline-flex items-center gap-1 font-mono text-[10.5px] text-good">
                    <span className="h-1.5 w-1.5 rounded-full bg-good" />
                    live
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function LtvCell({
  label,
  figure,
  foot,
  amber = false,
}: {
  label: string;
  figure: string;
  foot: string;
  amber?: boolean;
}) {
  return (
    <div className="bg-surface p-4 px-[18px]">
      <div className="mb-1.5 font-mono text-[9.5px] font-medium uppercase tracking-[0.1em] text-ink-3">{label}</div>
      <div
        className={`num-fig text-[22px] font-medium leading-none ${amber ? 'text-amber-deep' : 'text-ink'}`}
      >
        {figure}
      </div>
      <div className="mt-1 font-mono text-[10.5px] text-ink-3">{foot}</div>
    </div>
  );
}
