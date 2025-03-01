'use client'

import type { ApiResponse, TodoResponse } from '@/types/api'
import type { Todo, TodoWithId } from '@/types/todo'
import { type ReactNode, createContext, useContext } from 'react'
import { useTodos } from '../_hooks/use-todos'

// Define the context type
interface TodoContextType {
  todos: TodoWithId[]
  isLoading: boolean
  hasError: string | null
  currentOperation: 'create' | 'update' | 'delete' | 'fetch' | 'toggle' | null
  lastUpdated: Date
  fetchTodos: (silent?: boolean) => Promise<void>
  createTodo: (todoData: Todo) => Promise<TodoResponse>
  updateTodo: (id: string, todoData: Todo) => Promise<TodoResponse>
  toggleTodo: (id: string) => Promise<TodoResponse>
  deleteTodo: (id: string) => Promise<ApiResponse<void>>
}

// Create the context with a default value
const TodoContext = createContext<TodoContextType | undefined>(undefined)

// Provider component that wraps parts of the app that need the todo context
export function TodoProvider({ children }: { children: ReactNode }) {
  // Use the hook to get all the todo functionality
  const todoData = useTodos()

  return (
    <TodoContext.Provider value={todoData}>
      {children}
    </TodoContext.Provider>
  )
}

// Custom hook to use the todo context
export function useTodoContext() {
  const context = useContext(TodoContext)
  
  if (context === undefined) {
    throw new Error('useTodoContext must be used within a TodoProvider')
  }
  
  return context
} 