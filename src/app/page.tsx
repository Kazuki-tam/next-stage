import { SiteLayout } from "@/components/layout/site-layout";
import { ArrowRight, Code, Database, ExternalLink, FileCode, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <SiteLayout>
      <main className="flex flex-col items-center justify-center flex-1 p-8 pb-20 gap-12">
        <div className="flex flex-col gap-12 items-center max-w-4xl w-full text-center">
          {/* Hero Section */}
          <div className="flex flex-col items-center gap-6 mt-16 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(var(--blue-dark)_1px,transparent_1px)] opacity-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] [background-size:16px_16px]" />
            <div className="py-2">
              <h1 className="text-7xl font-bold bg-gradient-to-r from-[var(--blue-dark)] via-[var(--blue-primary)] to-[var(--blue-light)] text-transparent bg-clip-text gradient-title drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-[1.2]">Next-Stage</h1>
            </div>
            <p className="text-2xl font-light mt-2 max-w-2xl">A modern, type-safe Next.js starter template designed for AI-driven development</p>
            <div className="flex gap-4 mt-4">
              <Link
                href="https://github.com/new?template_name=next-stage"
                target="_blank"
                className="flex items-center gap-2 bg-[var(--blue-primary)] hover:bg-[var(--blue-dark)] text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Use this template <ExternalLink size={18} />
              </Link>
              <Link
                href="https://github.com/Kazuki-tam/next-stage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#222] hover:bg-[#333] text-white px-6 py-3 rounded-md font-medium border border-[#444] transition-all duration-300"
              >
                GitHub <ExternalLink size={18} />
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
            {/* Feature Cards */}
            {/* Type-Safe Development */}
            <div className="bg-[#111] p-8 rounded-xl border border-[#333] hover:border-[var(--blue-primary)] transition-all duration-300 hover:shadow-[0_0_15px_var(--blue-shadow)] group flex flex-col h-full">
              <div className="flex flex-col h-full">
                <div className="bg-[var(--blue-bg-light)] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 border border-[var(--blue-border-light)] group-hover:bg-[var(--blue-bg-light)] transition-all duration-300">
                  <Code className="text-[var(--blue-primary)]" size={20} />
                </div>
                <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-[var(--blue-primary)] transition-all duration-300">Type-Safe Development</h2>
                <p className="text-gray-400 text-left flex-grow">
                  Built with TypeScript and Zod for end-to-end type safety from API routes to frontend components.
                </p>
              </div>
            </div>

            {/* AI Editor Ready */}
            <div className="bg-[#111] p-8 rounded-xl border border-[#333] hover:border-[var(--blue-primary)] transition-all duration-300 hover:shadow-[0_0_15px_var(--blue-shadow)] group flex flex-col h-full">
              <div className="flex flex-col h-full">
                <div className="bg-[var(--blue-bg-light)] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 border border-[var(--blue-border-light)] group-hover:bg-[var(--blue-bg-light)] transition-all duration-300">
                  <FileCode className="text-[var(--blue-primary)]" size={20} />
                </div>
                <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-[var(--blue-primary)] transition-all duration-300">AI Editor Ready</h2>
                <p className="text-gray-400 text-left flex-grow">
                  Pre-configured development convention files for AI-powered editors like Windsurf and Cursor to accelerate your development workflow.
                </p>
              </div>
            </div>

            {/* Hono API Integration */}
            <div className="bg-[#111] p-8 rounded-xl border border-[#333] hover:border-[var(--blue-primary)] transition-all duration-300 hover:shadow-[0_0_15px_var(--blue-shadow)] group flex flex-col h-full">
              <div className="flex flex-col h-full">
                <div className="bg-[var(--blue-bg-light)] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 border border-[var(--blue-border-light)] group-hover:bg-[var(--blue-bg-light)] transition-all duration-300">
                  <Database className="text-[var(--blue-primary)]" size={20} />
                </div>
                <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-[var(--blue-primary)] transition-all duration-300">Hono API Integration</h2>
                <p className="text-gray-400 text-left flex-grow">
                  Leverage Hono's powerful middleware and routing capabilities for building robust API endpoints.
                </p>
              </div>
            </div>

            {/* Validation & Security */}
            <div className="bg-[#111] p-8 rounded-xl border border-[#333] hover:border-[var(--blue-primary)] transition-all duration-300 hover:shadow-[0_0_15px_var(--blue-shadow)] group flex flex-col h-full">
              <div className="flex flex-col h-full">
                <div className="bg-[var(--blue-bg-light)] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 border border-[var(--blue-border-light)] group-hover:bg-[var(--blue-bg-light)] transition-all duration-300">
                  <Shield className="text-[var(--blue-primary)]" size={20} />
                </div>
                <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-[var(--blue-primary)] transition-all duration-300">Validation & Security</h2>
                <p className="text-gray-400 text-left flex-grow">
                  Built-in form validation with React Hook Form and Zod ensures data integrity and security.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="w-full bg-[#111] p-8 rounded-xl border border-[#333] mt-4">
            <h2 className="text-2xl font-semibold mb-6 text-white inline-flex items-center gap-2">
              <FileCode className="text-[var(--blue-primary)]" size={24} />
              Modern Tech Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="text-lg font-medium mb-3 text-[var(--blue-primary)]">Frontend</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--blue-primary)] rounded-full" />
                    Next.js 15.2.0 with App Router
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--blue-primary)] rounded-full" />
                    TypeScript for type safety
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--blue-primary)] rounded-full" />
                    Tailwind CSS for styling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--blue-primary)] rounded-full" />
                    Shadcn UI components
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3 text-[var(--blue-primary)]">Backend & API</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--blue-primary)] rounded-full" />
                    Hono for API routes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--blue-primary)] rounded-full" />
                    Zod for validation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--blue-primary)] rounded-full" />
                    React Hook Form integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--blue-primary)] rounded-full" />
                    Type-safe API responses
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3 text-[var(--blue-primary)]">Development</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--blue-primary)] rounded-full" />
                    Bun package manager
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--blue-primary)] rounded-full" />
                    Biome for linting and formatting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--blue-primary)] rounded-full" />
                    AI editor convention files (Windsurf, Cursor)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--blue-primary)] rounded-full" />
                    Optimized for performance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--blue-primary)] rounded-full" />
                    Responsive design
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#333] flex flex-wrap gap-4 justify-center">
              <Link
                className="flex items-center gap-2 px-4 py-2 bg-[#222] hover:bg-[#333] rounded-md font-medium border border-[#444] transition-colors"
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js <ExternalLink size={16} />
              </Link>
              <Link
                className="flex items-center gap-2 px-4 py-2 bg-[#222] hover:bg-[#333] rounded-md font-medium border border-[#444] transition-colors"
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shadcn UI <ExternalLink size={16} />
              </Link>
              <Link
                className="flex items-center gap-2 px-4 py-2 bg-[#222] hover:bg-[#333] rounded-md font-medium border border-[#444] transition-colors"
                href="https://hono.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hono <ExternalLink size={16} />
              </Link>
              <Link
                className="flex items-center gap-2 px-4 py-2 bg-[#222] hover:bg-[#333] rounded-md font-medium border border-[#444] transition-colors"
                href="https://zod.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zod <ExternalLink size={16} />
              </Link>
              <Link
                className="flex items-center gap-2 px-4 py-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-md font-medium transition-colors duration-200"
                href="/examples"
                rel="noopener noreferrer"
              >
                View Examples <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
