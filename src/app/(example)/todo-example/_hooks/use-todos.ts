'use client'

import type { AppType } from '@/app/(example)/api/[[...route]]/route'
import type { ApiError, ApiResponse, ApiSuccess, TodoResponse } from '@/types/api'
import type { Todo, TodoWithId } from '@/types/todo'
import { hc } from 'hono/client'
import { useCallback, useEffect, useState } from 'react'

// Create a type-safe client using Hono's RPC
// Explicitly type the client to avoid 'unknown' type errors
const client = hc<AppType>('/') as {
  api: {
    todos: {
      $get: () => Promise<Response>;
      $post: (options: { json: Todo }) => Promise<Response>;
      [id: string]: {
        $put: (options: { param: { id: string }; json: Todo }) => Promise<Response>;
        $delete: (options: { param: { id: string } }) => Promise<Response>;
        toggle: {
          $patch: (options: { param: { id: string } }) => Promise<Response>;
        };
      };
    };
  };
}

// Helper function for error handling
const handleApiError = (error: unknown): ApiError => {
  const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred'
  console.error('API Error:', error)
  return { success: false, message: errorMessage }
}

export function useTodos() {
  const [todos, setTodos] = useState<TodoWithId[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState<string | null>(null)
  const [currentOperation, setCurrentOperation] = useState<'create' | 'update' | 'delete' | 'fetch' | 'toggle' | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  const fetchTodos = useCallback(async (silent = false) => {
    if (!silent) {
      setIsLoading(true)
      setCurrentOperation('fetch')
    }
    setHasError(null)
    
    try {
      const response = await client.api.todos.$get()
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      
      const data = await response.json()
      setTodos(data.data || [])
      setLastUpdated(new Date())
    } catch (error) {
      setHasError(error instanceof Error ? error.message : 'Failed to fetch todos')
      console.error('Error fetching todos:', error)
    } finally {
      if (!silent) {
        setIsLoading(false)
        setCurrentOperation(null)
      }
    }
  }, [])
  
  // Auto-refresh todos when component mounts and after operations
  useEffect(() => {
    // Initial fetch
    fetchTodos(false) // Not silent - show loading state
    
    // Set up polling for real-time updates (every 30 seconds)
    const intervalId = setInterval(() => {
      // Only auto-refresh if no operation is in progress
      if (!isLoading) {
        fetchTodos(true) // Silent refresh
      }
    }, 30000)
    
    return () => clearInterval(intervalId)
  }, [])

  const createTodo = useCallback(async (todoData: Todo): Promise<TodoResponse> => {
    setIsLoading(true)
    setHasError(null)
    setCurrentOperation('create')
    
    try {
      const response = await client.api.todos.$post({
        json: todoData
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        // Handle specific errors (e.g., duplicate title)
        if (result.errorType === 'duplicate_title') {
          return { 
            success: false, 
            message: result.message, 
            field: result.field, 
            errorType: result.errorType 
          }
        }
        
        // Other errors
        throw new Error(result.message || `Error: ${response.status}`)
      }
      
      // Refresh the todo list after successful creation
      await fetchTodos()
      
      return { success: true, data: result.data } as ApiSuccess<TodoWithId>
    } catch (error) {
      setHasError('Failed to create todo')
      return handleApiError(error)
    } finally {
      setIsLoading(false)
      setCurrentOperation(null)
    }
  }, [fetchTodos])

  const updateTodo = useCallback(async (id: string, todoData: Todo): Promise<TodoResponse> => {
    setIsLoading(true)
    setHasError(null)
    setCurrentOperation('update')
    
    try {
      const response = await client.api.todos[id].$put({
        param: { id },
        json: todoData
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        // Handle specific errors (e.g., duplicate title)
        if (result.errorType === 'duplicate_title') {
          return { 
            success: false, 
            message: result.message, 
            field: result.field, 
            errorType: result.errorType 
          }
        }
        
        // Other errors
        throw new Error(result.message || `Error: ${response.status}`)
      }
      
      // Refresh the todo list after successful update
      await fetchTodos()
      
      return { success: true, data: result.data } as ApiSuccess<TodoWithId>
    } catch (error) {
      setHasError('Failed to update todo')
      return handleApiError(error)
    } finally {
      setIsLoading(false)
      setCurrentOperation(null)
    }
  }, [fetchTodos])

  const toggleTodo = useCallback(async (id: string): Promise<TodoResponse> => {
    setIsLoading(true)
    setHasError(null)
    setCurrentOperation('toggle')
    
    try {
      const response = await client.api.todos[id].toggle.$patch({
        param: { id }
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.message || `Error: ${response.status}`)
      }
      
      // Refresh the todo list after successful toggle
      await fetchTodos()
      
      return { success: true, data: result.data } as ApiSuccess<TodoWithId>
    } catch (error) {
      setHasError('Failed to toggle todo status')
      return handleApiError(error)
    } finally {
      setIsLoading(false)
      setCurrentOperation(null)
    }
  }, [fetchTodos])

  const deleteTodo = useCallback(async (id: string): Promise<ApiResponse<void>> => {
    setIsLoading(true)
    setHasError(null)
    setCurrentOperation('delete')
    
    try {
      const response = await client.api.todos[id].$delete({
        param: { id }
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.message || `Error: ${response.status}`)
      }
      
      // Refresh the todo list after successful deletion
      await fetchTodos()
      
      return { success: true } as ApiSuccess<void>
    } catch (error) {
      setHasError('Failed to delete todo')
      return handleApiError(error)
    } finally {
      setIsLoading(false)
      setCurrentOperation(null)
    }
  }, [fetchTodos])

  return {
    todos,
    isLoading,
    hasError,
    currentOperation,
    lastUpdated,
    fetchTodos,
    createTodo,
    updateTodo,
    toggleTodo,
    deleteTodo
  }
}
