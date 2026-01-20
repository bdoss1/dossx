import CursorPointer from '@/components/animation/CursorPointer'
import SmoothScrollProvider from '@/components/shared/SmoothScroll'
{/*import ThemeSwitcher from '@/components/theme/ThemeSwitcher'*/}
import { satoshi } from '@/utils/fonts'
import { ThemeModeProvider } from '@/utils/Providers'
import type { Metadata } from 'next'
import { ReactNode, Suspense } from 'react'
import '../scss/main.scss'
import SplashCursor from '@/components/animation/SplashCursor'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'DossX | Custom Websites, AI Workflows & AI-Powered SaaS',
  description: 'DossX builds intelligent digital platforms: custom websites, proprietary CMS, managed hosting, AI workflows, and AI-powered SaaS solutions engineered for growth.',
  openGraph: {
    title: 'DossX | Custom Websites, AI Workflows & AI-Powered SaaS',
    description: 'DossX builds intelligent digital platforms: custom websites, proprietary CMS, managed hosting, AI workflows, and AI-powered SaaS solutions engineered for growth.',
    siteName: 'DossX',
  },
}

// Conditional Clerk wrapper - only wraps when publishable key is available
function ConditionalClerkProvider({ children }: { children: ReactNode }) {
  // During build time without env vars, skip Clerk
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return <>{children}</>
  }
  return <ClerkProvider>{children}</ClerkProvider>
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <ConditionalClerkProvider>
      <html lang="en">
        <body className={`${satoshi.variable} antialiased`}>
          <Suspense fallback={<div>Loading...</div>}>
            <SmoothScrollProvider>
              <ThemeModeProvider>
                <SpeedInsights/>
                <Analytics />
                {/*<ThemeSwitcher />*/}
                <SplashCursor />
                {children}
              </ThemeModeProvider>
            </SmoothScrollProvider>
          </Suspense>
        </body>
      </html>
    </ConditionalClerkProvider>
  )
}
