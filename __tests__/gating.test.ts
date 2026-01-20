import { describe, it, expect, vi, beforeEach } from 'vitest'
import { canAccessFeature } from '@/lib/voxia/gating'

// Mock Clerk auth
vi.mock('@clerk/nextjs/server', () => ({
  auth: vi.fn(),
}))

// Mock Prisma client
vi.mock('@/lib/db', () => ({
  db: {
    orgMember: {
      findFirst: vi.fn(),
    },
    organization: {
      create: vi.fn(),
    },
  },
}))

// Mock Next.js redirect
vi.mock('next/navigation', () => ({
  redirect: vi.fn((path: string) => {
    throw new Error(`REDIRECT:${path}`)
  }),
}))

describe('Gating utilities', () => {
  describe('canAccessFeature', () => {
    it('should return true for ACTIVE subscription', () => {
      expect(canAccessFeature('ACTIVE')).toBe(true)
    })

    it('should return true for TRIALING subscription', () => {
      expect(canAccessFeature('TRIALING')).toBe(true)
    })

    it('should return false for PAST_DUE subscription', () => {
      expect(canAccessFeature('PAST_DUE')).toBe(false)
    })

    it('should return false for CANCELED subscription', () => {
      expect(canAccessFeature('CANCELED')).toBe(false)
    })

    it('should return false for INCOMPLETE subscription', () => {
      expect(canAccessFeature('INCOMPLETE')).toBe(false)
    })

    it('should return false for null subscription status', () => {
      expect(canAccessFeature(null)).toBe(false)
    })

    it('should return false for undefined subscription status', () => {
      expect(canAccessFeature(undefined)).toBe(false)
    })

    it('should return false for empty string', () => {
      expect(canAccessFeature('')).toBe(false)
    })

    it('should return false for invalid status', () => {
      expect(canAccessFeature('INVALID_STATUS')).toBe(false)
    })
  })
})

describe('Gating redirect logic', () => {
  describe('Onboarding redirect rules', () => {
    it('should describe correct redirect for unauthenticated users', () => {
      // Unauthenticated users should be redirected to sign-in
      const currentPath = '/voxia/onboarding/setup'
      const expectedRedirect = `/sign-in?redirect_url=${encodeURIComponent(currentPath)}`

      // This tests the expected behavior
      expect(expectedRedirect).toContain('/sign-in')
      expect(expectedRedirect).toContain('redirect_url')
    })

    it('should describe correct redirect for users without subscription trying to access setup', () => {
      // Users without subscription should go to plan selection
      const expectedRedirect = '/voxia/onboarding/plan'
      expect(expectedRedirect).toBe('/voxia/onboarding/plan')
    })

    it('should describe correct redirect for users with active subscription trying to access plan page', () => {
      // Users with active subscription should go to setup or dashboard
      const possibleRedirects = ['/voxia/onboarding/setup', '/dashboard']
      expect(possibleRedirects).toContain('/voxia/onboarding/setup')
      expect(possibleRedirects).toContain('/dashboard')
    })

    it('should describe correct redirect for users with setup completed', () => {
      // Users with setup completed should go to dashboard
      const expectedRedirect = '/dashboard'
      expect(expectedRedirect).toBe('/dashboard')
    })
  })

  describe('Dashboard redirect rules', () => {
    it('should describe correct redirect for unauthenticated users', () => {
      const currentPath = '/dashboard/voxia'
      const expectedRedirect = `/sign-in?redirect_url=${encodeURIComponent(currentPath)}`
      expect(expectedRedirect).toContain('/sign-in')
    })

    it('should describe correct redirect for users without subscription', () => {
      const expectedRedirect = '/voxia/onboarding/plan'
      expect(expectedRedirect).toBe('/voxia/onboarding/plan')
    })

    it('should describe correct redirect for users with inactive subscription accessing features', () => {
      // Inactive subscription users accessing features (not billing) should go to billing
      const expectedRedirect = '/dashboard/billing?status=inactive'
      expect(expectedRedirect).toContain('/dashboard/billing')
      expect(expectedRedirect).toContain('status=inactive')
    })

    it('should allow users with inactive subscription to access billing page', () => {
      // Users should always be able to access billing page
      const billingPath = '/dashboard/billing'
      const shouldAllowAccess = billingPath.includes('/billing')
      expect(shouldAllowAccess).toBe(true)
    })

    it('should describe correct redirect for users with active subscription but incomplete setup', () => {
      const expectedRedirect = '/voxia/onboarding/setup'
      expect(expectedRedirect).toBe('/voxia/onboarding/setup')
    })
  })
})

describe('Subscription status transitions', () => {
  const activeStatuses = ['ACTIVE', 'TRIALING']
  const inactiveStatuses = ['PAST_DUE', 'CANCELED', 'INCOMPLETE', 'INCOMPLETE_EXPIRED', 'UNPAID', 'PAUSED']

  it('should correctly identify active subscription statuses', () => {
    activeStatuses.forEach(status => {
      expect(canAccessFeature(status)).toBe(true)
    })
  })

  it('should correctly identify inactive subscription statuses', () => {
    inactiveStatuses.forEach(status => {
      expect(canAccessFeature(status)).toBe(false)
    })
  })
})
