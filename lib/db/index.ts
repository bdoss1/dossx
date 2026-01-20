/* eslint-disable @typescript-eslint/no-explicit-any */

// Dynamic import to handle cases where Prisma client isn't generated
let PrismaClientConstructor: any

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  PrismaClientConstructor = require('@prisma/client').PrismaClient
} catch {
  // Prisma client not generated - create a placeholder for build
  PrismaClientConstructor = class MockPrismaClient {
    [key: string]: any
    constructor() {
      return new Proxy(this, {
        get: () => {
          throw new Error('Prisma client not initialized. Run: pnpm db:push')
        },
      })
    }
  }
}

const globalForPrisma = globalThis as unknown as {
  prisma: any | undefined
}

export const db = globalForPrisma.prisma ?? new PrismaClientConstructor()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
