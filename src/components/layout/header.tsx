'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  
  return (
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
                  className={`${
                    pathname === '/'
                      ? 'text-white font-medium'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/examples"
                  className={`${
                    pathname === '/examples'
                      ? 'text-white font-medium'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Examples
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
