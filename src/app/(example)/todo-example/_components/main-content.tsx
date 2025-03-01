import { TodoFormContainer } from './todo-form-container'
import { TodoListContainer } from './todo-list-container'

export function MainContent() {
  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] text-transparent bg-clip-text gradient-title">
          Todo List Example
        </h1>

        <p className="text-gray-300 mb-8">
          This page demonstrates a complete Todo List application with CRUD operations using
          Shadcn UI components, Hono API routes with RPC, and Zod validation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-[#222] border-[#333] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-[#0ea5e9] mb-2">Todo Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><span className="text-green-400 font-medium">Create:</span> Add new tasks with title, description and priority</li>
              <li><span className="text-blue-400 font-medium">Read:</span> View all your tasks in a clean interface</li>
              <li><span className="text-yellow-400 font-medium">Update:</span> Edit task details or mark as completed</li>
              <li><span className="text-red-400 font-medium">Delete:</span> Remove tasks you no longer need</li>
            </ul>
          </div>
          <div className="bg-[#222] border-[#333] p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-[#0ea5e9] mb-2">Technologies Used</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><span className="font-medium">Frontend:</span> Next.js, React, Shadcn UI</li>
              <li><span className="font-medium">API:</span> Hono routes with RPC type-sharing</li>
              <li><span className="font-medium">Validation:</span> Zod schema validation</li>
              <li><span className="font-medium">Form Management:</span> React Hook Form</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Client components wrapped in containers for hydration */}
          <TodoFormContainer />
          <TodoListContainer />
        </div>
      </div>
    </main>
  )
}
