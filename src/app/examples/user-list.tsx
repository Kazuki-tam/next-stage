'use client'

import { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

interface User {
  name: string
  email: string
  age?: number
}

interface UserListProps {
  refreshTrigger?: number;
}

export function UserList({ refreshTrigger = 0 }: UserListProps) {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchUsers = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/users')
      
      if (!response.ok) {
        throw new Error('Failed to fetch users')
      }
      
      const data = await response.json()
      setUsers(data)
    } catch (err) {
      setError('Error fetching users. Please try again.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  // Initial fetch
  useEffect(() => {
    fetchUsers()
  }, [])

  // Fetch when refreshTrigger changes
  useEffect(() => {
    if (refreshTrigger > 0) {
      fetchUsers()
    }
  }, [refreshTrigger])

  return (
    <Card className="bg-[#222] border-[#333] text-white">
      <CardHeader>
        <CardTitle className="text-[#0ea5e9]">User List</CardTitle>
      </CardHeader>
      <CardContent>
        {error ? (
          <div className="p-3 bg-red-900/30 text-red-300 rounded">
            {error}
          </div>
        ) : isLoading ? (
          <div className="text-center py-8 text-gray-400">Loading users...</div>
        ) : users.length === 0 ? (
          <div className="text-center py-8 text-gray-400">No users found</div>
        ) : (
          <div className="space-y-4">
            {users.map((user, index) => (
              <div 
                key={index} 
                className="p-4 rounded bg-[#2a2a2a] border border-[#333]"
              >
                <h3 className="font-medium text-[#38bdf8]">{user.name}</h3>
                <p className="text-gray-300 text-sm mt-1">{user.email}</p>
                {user.age && (
                  <p className="text-gray-400 text-sm mt-1">Age: {user.age}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
