import Image from "next/image";
import Link from "next/link";
import { SiteLayout } from "./components/site-layout";

export default function Home() {
  return (
    <SiteLayout>
      <main className="flex flex-col items-center justify-center flex-1 p-8 pb-20 gap-12">
        <div className="flex flex-col gap-8 items-center max-w-3xl w-full text-center">
          <div className="flex flex-col items-center gap-4 mt-16">
            <div className="py-2">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] text-transparent bg-clip-text gradient-title drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-[1.3]">Next-Stage</h1>
            </div>
            <p className="text-2xl font-light mt-2">Next.js starter template</p>
          </div>

          <div className="mt-12 grid gap-8 w-full max-w-2xl">
            <div className="bg-[#222] p-6 rounded-lg border border-[#333]">
              <h2 className="text-xl font-semibold mb-4 text-[#0EA5E9]">Modern Tech Stack</h2>
              <ul className="list-disc list-inside space-y-2 text-left text-gray-300">
                <li>Next.js 15 with App Router</li>
                <li>TypeScript for type safety</li>
                <li>Tailwind CSS for styling</li>
                <li>Shadcn UI components</li>
                <li>Hono for API routes</li>
                <li>Zod for validation</li>
                <li>Biome for linting and formatting</li>
              </ul>
            </div>

            <div className="bg-[#222] p-6 rounded-lg border border-[#333]">
              <h2 className="text-xl font-semibold mb-4 text-[#0EA5E9]">Getting Started</h2>
              <p className="text-left text-gray-300 mb-4">
                Edit <code className="bg-black/30 px-1.5 py-0.5 rounded font-mono">src/app/page.tsx</code> to start building your application.
              </p>
              <div className="flex gap-4 items-center flex-col sm:flex-row mt-6">
                <Link
                  className="rounded-md border border-[#444] px-4 py-2 font-medium hover:bg-[#333] transition-colors w-full sm:w-auto text-center"
                  href="https://nextjs.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js
                </Link>
                <Link
                  className="rounded-md border border-[#444] px-4 py-2 font-medium hover:bg-[#333] transition-colors w-full sm:w-auto text-center"
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shadcn UI
                </Link>
                <Link
                  className="rounded-md border border-[#444] px-4 py-2 font-medium hover:bg-[#333] transition-colors w-full sm:w-auto text-center"
                  href="https://hono.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hono
                </Link>
                <Link
                  className="rounded-md border border-[#444] px-4 py-2 font-medium hover:bg-[#333] transition-colors w-full sm:w-auto text-center"
                  href="https://zod.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zod
                </Link>
                <Link
                  className="rounded-md bg-[#0EA5E9] text-white px-4 py-2 font-medium hover:bg-[#0c8bbd] transition-colors w-full sm:w-auto text-center"
                  href="/examples"
                  rel="noopener noreferrer"
                >
                  View Examples
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
