import { z } from 'zod'

// Define the user schema with Zod
export const userSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }).max(50),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  age: z.number().int().min(18, { message: 'You must be at least 18 years old' }).optional(),
})

// Define the user schema with ID
export const userWithIdSchema = userSchema.extend({
  id: z.string().uuid()
})

// Type inference from Zod schema
export type User = z.infer<typeof userSchema>

// User with ID
export type UserWithId = z.infer<typeof userWithIdSchema>

// Form errors type
export type FormErrors = {
  [key: string]: string[]
}
