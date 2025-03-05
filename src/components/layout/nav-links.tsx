'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavLinks() {
  const pathname = usePathname()
  
  return (
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
          href="/todo-example"
          className={`${
            pathname === '/todo-example'
              ? 'text-white font-medium'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Example
        </Link>
      </li>
    </ul>
  )
} 