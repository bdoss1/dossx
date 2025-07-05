import CursorPointer from '@/components/animation/CursorPointer'
import SmoothScrollProvider from '@/components/shared/SmoothScroll'
{/*import ThemeSwitcher from '@/components/theme/ThemeSwitcher'*/}
import { satoshi } from '@/utils/fonts'
import { ThemeModeProvider } from '@/utils/Providers'
import type { Metadata } from 'next'
import { ReactNode, Suspense } from 'react'
import '../scss/main.scss'
import SplashCursor from '@/components/animation/SplashCursor'

export const metadata: Metadata = {
  title: 'DossX | Future-Ready Apps & Automation',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <SmoothScrollProvider>
            <ThemeModeProvider>
              {/*<ThemeSwitcher />*/}
              <SplashCursor />
              {children}
            </ThemeModeProvider>
          </SmoothScrollProvider>
        </Suspense>
      </body>
    </html>
  )
}
