'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { type FormErrors, type User, type UserWithId, userSchema } from '@/types/user'
import { Pencil, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { useUsers } from '../_hooks/use-users'

interface UserListProps {
  refreshTrigger?: number;
}

export function UserList({ refreshTrigger = 0 }: UserListProps) {
  const { users, isLoading, hasError, fetchUsers, updateUser, deleteUser, currentOperation } = useUsers()
  const [userToEdit, setUserToEdit] = useState<UserWithId | null>(null)
  const [userToDelete, setUserToDelete] = useState<UserWithId | null>(null)
  const [editFormData, setEditFormData] = useState<{ name: string; email: string; age: string }>({ name: '', email: '', age: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitResult, setSubmitResult] = useState<{ success?: boolean; message?: string }>({})  

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

  // Set form data when a user is selected for editing
  useEffect(() => {
    if (userToEdit) {
      setEditFormData({
        name: userToEdit.name,
        email: userToEdit.email,
        age: userToEdit.age?.toString() || '',
      })
    }
  }, [userToEdit])

  const handleEditClick = (user: UserWithId) => {
    setUserToEdit(user)
    setErrors({})
    setSubmitResult({})
  }

  const handleDeleteClick = (user: UserWithId) => {
    setUserToDelete(user)
  }

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setSubmitResult({})

    if (!userToEdit) return

    try {
      // Validate form data with Zod
      const validatedData: User = userSchema.parse({
        name: editFormData.name,
        email: editFormData.email,
        age: editFormData.age ? Number.parseInt(editFormData.age) : undefined,
      })

      // Update user
      const result = await updateUser(userToEdit.id, validatedData)

      if (result.success) {
        setSubmitResult({ success: true, message: 'User updated successfully!' })
        // Close dialog after a short delay
        setTimeout(() => {
          setUserToEdit(null)
          setSubmitResult({})
        }, 1500)
      } else {
        setSubmitResult({ success: false, message: result.error || 'Failed to update user' })
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Format Zod validation errors
        const formattedErrors: FormErrors = {}

        for (const err of error.errors) {
          const path = err.path[0] as string
          if (!formattedErrors[path]) {
            formattedErrors[path] = []
          }
          formattedErrors[path].push(err.message)
        }

        setErrors(formattedErrors)
      } else {
        setSubmitResult({ success: false, message: 'An unexpected error occurred' })
      }
    }
  }

  const handleDeleteConfirm = async () => {
    if (!userToDelete) return

    const result = await deleteUser(userToDelete.id)

    if (result.success) {
      setUserToDelete(null)
    } else {
      // Show error message
      console.error('Failed to delete user:', result.error)
    }
  }

  return (
    <>
      <Card className="bg-[#222] border-[#333] text-white">
        <CardHeader>
          <CardTitle className="text-[#0ea5e9]">User List</CardTitle>
        </CardHeader>
        <CardContent>
          {hasError ? (
            <div className="p-3 bg-red-900/30 text-red-300 rounded">
              Error fetching users. Please try again.
            </div>
          ) : isLoading && currentOperation === 'fetch' ? (
            <div className="text-center py-8 text-gray-400">Loading users...</div>
          ) : users.length === 0 ? (
            <div className="text-center py-8 text-gray-400">No users found</div>
          ) : (
            <div className="space-y-4">
              {users.map((user) => (
                <div 
                  key={user.id} 
                  className="p-4 rounded bg-[#2a2a2a] border border-[#333] flex justify-between items-start"
                >
                  <div>
                    <h3 className="font-medium text-[#38bdf8]">{user.name}</h3>
                    <p className="text-gray-300 text-sm mt-1">{user.email}</p>
                    {user.age && (
                      <p className="text-gray-400 text-sm mt-1">Age: {user.age}</p>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleEditClick(user)}
                      className="h-8 w-8 text-gray-400 hover:text-[#38bdf8] hover:bg-[#333]"
                    >
                      <Pencil size={16} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleDeleteClick(user)}
                      className="h-8 w-8 text-gray-400 hover:text-red-500 hover:bg-[#333]"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Edit User Dialog */}
      <Dialog open={!!userToEdit} onOpenChange={(open) => !open && setUserToEdit(null)}>
        <DialogContent className="bg-[#222] border-[#333] text-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-[#0ea5e9]">Edit User</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditSubmit} className="space-y-4 py-4">
            <div>
              <label htmlFor="edit-name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input
                id="edit-name"
                value={editFormData.name}
                onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                className="bg-[#333] border-[#444] text-white"
                placeholder="Enter name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="edit-email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="edit-email"
                type="email"
                value={editFormData.email}
                onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                className="bg-[#333] border-[#444] text-white"
                placeholder="Enter email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="edit-age" className="block text-sm font-medium mb-1">
                Age (optional)
              </label>
              <Input
                id="edit-age"
                type="number"
                value={editFormData.age}
                onChange={(e) => setEditFormData({ ...editFormData, age: e.target.value })}
                className="bg-[#333] border-[#444] text-white"
                placeholder="Enter age"
              />
              {errors.age && (
                <p className="mt-1 text-sm text-red-500">{errors.age[0]}</p>
              )}
            </div>

            {submitResult.message && (
              <div className={`p-3 rounded ${submitResult.success ? 'bg-green-900/30 text-green-300' : 'bg-red-900/30 text-red-300'}`}>
                {submitResult.message}
              </div>
            )}

            <DialogFooter className="pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setUserToEdit(null)}
                className="bg-transparent border-[#444] text-white hover:bg-[#333] hover:text-white"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isLoading && currentOperation === 'update'}
                className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white"
              >
                {isLoading && currentOperation === 'update' ? 'Updating...' : 'Update User'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!userToDelete} onOpenChange={(open) => !open && setUserToDelete(null)}>
        <DialogContent className="bg-[#222] border-[#333] text-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-red-500">Confirm Deletion</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-gray-300">
              Are you sure you want to delete user <span className="font-medium text-white">{userToDelete?.name}</span>? This action cannot be undone.
            </p>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setUserToDelete(null)}
              className="bg-transparent border-[#444] text-white hover:bg-[#333] hover:text-white"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleDeleteConfirm}
              disabled={isLoading && currentOperation === 'delete'}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {isLoading && currentOperation === 'delete' ? 'Deleting...' : 'Delete'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
