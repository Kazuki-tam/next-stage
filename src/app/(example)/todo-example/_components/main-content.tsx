import { TodoProvider } from '../_context/todo-context'
import { TodoFormContainer } from './todo-form-container'
import { TodoListContainer } from './todo-list-container'

export function MainContent() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] text-transparent bg-clip-text gradient-title">
        Todo List Example
      </h1>

      <p className="text-gray-300 mb-8">
        This page demonstrates a complete Todo List application with CRUD operations using
        Shadcn UI components, Hono API routes with RPC, and Zod validation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-[#222] border-[#333] p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-[var(--blue-text)] mb-2">Todo Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><span className="text-green-400 font-medium">Create:</span> Add new tasks with title, description and priority</li>
            <li><span className="text-blue-400 font-medium">Read:</span> View all your tasks in a clean interface</li>
            <li><span className="text-yellow-400 font-medium">Update:</span> Edit task details or mark as completed</li>
            <li><span className="text-red-400 font-medium">Delete:</span> Remove tasks you no longer need</li>
          </ul>
        </div>
        <div className="bg-[#222] border-[#333] p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-[var(--blue-text)] mb-2">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><span className="font-medium">Frontend:</span> Next.js, React, Shadcn UI</li>
            <li><span className="font-medium">API:</span> Hono routes with RPC type-sharing</li>
            <li><span className="font-medium">Validation:</span> Zod schema validation</li>
            <li><span className="font-medium">Form Management:</span> React Hook Form</li>
          </ul>
        </div>
      </div>

      <TodoProvider>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-2 bg-amber-900/20 border border-amber-500/30 rounded-lg p-4 mb-4">
            <p className="text-amber-200 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-labelledby="warningTitle" role="img">
                <title id="warningTitle">Warning</title>
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Please note that any content you post may be visible to other users.
            </p>
          </div>
          {/* Client components wrapped in containers for hydration */}
          <TodoFormContainer />
          <TodoListContainer />
        </div>
      </TodoProvider>
    </div>
  )
}
