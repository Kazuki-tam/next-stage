import { UserFormContainer } from '../user-form-container'
import { UserListContainer } from '../user-list-container'

export function MainContent() {
  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] text-transparent bg-clip-text gradient-title">
          Component Examples
        </h1>

        <p className="text-gray-300 mb-8">
          This page demonstrates the integration of Shadcn UI components with Hono API routes and Zod validation.
          The form below uses Zod for validation and submits data to a Hono API endpoint.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Client components wrapped in containers for hydration */}
          <UserFormContainer />
          <UserListContainer />
        </div>
      </div>
    </main>
  )
}
