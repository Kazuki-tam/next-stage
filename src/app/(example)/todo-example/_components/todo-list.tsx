'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import type { Todo, TodoWithId } from '@/types/todo'
import { todoSchema } from '@/types/todo'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Edit, Loader2, Trash2 } from 'lucide-react'
import React from 'react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useTodoContext } from '../_context/todo-context'

export function TodoList() {
  const { todos = [], isLoading, currentOperation, lastUpdated, updateTodo, deleteTodo, toggleTodo } = useTodoContext()
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState<TodoWithId | null>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  // Define the form with React Hook Form and Zod validation
  const form = useForm<Todo>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: '',
      description: '',
      priority: 'medium',
      completed: false,
    },
  })

  // Update form values when selected todo changes
  useEffect(() => {
    if (selectedTodo) {
      form.reset({
        title: selectedTodo.title,
        description: selectedTodo.description || '',
        priority: selectedTodo.priority,
        completed: selectedTodo.completed,
      })
    }
  }, [selectedTodo, form])

  // Handle edit dialog open
  const handleEditClick = (todo: TodoWithId) => {
    setSelectedTodo(todo)
    setIsEditDialogOpen(true)
  }

  // Handle delete dialog open
  const handleDeleteClick = (todo: TodoWithId) => {
    setSelectedTodo(todo)
    setIsDeleteDialogOpen(true)
  }

  // Handle form submission for edit
  const onSubmit = async (data: Todo) => {
    if (!selectedTodo) return

    const result = await updateTodo(selectedTodo.id, data)

    if (result.success) {
      setIsEditDialogOpen(false)
      toast.success('Todo updated successfully')
    } else {
      // Handle specific field errors
      if (result.field && result.errorType === 'duplicate_title') {
        form.setError('title', {
          type: 'manual',
          message: 'A todo with this title already exists',
        })
      } else {
        toast.error(result.message || 'Failed to update todo')
      }
    }
  }

  // Handle delete confirmation
  const handleDeleteConfirm = async () => {
    if (!selectedTodo) return

    const result = await deleteTodo(selectedTodo.id)

    if (result.success) {
      setIsDeleteDialogOpen(false)
      toast.success('Todo deleted successfully')
    } else {
      toast.error(result.message || 'Failed to delete todo')
    }
  }

  // Handle toggle todo status
  const handleToggleStatus = async (todo: TodoWithId) => {
    await toggleTodo(todo.id)
  }

  // Get color based on priority
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-400 bg-red-950/30 px-2 py-0.5 rounded-full'
      case 'medium':
        return 'text-yellow-400 bg-yellow-950/30 px-2 py-0.5 rounded-full'
      case 'low':
        return 'text-green-400 bg-green-950/30 px-2 py-0.5 rounded-full'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <>
      <Card className="w-full bg-[#111] border-[#333]">

        <CardHeader>
          <CardTitle className="text-white">Todo List</CardTitle>
          <CardDescription className="text-gray-400">Manage your tasks</CardDescription>
        </CardHeader>
        <CardContent className="relative">
          {isLoading && currentOperation === 'fetch' ? (
            <div className="flex justify-center items-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-[var(--blue-primary)]" />
            </div>
          ) : todos.length === 0 ? (
            <div className="text-center py-8 text-gray-300 animate-fadeIn">
              No todos found. Create one to get started!
            </div>
          ) : (
            <div className="space-y-4">
              {Array.isArray(todos) && todos.map((todo) => (
                <div
                  key={todo.id}
                  className={`p-4 border border-[#333] hover:border-[var(--blue-border-light)] rounded-lg transition-all duration-300 animate-fadeIn hover:shadow-md ${
                    todo.completed ? 'bg-[#1a1a1a]' : 'bg-[#111]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <Checkbox
                        checked={todo.completed}
                        onCheckedChange={() => handleToggleStatus(todo)}
                        disabled={isLoading && currentOperation === 'toggle'}
                        className="mt-1 transition-all duration-200 hover:scale-110 cursor-pointer"
                      />
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className={`font-medium ${todo.completed ? 'line-through text-gray-400' : 'text-white'}`}>
                            {todo.title}
                          </h4>
                          <span className={`text-xs font-medium ${getPriorityColor(todo.priority)}`}>
                            {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
                          </span>
                        </div>
                        {todo.description && (
                          <p className={`text-sm ${todo.completed ? 'text-gray-500 line-through' : 'text-gray-300'}`}>
                            {todo.description}
                          </p>
                        )}
                        <p className="text-xs text-gray-400">
                          Created: {new Date(todo.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditClick(todo)}
                        disabled={isLoading}
                        className="hover:bg-[var(--blue-bg-light)] hover:text-[var(--blue-primary)] transition-all duration-200 hover:scale-110"
                      >
                        <Edit className="h-4 w-4 text-gray-300" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteClick(todo)}
                        disabled={isLoading}
                        className="hover:bg-red-950/30 hover:text-red-500 transition-all duration-200 hover:scale-110"
                      >
                        <Trash2 className="h-4 w-4 text-gray-300" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Loading and last updated indicator */}
          <div className="mt-4 flex justify-between items-center text-xs text-gray-400">
            {isLoading && (
              <div className="absolute top-0 left-0 w-full h-1 bg-transparent overflow-hidden">
                <div className="h-full bg-[var(--blue-primary)] animate-progressBar" />
              </div>
            )}
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-500" />
              <span>Auto-refreshing</span>
            </div>
            <div>
              Last updated: {lastUpdated.toLocaleTimeString()}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-[#111] border-[#333] text-white">

          <DialogHeader>
            <DialogTitle className="text-white">Edit Todo</DialogTitle>
            <DialogDescription className="text-gray-400">
              Make changes to your todo item here.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter todo title" {...field} className="bg-[#222] border-[#444] text-white focus:border-[var(--blue-primary)] focus:ring-[var(--blue-primary)]" />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter todo description (optional)"
                        className="resize-none bg-[#222] border-[#444] text-white focus:border-[var(--blue-primary)] focus:ring-[var(--blue-primary)]"
                        {...field}
                        value={field.value || ''}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Priority</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-[#222] border-[#444] text-white focus:border-[var(--blue-primary)] focus:ring-[var(--blue-primary)]">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#222] border-[#444] text-white">
                        <SelectItem value="low" className="text-white hover:bg-[#333]">Low</SelectItem>
                        <SelectItem value="medium" className="text-white hover:bg-[#333]">Medium</SelectItem>
                        <SelectItem value="high" className="text-white hover:bg-[#333]">High</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Set the importance of this task
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="completed"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-[#444] bg-[#222] p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-white">
                        Completed
                      </FormLabel>
                      <FormDescription className="text-gray-400">
                        Mark this todo as completed
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button
                  type="submit"
                  disabled={isLoading && currentOperation === 'update'}
                  className="min-w-[100px] bg-[var(--blue-primary)] hover:bg-[var(--blue-dark)] text-white transition-colors duration-200"
                >
                  {isLoading && currentOperation === 'update' ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin text-white" />
                      Updating...
                    </>
                  ) : (
                    'Update Todo'
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-[#111] border-[#333] text-white">

          <DialogHeader>
            <DialogTitle className="text-white">Confirm Deletion</DialogTitle>
            <DialogDescription className="text-gray-400">
              Are you sure you want to delete this todo? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-4">
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
              className="bg-transparent border-[#444] text-white hover:bg-[#222] hover:text-white transition-colors duration-200"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteConfirm}
              disabled={isLoading && currentOperation === 'delete'}
              className="min-w-[100px] bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
            >
              {isLoading && currentOperation === 'delete' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin text-white" />
                  Deleting...
                </>
              ) : (
                'Delete'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
