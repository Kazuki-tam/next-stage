'use client'

import type { ApiError, ApiResponse, ApiSuccess, UserResponse } from '@/types/api'
import type { User, UserWithId } from '@/types/user'
import { useCallback, useState } from 'react'

// Helper function for error handling
const handleApiError = (error: unknown): ApiError => {
  const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred'
  console.error('API Error:', error)
  return { success: false, message: errorMessage }
}

export function useUsers() {
  const [users, setUsers] = useState<UserWithId[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState<string | null>(null)
  const [currentOperation, setCurrentOperation] = useState<'create' | 'update' | 'delete' | 'fetch' | null>(null)

  const fetchUsers = useCallback(async () => {
    setIsLoading(true)
    setHasError(null)
    setCurrentOperation('fetch')
    
    try {
      const response = await fetch('/api/users')
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      setHasError(error instanceof Error ? error.message : 'Failed to fetch users')
      console.error('Error fetching users:', error)
    } finally {
      setIsLoading(false)
      setCurrentOperation(null)
    }
  }, [])

  const updateUser = useCallback(async (id: string, userData: User): Promise<UserResponse> => {
    setIsLoading(true)
    setHasError(null)
    setCurrentOperation('update')
    
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        // Handle specific errors (e.g., duplicate email)
        if (result.error === 'duplicate_email') {
          return { 
            success: false, 
            error: result.message, 
            field: result.field, 
            errorType: result.error 
          }
        }
        
        // Other errors
        throw new Error(result.message || `Error: ${response.status}`)
      }
      
      // Refresh the user list after successful update
      await fetchUsers()
      
      return { success: true, data: result.user } as ApiSuccess<UserWithId>
    } catch (error) {
      setHasError('Failed to update user')
      return handleApiError(error)
    } finally {
      setIsLoading(false)
      setCurrentOperation(null)
    }
  }, [fetchUsers])

  const deleteUser = useCallback(async (id: string): Promise<ApiResponse<void>> => {
    setIsLoading(true)
    setHasError(null)
    setCurrentOperation('delete')
    
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.message || `Error: ${response.status}`)
      }
      
      // Refresh the user list after successful deletion
      await fetchUsers()
      
      return { success: true } as ApiSuccess<void>
    } catch (error) {
      setHasError('Failed to delete user')
      return handleApiError(error)
    } finally {
      setIsLoading(false)
      setCurrentOperation(null)
    }
  }, [fetchUsers])

  return {
    users,
    isLoading,
    hasError,
    currentOperation,
    fetchUsers,
    updateUser,
    deleteUser
  }
}
