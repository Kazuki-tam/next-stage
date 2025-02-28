import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { users } from './users'

// Create a new Hono app with base path
const app = new Hono().basePath('/api')

// Mount domain-specific routes
app.route('/users', users)

// Add a simple health check endpoint
app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  })
})

// Export handlers for HTTP methods
export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)
