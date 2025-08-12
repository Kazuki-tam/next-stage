"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavLinks() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    {
      href: "https://dev.to/tim_yone/next-stage-a-modern-nextjs-starter-template-for-ai-driven-development-238b",
      label: "Doc",
      external: true,
    },
  ] as const;

  return (
    <ul className="flex space-x-4">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={cn(
              "text-gray-400 hover:text-white",
              pathname === link.href && "text-white font-medium"
            )}
            {...("external" in link && link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
