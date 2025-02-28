import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

// Define the user schema with Zod
const userSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  age: z.number().int().min(18).optional(),
})

// Type inference from Zod schema
type User = z.infer<typeof userSchema>

// Sample user data
const sampleUsers: User[] = [
  { name: 'John Doe', email: 'john@example.com', age: 28 },
  { name: 'Jane Smith', email: 'jane@example.com', age: 32 },
]

// Create a new Hono app for users routes
export const users = new Hono()

// Get all users
users.get('/', (c) => {
  return c.json(sampleUsers)
})

// Get user by index
users.get('/:id', (c) => {
  const id = parseInt(c.req.param('id'))

  if (isNaN(id) || id < 0 || id >= sampleUsers.length) {
    return c.json({ error: 'User not found' }, 404)
  }

  return c.json(sampleUsers[id])
})

// Create a new user with Zod validation
users.post('/', zValidator('json', userSchema), async (c) => {
  try {
    const data = c.req.valid('json')

    // In a real app, you would save to a database
    sampleUsers.push(data)

    return c.json({
      success: true,
      message: 'User created successfully',
      user: data
    }, 201)
  } catch (error) {
    return c.json({
      success: false,
      message: 'Failed to create user',
      error: String(error)
    }, 500)
  }
})
