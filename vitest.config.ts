import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['__tests__/**/*.test.ts'],
    globals: true,
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
