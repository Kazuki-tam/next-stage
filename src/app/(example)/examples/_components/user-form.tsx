'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { type FormErrors, type User, userSchema } from '@/types/user'
import { useState } from 'react'
import { z } from 'zod'

interface UserFormProps {
  onUserCreated?: () => void;
}

export function UserForm({ onUserCreated }: UserFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success?: boolean; message?: string }>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setSubmitResult({})
    setIsSubmitting(true)

    try {
      // Validate form data with Zod
      const validatedData: User = userSchema.parse({
        name,
        email,
        age: age ? Number.parseInt(age) : undefined,
      })

      // Submit to API
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitResult({ success: true, message: 'User created successfully!' })
        // Reset form
        setName('')
        setEmail('')
        setAge('')

        // Notify parent component that a user was created
        if (onUserCreated) {
          onUserCreated()
        }
      } else {
        // Handle specific API errors
        if (result.error === 'duplicate_email') {
          const formattedErrors: FormErrors = {}
          formattedErrors[result.field] = [result.message]
          setErrors(formattedErrors)
        } else {
          setSubmitResult({ success: false, message: result.message || 'Failed to create user' })
        }
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#333] border-[#444] text-white"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#333] border-[#444] text-white"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium mb-1">
              Age (optional)
            </label>
            <Input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="bg-[#333] border-[#444] text-white"
              placeholder="Enter your age"
            />
            {errors.age && (
              <p className="mt-1 text-sm text-red-500">{errors.age[0]}</p>
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
