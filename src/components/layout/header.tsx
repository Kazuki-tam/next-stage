import Link from "next/link";
import { GitHubIcon } from "@/components/ui/icons";
import { siteInfo } from "@/config/site";
import { NavLinks } from "./nav-links";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border py-4 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[var(--blue-text)]">
            {siteInfo.name}
          </Link>
          <div className="flex items-center space-x-6">
            <nav>
              <NavLinks />
            </nav>
            <Link
              href="https://github.com/Kazuki-tam/next-stage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
