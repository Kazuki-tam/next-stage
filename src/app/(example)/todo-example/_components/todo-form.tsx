'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import type { Todo, Priority } from '@/types/todo'
import { todoSchema } from '@/types/todo'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useTodoContext } from '../_context/todo-context'

export function TodoForm() {
  const { createTodo, isLoading, currentOperation } = useTodoContext()

  // デフォルト値を定数として定義
  const defaultValues: Todo = {
    title: '',
    description: '',
    priority: 'medium' as Priority,
    completed: false,
  }

  // Define the form with React Hook Form and Zod validation
  const form = useForm<Todo>({
    resolver: zodResolver(todoSchema),
    defaultValues,
  })

  // Handle form submission
  const onSubmit = async (data: Todo) => {
    const result = await createTodo(data)

    if (result.success) {
      toast.success('Todo created successfully')
      // 成功したら完全にフォームをリセット
      form.reset(defaultValues)
    } else {
      // Handle specific field errors
      if (result.field && result.errorType === 'duplicate_title') {
        form.setError('title', {
          type: 'manual',
          message: 'A todo with this title already exists',
        })
      } else {
        toast.error(result.message || 'Failed to create todo')
      }
    }
  }

  return (
    <Card className="w-full bg-[#111] border-[#333]">

      <CardHeader>
        <CardTitle className="text-white">Add New Todo</CardTitle>
        <CardDescription className="text-gray-400">Create a new task to track</CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 animate-fadeIn">
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
                  <FormDescription className="text-gray-400">
                    Set the importance of this task
                  </FormDescription>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full min-h-10 bg-[var(--blue-primary)] hover:bg-[var(--blue-dark)] text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px]"
            >
              {isLoading && currentOperation === 'create' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin text-white" />
                  Creating...
                </>
              ) : (
                'Create Todo'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
