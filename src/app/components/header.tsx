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
                      ? 'text-[#0ea5e9] hover:text-[#38bdf8]' 
                      : 'text-gray-300 hover:text-white'
                  } transition-colors`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/examples"
                  className={`${
                    pathname === '/examples' 
                      ? 'text-[#0ea5e9] hover:text-[#38bdf8]' 
                      : 'text-gray-300 hover:text-white'
                  } transition-colors`}
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
