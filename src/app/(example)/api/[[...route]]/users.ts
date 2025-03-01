import { type User, type UserWithId, userSchema, userWithIdSchema } from '@/types/user'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { v4 as uuidv4 } from 'uuid'

// Sample user data
const sampleUsers: UserWithId[] = [
  { id: uuidv4(), name: 'John Doe', email: 'john@example.com', age: 28 },
  { id: uuidv4(), name: 'Jane Smith', email: 'jane@example.com', age: 32 },
]

// Create a new Hono app for users routes
export const users = new Hono()

// Get all users
users.get('/', (c) => {
  return c.json(sampleUsers)
})

// Get user by index
users.get('/:id', (c) => {
  const id = Number.parseInt(c.req.param('id'))

  if (Number.isNaN(id) || id < 0 || id >= sampleUsers.length) {
    return c.json({ error: 'User not found' }, 404)
  }

  return c.json(sampleUsers[id])
})

// Create a new user with Zod validation
users.post('/', zValidator('json', userSchema), async (c) => {
  try {
    const data = c.req.valid('json')

    // Check if email already exists
    const emailExists = sampleUsers.some(user => user.email === data.email)
    if (emailExists) {
      return c.json({
        success: false,
        message: 'A user with this email already exists',
        field: 'email',
        error: 'duplicate_email'
      }, 400)
    }

    // Add a UUID to the user data
    const userWithId: UserWithId = {
      ...data,
      id: uuidv4()
    }

    // In a real app, you would save to a database
    sampleUsers.push(userWithId)

    return c.json({
      success: true,
      message: 'User created successfully',
      user: userWithId
    }, 201)
  } catch (error) {
    return c.json({
      success: false,
      message: 'Failed to create user',
      error: String(error)
    }, 500)
  }
})
