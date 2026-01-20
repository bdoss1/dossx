import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define protected routes that require authentication
const isProtectedRoute = createRouteMatcher([
  '/voxia/onboarding(.*)',
  '/dashboard(.*)',
  '/api/stripe/checkout',
  '/api/stripe/portal',
  '/api/voxia/(.*)',
])

// Define public routes that should never be protected
const isPublicRoute = createRouteMatcher([
  '/',
  '/voxia',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/stripe/webhook',
  '/api/newsletter',
  '/api/contact',
  '/api/checkout',
  '/api/oauth/google/callback',
  '/api/oauth/microsoft/callback',
])

export default clerkMiddleware(async (auth, req) => {
  // Allow public routes to pass through
  if (isPublicRoute(req)) {
    return
  }

  // Protect routes that need authentication
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
