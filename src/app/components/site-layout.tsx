'use client'

import { Header } from './header'
import { Footer } from './footer'

interface SiteLayoutProps {
  children: React.ReactNode
  className?: string
}

export function SiteLayout({ children, className = '' }: SiteLayoutProps) {
  return (
    <div className={`flex flex-col min-h-screen bg-[#1a1a1a] text-white ${className}`}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
