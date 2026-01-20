import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import { gateDashboard } from '@/lib/voxia/gating'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Dashboard | DossX',
  description: 'Manage your AI voice agent, knowledge base, and subscription.',
}

export default async function Layout({ children }: { children: ReactNode }) {
  // This will redirect if gating fails
  await gateDashboard('/dashboard')

  return <DashboardLayout>{children}</DashboardLayout>
}
