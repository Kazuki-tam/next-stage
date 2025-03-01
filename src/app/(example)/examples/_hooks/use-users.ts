'use client'

import type { User, UserWithId } from '@/types/user'
import { useCallback, useState } from 'react'

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

  const updateUser = useCallback(async (id: string, userData: User) => {
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
        // 特定のエラーを処理する（メールアドレスの重複など）
        if (result.error === 'duplicate_email') {
          return { 
            success: false, 
            error: result.message, 
            field: result.field, 
            errorType: result.error 
          }
        }
        
        // その他のエラー
        throw new Error(result.message || `Error: ${response.status}`)
      }
      
      // Refresh the user list after successful update
      await fetchUsers()
      
      return { success: true, data: result.user }
    } catch (error) {
      setHasError(error instanceof Error ? error.message : 'Failed to update user')
      console.error('Error updating user:', error)
      return { success: false, error: error instanceof Error ? error.message : 'Failed to update user' }
    } finally {
      setIsLoading(false)
      setCurrentOperation(null)
    }
  }, [fetchUsers])

  const deleteUser = useCallback(async (id: string) => {
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
      
      return { success: true }
    } catch (error) {
      setHasError(error instanceof Error ? error.message : 'Failed to delete user')
      console.error('Error deleting user:', error)
      return { success: false, error: error instanceof Error ? error.message : 'Failed to delete user' }
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
