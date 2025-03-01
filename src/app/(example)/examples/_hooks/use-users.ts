'use client'

import type { UserWithId } from '@/types/user'
import { useCallback, useState } from 'react'

export function useUsers() {
  const [users, setUsers] = useState<UserWithId[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState<string | null>(null)

  const fetchUsers = useCallback(async () => {
    setIsLoading(true)
    setHasError(null)
    
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
    }
  }, [])

  return {
    users,
    isLoading,
    hasError,
    fetchUsers
  }
}
