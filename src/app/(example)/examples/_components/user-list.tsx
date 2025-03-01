'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect } from 'react'
import { useUsers } from '../_hooks/use-users'

interface UserListProps {
  refreshTrigger?: number;
}

export function UserList({ refreshTrigger = 0 }: UserListProps) {
  const { users, isLoading, hasError, fetchUsers } = useUsers()

  // Initial fetch on component mount
  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])
  
  // Refetch when refreshTrigger changes
  useEffect(() => {
    if (refreshTrigger > 0) {
      fetchUsers()
    }
  }, [refreshTrigger, fetchUsers])

  return (
    <Card className="bg-[#222] border-[#333] text-white">
      <CardHeader>
        <CardTitle className="text-[#0ea5e9]">User List</CardTitle>
      </CardHeader>
      <CardContent>
        {hasError ? (
          <div className="p-3 bg-red-900/30 text-red-300 rounded">
            Error fetching users. Please try again.
          </div>
        ) : isLoading ? (
          <div className="text-center py-8 text-gray-400">Loading users...</div>
        ) : users.length === 0 ? (
          <div className="text-center py-8 text-gray-400">No users found</div>
        ) : (
          <div className="space-y-4">
            {users.map((user) => (
              <div 
                key={user.id} 
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
