import { Metadata } from 'next'
import { SiteLayout } from '../components/site-layout'
import { MainContent } from './components/main-content'

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
