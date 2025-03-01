import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { todos } from './todos'

// API route implementation
const app = new Hono().basePath('/api')

// Mount todos routes
app.route('/todos', todos)

export type AppType = typeof app

// In App Router, we need to define handlers for each HTTP method separately
export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)
