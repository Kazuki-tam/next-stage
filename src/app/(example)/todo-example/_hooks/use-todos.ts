'use client'

import type { AppType } from '@/app/(example)/api/[[...route]]/route'
import type { ApiError, ApiResponse, ApiSuccess, TodoResponse } from '@/types/api'
import type { Todo, TodoWithId } from '@/types/todo'
import { hc } from 'hono/client'
import { useCallback, useEffect, useRef, useState } from 'react'

// Define operation types for better type safety
type TodoOperation = 'create' | 'update' | 'delete' | 'fetch' | 'toggle' | null

/**
 * Client using Hono RPC
 * 
 * Benefits:
 * 1. No need to specify endpoint paths as strings, preventing typos
 * 2. Method chaining based on API structure makes code more readable
 * 3. Type consistency between server and client
 * 4. HTTP methods are automatically selected ($get, $post, $put, $delete, $patch)
 */

// Hono client type definition
// Using standard Fetch API Response
interface TodoClient {
  api: {
    todos: {
      $get(): Promise<Response>;
      $post(options: { json: Todo }): Promise<Response>;
    } & {
      [id: string]: {
        $put(options: { json: Todo }): Promise<Response>;
        $delete(): Promise<Response>;
        toggle: {
          $patch(): Promise<Response>;
        };
      };
    };
  };
}

// Create type-safe client
const client = hc<AppType>('/') as unknown as TodoClient;

// Helper function for error handling
const handleApiError = (error: unknown, customMessage?: string): ApiError => {
  const errorMessage = error instanceof Error ? error.message : customMessage || 'An unexpected error occurred'
  console.error('API Error:', error)
  return { success: false, message: errorMessage }
}

/**
 * Custom hook for managing todos with CRUD operations
 * @returns Todo state and operations
 */
