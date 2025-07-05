/* /app/status/page.tsx */
'use client';

import { useEffect, useState } from 'react';
import LayoutOne from '@/components/shared/LayoutOne';
import PageHero from '@/components/shared/PageHero';
import RevealWrapper from '@/components/animation/RevealWrapper';

/* Mock fetch — swap for real endpoint */
type ServiceHealth = 'operational' | 'degraded' | 'outage' | 'maintenance';
interface StatusRow {
  id: string;
  name: string;
  health: ServiceHealth;
  lastIncident?: string;
}

const fetchStatus = async (): Promise<StatusRow[]> => [
  { id: 'api',         name: 'Public API',             health: 'operational' },
  { id: 'dashboard',   name: 'Dashboard App',          health: 'operational' },
  { id: 'swiftinvoice',name: 'SwiftInvoice Workflows', health: 'operational',  lastIncident: 'Invoice PDF latency (Apr 10)' },
  { id: 'swiftbuild',  name: 'SwiftBuild Suite',       health: 'operational' },
  { id: 'swiftwatch',  name: 'SwiftWatch Alerts',      health: 'operational',  lastIncident: 'Planned DB upgrade (Apr 12)' },
];

/* Pill colour helper */
const pillColor = (h: ServiceHealth) =>
  h === 'operational'  ? 'bg-green-500'
: h === 'degraded'     ? 'bg-yellow-500'
: h === 'maintenance'  ? 'bg-blue-500'
:                        'bg-red-500';

const StatusPage = () => {
  const [rows, setRows] = useState<StatusRow[]>([]);

  useEffect(() => {
    fetchStatus().then(setRows);
    const interval = setInterval(() => fetchStatus().then(setRows), 60_000);
    return () => clearInterval(interval);
  }, []);

  /* 🔍 Debug — see the incidents in console */
  console.table(rows.map(r => ({ id: r.id, lastIncident: r.lastIncident })));

  return (
    <LayoutOne>
      <PageHero
        title="System"
        italicTitle="Status"
        badgeTitle="Status"
        description="Real-time health of DossX APIs, dashboards, and automation products. Subscribe for incident updates or check past uptime reports."
        scale
      />

      <section className="pb-14 pt-14 md:pb-20 md:pt-20 lg:pb-[88px] lg:pt-[88px]">
        <div className="container">
          <RevealWrapper as="h2" className="mb-8 text-3xl font-medium">
            Current Platform Health
          </RevealWrapper>

          <div className="overflow-x-auto rounded border dark:border-dark">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="bg-secondary text-backgroundBody">
                  <th className="p-4 font-medium">Service</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Last Incident</th>
                </tr>
              </thead>
              <tbody>
  {rows.map((row) => (
    <tr key={row.id} className="border-t dark:border-dark">
      <td className="p-4">{row.name}</td>

      <td className="p-4">
        <span
          className={`inline-block h-2.5 w-2.5 rounded-full ${pillColor(row.health)} mr-2`}
        />
        {row.health.charAt(0).toUpperCase() + row.health.slice(1)}
      </td>

      {/* Updated text color */}
      <td className="p-4 whitespace-normal text-gray-700 dark:text-gray-300">
        {row.lastIncident ?? '—'}
      </td>
    </tr>
  ))}
</tbody>
            </table>
          </div>

          <RevealWrapper as="div" className="mt-10 text-center">
            <p className="mb-4">
              Want instant incident alerts?{' '}
              <a
                href="https://status.dossx.com/subscribe"
                className="underline hover:text-primary"
              >
                Subscribe to updates →
              </a>
            </p>
          </RevealWrapper>
        </div>
      </section>
    </LayoutOne>
  );
};

export default StatusPage;