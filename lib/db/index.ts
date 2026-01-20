/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */

// Prisma 7 requires adapter-based connections
// See: https://pris.ly/d/prisma7-client-config

let db: any

async function initializePrismaClient() {
  if (db) return db

  const databaseUrl = process.env.DATABASE_URL

  if (!databaseUrl) {
    // Return a mock client for build time
    return createMockClient()
  }

  try {
    // Use require for dynamic loading to avoid TypeScript issues with ungenerated client
    const prismaClientModule = require('@prisma/client')
    const PrismaClient = prismaClientModule.PrismaClient

    if (!PrismaClient) {
      console.warn('PrismaClient not found in module, using mock client')
      return createMockClient()
    }

    const { PrismaPg } = require('@prisma/adapter-pg')
    const { Pool } = require('pg')

    const pool = new Pool({
      connectionString: databaseUrl,
    })

    const adapter = new PrismaPg(pool)

    db = new PrismaClient({ adapter })
    return db
  } catch (error) {
    console.warn('Failed to initialize Prisma client:', error)
    // Prisma client not generated or adapter not available - create placeholder
    return createMockClient()
  }
}

function createMockClient() {
  return new Proxy(
    {},
    {
      get: (_target, prop) => {
        // Return a proxy for nested property access (e.g., db.user.findFirst)
        return new Proxy(() => {
          throw new Error(
            `Database not initialized. Ensure DATABASE_URL is set and Prisma is generated. Tried to access: ${String(prop)}`
          )
        }, {
          get: () => {
            return () => {
              throw new Error(
                `Database not initialized. Ensure DATABASE_URL is set and Prisma is generated. Tried to access: ${String(prop)}`
              )
            }
          }
        })
      },
    }
  )
}

// Global singleton for development
const globalForPrisma = globalThis as unknown as {
  prisma: any | undefined
  prismaPromise: Promise<any> | undefined
}

// Export a promise that resolves to the db client
export const getDb = async () => {
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma
  }

  if (!globalForPrisma.prismaPromise) {
    globalForPrisma.prismaPromise = initializePrismaClient()
  }

  globalForPrisma.prisma = await globalForPrisma.prismaPromise
  return globalForPrisma.prisma
}

// For backwards compatibility - synchronous access (may throw if not initialized)
// Use getDb() for async access instead
export { db }
