import type { TodoWithId } from "./todo";

// Base API response type
export type ApiResponse<T = unknown> = {
  success: boolean;
  message?: string;
  error?: string;
  field?: string;
  errorType?: string;
  data?: T;
};

// Todo-related API response types
export type TodoResponse = ApiResponse<TodoWithId>;
export type TodosResponse = ApiResponse<TodoWithId[]>;

// Error response type
export type ApiError = {
  success: false;
  message: string;
  error?: string;
  field?: string;
  errorType?: string;
};

// Success response type
export type ApiSuccess<T> = {
  success: true;
  message?: string;
  data?: T;
};

// Specific error types
export type DuplicateTitleError = ApiError & {
  errorType: "duplicate_title";
  field: "title";
};
