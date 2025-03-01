import type { User, UserWithId } from './user'

// Base API response type
export type ApiResponse<T = unknown> = {
  success: boolean
  message?: string
  error?: string
  field?: string
  errorType?: string
  data?: T
}

// User-related API response types
export type UserResponse = ApiResponse<UserWithId>
export type UsersResponse = ApiResponse<UserWithId[]>

// Error response type
export type ApiError = {
  success: false
  message: string
  error?: string
  field?: string
  errorType?: string
}

// Success response type
export type ApiSuccess<T> = {
  success: true
  message?: string
  data?: T
}

// Specific error types
export type DuplicateEmailError = ApiError & {
  errorType: 'duplicate_email'
  field: 'email'
}
