'use client'

import dynamic from 'next/dynamic'

// Dynamically import the TodoList component to avoid hydration issues
const TodoList = dynamic(() => import('./todo-list').then(mod => ({ default: mod.TodoList })), {
  ssr: false,
})

export function TodoListContainer() {
  return <TodoList />
}