export function useTodos() {
  // State management
  const [todos, setTodos] = useState<TodoWithId[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState<string | null>(null)
  const [currentOperation, setCurrentOperation] = useState<TodoOperation>(null)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  
  // Use a ref to track loading state for the interval without causing re-renders
  const isLoadingRef = useRef(isLoading)

  /**
   * Sets loading state and operation type
   * @param operation The current operation type
   * @param loading Whether to set loading state
   */
  const setLoadingState = useCallback((operation: TodoOperation, loading: boolean) => {
    if (loading) {
      setIsLoading(true)
      setCurrentOperation(operation)
      setHasError(null)
    } else {
      setIsLoading(false)
      setCurrentOperation(null)
    }
  }, [])

  /**
   * Processes API response and handles common error patterns
   * @param response The fetch Response object
   * @param errorMessage Custom error message
   * @returns Parsed JSON response
   */
  const processApiResponse = useCallback(async <T>(response: Response, _errorMessage: string): Promise<T> => {
    const result = await response.json() as T
    
    if (!response.ok) {
      const apiResult = result as unknown as ApiResponse<unknown>
      // Check for specific error types that should be returned directly
      if (apiResult.errorType === 'duplicate_title') {
        return result
      }
      throw new Error(apiResult.message || `Error: ${response.status}`)
    }
    
    return result
  }, [])

  /**
   * Fetches all todos from the API
   * @param silent If true, doesn't show loading state (used for background refreshes)
   */
  const fetchTodos = useCallback(async (silent = false): Promise<void> => {
    if (!silent) {
      setLoadingState('fetch', true)
    }

    try {
      const response = await client.api.todos.$get()

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json() as ApiSuccess<TodoWithId[]>
      setTodos(data.data || [])
      setLastUpdated(new Date())
    } catch (error) {
      setHasError('Failed to fetch todos')
      console.error('Error fetching todos:', error)
    } finally {
      if (!silent) {
        setLoadingState(null, false)
      }
    }
  }, [setLoadingState])

  /**
   * Creates a new todo
   * @param todoData Todo data to create
   * @returns API response with the created todo or error
   */
  const createTodo = useCallback(async (todoData: Todo): Promise<TodoResponse> => {
    setLoadingState('create', true)

    try {
      const response = await client.api.todos.$post({
        json: todoData
      })

      const result = await processApiResponse<TodoResponse>(response, 'Failed to create todo')
      
      if (response.ok) {
        // Refresh the todo list after successful creation
        await fetchTodos(true)
        
        return { success: true, data: result.data } as ApiSuccess<TodoWithId>
      }
      
      return result
    } catch (error) {
      setHasError('Failed to create todo')
      return handleApiError(error, 'Failed to create todo')
    } finally {
      setLoadingState(null, false)
    }
  }, [fetchTodos, setLoadingState, processApiResponse])

  /**
   * Updates an existing todo
   * @param id Todo ID to update
   * @param todoData Updated todo data
   * @returns API response with the updated todo or error
   */
  const updateTodo = useCallback(async (id: string, todoData: Todo): Promise<TodoResponse> => {
    setLoadingState('update', true)

    try {
      const response = await client.api.todos[id].$put({
        json: todoData
      })

      const result = await processApiResponse<TodoResponse>(response, 'Failed to update todo')
      
      if (response.ok) {
        // Refresh the todo list after successful update
        await fetchTodos(true)
        
        // If successful, update the local state immediately for better UX
        if (result.success && result.data) {
          setTodos(prevTodos => 
            prevTodos.map(todo => 
              todo.id === id ? (result.data as TodoWithId) : todo
            )
          )
        }
        
        return { success: true, data: result.data } as ApiSuccess<TodoWithId>
      }
      
      return result
    } catch (error) {
      setHasError('Failed to update todo')
      return handleApiError(error, 'Failed to update todo')
    } finally {
      setLoadingState(null, false)
    }
  }, [fetchTodos, setLoadingState, processApiResponse])

  /**
   * Toggles the completed status of a todo
   * @param id Todo ID to toggle
   * @returns API response with the toggled todo or error
   */
  const toggleTodo = useCallback(async (id: string): Promise<TodoResponse> => {
    setLoadingState('toggle', true)

    try {
      const response = await client.api.todos[id].toggle.$patch()

      const result = await processApiResponse<TodoResponse>(response, 'Failed to toggle todo status')
      
      if (response.ok) {
        // Refresh the todo list after successful toggle
        await fetchTodos(true)
        
        // If successful, update the local state immediately for better UX
        if (result.success && result.data) {
          setTodos(prevTodos => 
            prevTodos.map(todo => 
              todo.id === id ? (result.data as TodoWithId) : todo
            )
          )
        }
        
        return { success: true, data: result.data } as ApiSuccess<TodoWithId>
      }
      
      return result
    } catch (error) {
      setHasError('Failed to toggle todo status')
      return handleApiError(error, 'Failed to toggle todo status')
    } finally {
      setLoadingState(null, false)
    }
  }, [fetchTodos, setLoadingState, processApiResponse])

  /**
   * Deletes a todo
   * @param id Todo ID to delete
   * @returns API response indicating success or error
   */
  const deleteTodo = useCallback(async (id: string): Promise<ApiResponse<void>> => {
    setLoadingState('delete', true)

    try {
      const response = await client.api.todos[id].$delete()

      const result = await processApiResponse<ApiResponse<void>>(response, 'Failed to delete todo')
      
      if (response.ok) {
        // Refresh the todo list after successful deletion
        await fetchTodos(true)
        
        // If successful, update the local state immediately for better UX
        if (result.success) {
          setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
        }
        
        return { success: true } as ApiSuccess<void>
      }
      
      return result
    } catch (error) {
      setHasError('Failed to delete todo')
      return handleApiError(error, 'Failed to delete todo')
    } finally {
      setLoadingState(null, false)
    }
  }, [fetchTodos, setLoadingState, processApiResponse])

  // Update ref when isLoading changes
  useEffect(() => {
    isLoadingRef.current = isLoading
  }, [isLoading])

  // Auto-refresh todos when component mounts and after operations
  // biome-ignore lint/correctness/useExhaustiveDependencies: Intentionally only running on mount
  useEffect(() => {
    // Initial fetch
    fetchTodos(false) // Not silent - show loading state

    // Set up polling for real-time updates (every 5 seconds)
    const intervalId = setInterval(() => {
      // Only auto-refresh if no operation is in progress
      if (!isLoadingRef.current) {
        fetchTodos(true) // Silent refresh
      }
    }, 30000) // 30 seconds

    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
