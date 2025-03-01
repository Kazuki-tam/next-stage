import { type Todo, type TodoWithId, todoSchema, todoWithIdSchema } from '@/types/todo'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { v4 as uuidv4 } from 'uuid'

// Sample todo data
const sampleTodos: TodoWithId[] = [
  {
    id: uuidv4(),
    title: 'Learn Next.js',
    description: 'Complete the Next.js documentation',
    completed: true,
    priority: 'high',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    title: 'Build a Todo App',
    description: 'Create a Todo app with Next.js and Hono',
    completed: false,
    priority: 'medium',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

// Create a new Hono app for todos routes
export const todos = new Hono()

// Get all todos
todos.get('/', (c) => {
  return c.json({
    success: true,
    data: sampleTodos
  })
})

// Get todo by ID
todos.get('/:id', (c) => {
  const id = c.req.param('id')
  const todo = sampleTodos.find(todo => todo.id === id)

  if (!todo) {
    return c.json({ 
      success: false, 
      message: 'Todo not found' 
    }, 404)
  }

  return c.json({ 
    success: true, 
    data: todo 
  })
})

// Create a new todo with Zod validation
todos.post('/', zValidator('json', todoSchema), async (c) => {
  try {
    const data = c.req.valid('json')

    // Check if title already exists
    const titleExists = sampleTodos.some(todo => todo.title === data.title)
    if (titleExists) {
      return c.json({
        success: false,
        message: 'A todo with this title already exists',
        field: 'title',
        errorType: 'duplicate_title'
      }, 400)
    }

    // Add metadata to the todo
    const now = new Date().toISOString()
    const todoWithId: TodoWithId = {
      ...data,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now
    }

    // In a real app, you would save to a database
    sampleTodos.push(todoWithId)

    return c.json({
      success: true,
      message: 'Todo created successfully',
      data: todoWithId
    }, 201)
  } catch (error) {
    return c.json({
      success: false,
      message: 'Failed to create todo',
      error: String(error)
    }, 500)
  }
})

// Update a todo with Zod validation
todos.put('/:id', zValidator('json', todoSchema), async (c) => {
  try {
    const id = c.req.param('id')
    const data = c.req.valid('json')
    
    // Find the todo index
    const todoIndex = sampleTodos.findIndex(todo => todo.id === id)
    
    if (todoIndex === -1) {
      return c.json({
        success: false,
        message: 'Todo not found'
      }, 404)
    }
    
    // Check if title already exists (but ignore the current todo)
    const titleExists = sampleTodos.some((todo, index) => 
      index !== todoIndex && todo.title === data.title
    )
    
    if (titleExists) {
      return c.json({
        success: false,
        message: 'A todo with this title already exists',
        field: 'title',
        errorType: 'duplicate_title'
      }, 400)
    }
    
    // Update the todo
    const updatedTodo: TodoWithId = {
      ...data,
      id: sampleTodos[todoIndex].id,
      createdAt: sampleTodos[todoIndex].createdAt,
      updatedAt: new Date().toISOString()
    }
    
    // In a real app, you would update in a database
    sampleTodos[todoIndex] = updatedTodo
    
    return c.json({
      success: true,
      message: 'Todo updated successfully',
      data: updatedTodo
    })
  } catch (error) {
    return c.json({
      success: false,
      message: 'Failed to update todo',
      error: String(error)
    }, 500)
  }
})

// Toggle todo completion status
todos.patch('/:id/toggle', async (c) => {
  try {
    const id = c.req.param('id')
    
    // Find the todo index
    const todoIndex = sampleTodos.findIndex(todo => todo.id === id)
    
    if (todoIndex === -1) {
      return c.json({
        success: false,
        message: 'Todo not found'
      }, 404)
    }
    
    // Toggle the completed status
    const updatedTodo: TodoWithId = {
      ...sampleTodos[todoIndex],
      completed: !sampleTodos[todoIndex].completed,
      updatedAt: new Date().toISOString()
    }
    
    // In a real app, you would update in a database
    sampleTodos[todoIndex] = updatedTodo
    
    return c.json({
      success: true,
      message: 'Todo status toggled successfully',
      data: updatedTodo
    })
  } catch (error) {
    return c.json({
      success: false,
      message: 'Failed to toggle todo status',
      error: String(error)
    }, 500)
  }
})

// Delete a todo
todos.delete('/:id', (c) => {
  const id = c.req.param('id')
  
  // Find the todo index
  const todoIndex = sampleTodos.findIndex(todo => todo.id === id)
  
  if (todoIndex === -1) {
    return c.json({
      success: false,
      message: 'Todo not found'
    }, 404)
  }
  
  // In a real app, you would delete from a database
  sampleTodos.splice(todoIndex, 1)
  
  return c.json({
    success: true,
    message: 'Todo deleted successfully'
  })
})
