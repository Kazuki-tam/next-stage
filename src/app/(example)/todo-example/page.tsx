import { SiteLayout } from '@/components/layout/site-layout'
import type { Metadata } from 'next'
import { MainContent } from './_components/main-content'

export const metadata: Metadata = {
  title: 'Todo Example | Next-Stage',
  description: 'Todo application example using Hono, Zod, and Shadcn UI',
}

export default function TodoExamplePage() {
  return (
    <SiteLayout>
      <MainContent />
    </SiteLayout>
  )
}
