import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Examples | Next-Stage',
  description: 'Example implementations using Hono, Zod, and Shadcn UI',
}

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
