import { SiteLayout } from '@/components/layout/site-layout'
import type { Metadata } from 'next'
import { MainContent } from './_components/main-content'

export const metadata: Metadata = {
  title: 'Examples | Next-Stage',
  description: 'Example implementations using Hono, Zod, and Shadcn UI',
}

export default function ExamplesPage() {
  return (
    <SiteLayout>
      <MainContent />
    </SiteLayout>
  )
}
