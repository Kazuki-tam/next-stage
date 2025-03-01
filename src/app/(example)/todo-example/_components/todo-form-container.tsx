'use client'

import dynamic from 'next/dynamic'

// Dynamically import the TodoForm component to avoid hydration issues
const TodoForm = dynamic(() => import('./todo-form').then(mod => ({ default: mod.TodoForm })), {
  ssr: false,
})

export function TodoFormContainer() {
  return <TodoForm />
}
