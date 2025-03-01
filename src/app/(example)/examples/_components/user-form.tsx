'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { type User, userSchema } from '@/types/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import type { z } from 'zod'

interface UserFormProps {
  onUserCreated?: () => void;
}

// Define the form input type based on Zod schema
type UserFormInputs = z.infer<typeof userSchema>

export function UserForm({ onUserCreated }: UserFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success?: boolean; message?: string }>({})

  // Initialize React Hook Form with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormInputs>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: '',
      email: '',
      age: undefined,
    },
  })

  const onSubmit: SubmitHandler<UserFormInputs> = async (data) => {
    setSubmitResult({})
    setIsSubmitting(true)

    try {
      // Submit to API
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitResult({ success: true, message: 'User created successfully!' })
        // Reset form
        reset()

        // Notify parent component that a user was created
        if (onUserCreated) {
          onUserCreated()
        }
      } else {
        // Handle API errors
        setSubmitResult({ success: false, message: result.message || 'Failed to create user' })
      }
    } catch (error) {
      setSubmitResult({ success: false, message: 'An unexpected error occurred' })
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-[#222] border-[#333] text-white">
      <CardHeader>
        <CardTitle className="text-[#0ea5e9]">Create User</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Input
              id="name"
              {...register('name')}
              className="bg-[#333] border-[#444] text-white"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              className="bg-[#333] border-[#444] text-white"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium mb-1">
              Age (optional)
            </label>
            <Input
              id="age"
              type="number"
              {...register('age', { 
                setValueAs: (value) => {
                  // 空の入力の場合はundefinedを返す
                  if (value === '' || value === null) return undefined;
                  // 数値に変換
                  return Number(value);
                }
              })}
              className="bg-[#333] border-[#444] text-white"
              placeholder="Enter your age"
            />
            {errors.age && (
              <p className="mt-1 text-sm text-red-500">{errors.age.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white w-full"
          >
            {isSubmitting ? 'Submitting...' : 'Create User'}
          </Button>
        </form>

        {submitResult.message && (
          <div className={`mt-4 p-3 rounded ${submitResult.success ? 'bg-green-900/30 text-green-300' : 'bg-red-900/30 text-red-300'}`}>
            {submitResult.message}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
