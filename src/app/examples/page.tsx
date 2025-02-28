import { Metadata } from 'next'
import Link from 'next/link'
import { UserFormContainer } from './user-form-container'
import { UserListContainer } from './user-list-container'

export const metadata: Metadata = {
  title: 'Examples | Next-Stage',
  description: 'Example implementations using Hono, Zod, and Shadcn UI',
}

export default function ExamplesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-white">
      <header className="border-b border-[#333] py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#0ea5e9]">
              Next-Stage
            </Link>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/examples"
                    className="text-[#0ea5e9] hover:text-[#38bdf8] transition-colors"
                  >
                    Examples
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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

      <footer className="border-t border-[#333] py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Built with Next.js, Hono, Zod, and Shadcn UI</p>
        </div>
      </footer>
    </div>
  )
}
