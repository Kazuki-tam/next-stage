"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex space-x-4">
      <li>
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-white font-medium" : "text-gray-400 hover:text-white"
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="https://dev.to/tim_yone/next-stage-a-modern-nextjs-starter-template-for-ai-driven-development-238b"
          className="text-gray-400 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Doc
        </Link>
      </li>
    </ul>
  );
}
