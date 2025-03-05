import { z } from "zod"

// Define the todo schema with Zod
export const todoSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }).max(100, { message: "Title must be less than 100 characters" }),
  description: z.string().max(500, { message: "Description must be less than 500 characters" }).optional(),
  completed: z.boolean().default(false),
  priority: z.enum(["low", "medium", "high"]).default("medium"),
})

// Define the todo schema with ID
export const todoWithIdSchema = todoSchema.extend({
  id: z.string().uuid(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})

// Type inference from Zod schema
export type Todo = z.infer<typeof todoSchema>

// Todo with ID
export type TodoWithId = z.infer<typeof todoWithIdSchema>

// Priority type
export type Priority = "low" | "medium" | "high"

// Form errors type
export type FormErrors = {
  [key: string]: string[]
}
