

import LayoutOne from '@/components/shared/LayoutOne';
import PageHero from '@/components/shared/PageHero';
import RevealWrapper from '@/components/animation/RevealWrapper';
import Link from 'next/link';

export const metadata = {
  title: 'API Reference — DossX',
};

const ApiReferencePage = () => (
  <LayoutOne>
    {/* ───── HERO ───── */}
    <PageHero
      title="API"
      italicTitle="Reference"
      badgeTitle="Docs"
      description="Every endpoint, parameter, and response—all in one place. Use our REST API or SDKs to trigger workflows, query run logs, and integrate DossX products into your own stack."
      scale
    />

    {/* Quick links */}
    <section className="container pb-14 pt-14 md:pb-20 md:pt-20 lg:pb-[88px] lg:pt-[88px]">
      <RevealWrapper as="div" className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="#authentication" className="rv-button rv-button-white text-center">
          Auth & API Keys
        </Link>
        <Link href="#workflows" className="rv-button rv-button-white text-center">
          Workflow Endpoints
        </Link>
        <Link href="#webhooks" className="rv-button rv-button-white text-center">
          Webhooks
        </Link>
        <Link href="#errors" className="rv-button rv-button-white text-center">
          Error Codes
        </Link>
        <Link
          href="/files/dossx-openapi.yaml"
          download
          className="rv-button rv-button-secondary text-center"
        >
          Download OpenAPI Spec
        </Link>
        <Link
          href="https://github.com/dossx/examples"
          target="_blank"
          className="rv-button rv-button-secondary text-center"
        >
          SDK Samples
        </Link>
      </RevealWrapper>

      {/* ───── AUTHENTICATION ───── */}
      <RevealWrapper as="div" id="authentication">
        <h2 className="mb-6 text-3xl font-medium">Authentication</h2>
        <p className="mb-4">
          The DossX API uses Bearer tokens for authentication. Retrieve your API key from the{' '}
          <Link href="/dashboard/settings" className="underline hover:text-primary">
            dashboard
          </Link>
          .
        </p>
        <pre className="rounded bg-[#0d0d0d] p-6 text-sm text-[#d7d7d7] overflow-auto">
{`curl -H "Authorization: Bearer <YOUR_API_KEY>" \\
  https://api.dossx.com/v1/ping`}
        </pre>
      </RevealWrapper>

      {/* ───── WORKFLOW ENDPOINTS ───── */}
      <RevealWrapper as="div" id="workflows" className="pt-16">
        <h2 className="mb-6 text-3xl font-medium">Workflow Endpoints</h2>

        {/* 1. Run Workflow */}
        <h3 className="mb-2 text-xl font-medium">POST /v1/workflows/run</h3>
        <p className="mb-4 text-secondary/80">
          Trigger a workflow (e.g., <code>swiftinvoice-send</code>) with required input variables.
        </p>
        <pre className="rounded bg-[#0d0d0d] p-6 text-sm text-[#d7d7d7] overflow-auto">
{`POST /v1/workflows/run
Content-Type: application/json
Authorization: Bearer <API_KEY>

{
  "workflow_id": "swiftinvoice-send",
  "data": {
    "customer_id": "cus_123",
    "invoice_total": 4999
  }
}`}
        </pre>

        {/* 2. Get Run Status */}
        <h3 className="mt-10 mb-2 text-xl font-medium">GET /v1/runs/{'{run_id}'}</h3>
        <p className="mb-4 text-secondary/80">
          Poll the status and output of a workflow run.
        </p>
        <pre className="rounded bg-[#0d0d0d] p-6 text-sm text-[#d7d7d7] overflow-auto">
{`GET /v1/runs/abc_456
Authorization: Bearer <API_KEY>`}
        </pre>
      </RevealWrapper>

      {/* ───── WEBHOOKS ───── */}
      <RevealWrapper as="div" id="webhooks" className="pt-16">
        <h2 className="mb-6 text-3xl font-medium">Webhooks</h2>
        <p className="mb-4">
          Subscribe to real-time events (e.g., <code>run.completed</code>) to update your app as soon
          as a workflow finishes.
        </p>
        <pre className="rounded bg-[#0d0d0d] p-6 text-sm text-[#d7d7d7] overflow-auto">
{`POST /v1/webhooks
{
  "url": "https://example.com/hooks/dossx",
  "events": ["run.completed"]
}`}
        </pre>
      </RevealWrapper>

      {/* ───── ERRORS ───── */}
      <RevealWrapper as="div" id="errors" className="pt-16">
        <h2 className="mb-6 text-3xl font-medium">Error Codes</h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr>
              <th className="border-b p-3">Code</th>
              <th className="border-b p-3">Message</th>
              <th className="border-b p-3">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b p-3">400</td>
              <td className="border-b p-3">Bad Request</td>
              <td className="border-b p-3">Missing or invalid parameters.</td>
            </tr>
            <tr>
              <td className="border-b p-3">401</td>
              <td className="border-b p-3">Unauthorized</td>
              <td className="border-b p-3">Invalid or expired API key.</td>
            </tr>
            <tr>
              <td className="border-b p-3">429</td>
              <td className="border-b p-3">Rate Limit</td>
              <td className="border-b p-3">Too many requests—wait or upgrade tier.</td>
            </tr>
            <tr>
              <td className="border-b p-3">500</td>
              <td className="border-b p-3">Server Error</td>
              <td className="border-b p-3">Unexpected error—contact support.</td>
            </tr>
          </tbody>
        </table>
      </RevealWrapper>
    </section>
  </LayoutOne>
);

export default ApiReferencePage;