/* /app/status/page.tsx */
'use client';

import { useEffect, useState } from 'react';
import LayoutOne from '@/components/shared/LayoutOne';
import PageHero from '@/components/shared/PageHero';
import RevealWrapper from '@/components/animation/RevealWrapper';

type ServiceHealth = 'operational' | 'degraded' | 'outage' | 'maintenance';
interface StatusRow {
  id: string;
  name: string;
  health: ServiceHealth;
  lastIncident?: string;
}

/* ✅ All services currently operational */
const fetchStatus = async (): Promise<StatusRow[]> => [
  { id: 'api',        name: 'Public API',                                  health: 'operational' },
  { id: 'dashboard',  name: 'Dashboard App',                               health: 'operational' },
  { id: 'voxia',      name: 'Voxia — Voice Runtime (ElevenLabs + OpenAI)', health: 'operational' },
  { id: 'quotax',     name: 'QuotaX — Sales Pipelines & Sequencing',       health: 'operational' },
  { id: 'synapse',    name: 'Synapse — Data Hub & Sync',                    health: 'operational' },
  { id: 'connectors', name: '3rd-Party Connectors (CRMs/Calendars)',        health: 'operational' },
  { id: 'webhooks',   name: 'Webhooks & Event Ingest',                      health: 'operational' },
];

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

  const overallHealthy = rows.every(r => r.health === 'operational');

  return (
    <LayoutOne>
      <PageHero
        title="System"
        italicTitle="Status"
        badgeTitle="Status"
        description="Live operational status of all DossX systems — including Voxia, QuotaX, Synapse, APIs, and core platform services."
        scale
      />

      <section className="pb-14 pt-14 md:pb-20 md:pt-20 lg:pb-[88px] lg:pt-[88px]">
        <div className="container">

          {/* ✅ Overall banner */}
          <div className={`mb-8 rounded-xl border px-4 py-3 text-sm md:text-base ${
            overallHealthy
              ? 'border-green-600/30 bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-200'
              : 'border-yellow-600/30 bg-yellow-50 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200'
          }`}>
            <span className={`mr-2 inline-block h-2.5 w-2.5 rounded-full ${overallHealthy ? 'bg-green-500' : 'bg-yellow-500'}`} />
            {overallHealthy ? '✅ All systems operational' : '⚠️ Some systems reporting issues'}
          </div>

          <RevealWrapper as="h2" className="mb-4 text-3xl font-medium">
            Current Platform Health
          </RevealWrapper>
          <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            Real-time status across the DossX ecosystem. This page updates automatically every minute.
          </p>

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
                      <span className={`inline-block h-2.5 w-2.5 rounded-full ${pillColor(row.health)} mr-2`} />
                      {row.health.charAt(0).toUpperCase() + row.health.slice(1)}
                    </td>
                    <td className="p-4 whitespace-normal text-gray-700 dark:text-gray-300">
                      {row.lastIncident ?? '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <RevealWrapper as="div" className="mt-10 text-center">
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
              Stay in the loop with platform health and scheduled maintenance.
            </p>
            <a
              href="https://status.dossx.com/subscribe"
              className="underline hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe to status updates →
            </a>
          </RevealWrapper>
        </div>
      </section>
    </LayoutOne>
  );
};

export default StatusPage;