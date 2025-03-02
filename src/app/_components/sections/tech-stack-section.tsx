import { styles } from "@/app/_styles/index";
import { TechListItem } from "@/components/ui/tech-list-item";
import { ArrowRight, ExternalLink, FileCode } from "lucide-react";
import Link from "next/link";

export function TechStackSection() {
  return (
    <div className={styles.cards.section}>
      <h2 className={styles.text.sectionTitle}>
        <FileCode className="text-[var(--blue-primary)]" size={24} />
        Modern Tech Stack
      </h2>
      <div className={styles.layout.techGrid}>
        <div>
          <h3 className={styles.text.categoryTitle}>Frontend</h3>
          <ul className="space-y-2 text-gray-300">
            <TechListItem text="Next.js with App Router" />
            <TechListItem text="TypeScript for type safety" />
            <TechListItem text="Tailwind CSS for styling" />
            <TechListItem text="Shadcn UI components" />
          </ul>
        </div>
        <div>
          <h3 className={styles.text.categoryTitle}>Backend & API</h3>
          <ul className="space-y-2 text-gray-300">
            <TechListItem text="Hono for API routes" />
            <TechListItem text="Zod for validation" />
            <TechListItem text="React Hook Form integration" />
            <TechListItem text="Type-safe API responses" />
          </ul>
        </div>
        <div>
          <h3 className={styles.text.categoryTitle}>Development</h3>
          <ul className="space-y-2 text-gray-300">
            <TechListItem text="Bun package manager" />
            <TechListItem text="Biome for linting and formatting" />
            <TechListItem text="AI editor convention files" />
            <TechListItem text="Optimized for performance" />
            <TechListItem text="Responsive design" />
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-[#333] flex flex-wrap gap-4 justify-center">
        <Link
          className={styles.buttons.link}
          href="https://bun.sh/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bun <ExternalLink size={16} />
        </Link>
        <Link
          className={styles.buttons.link}
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js <ExternalLink size={16} />
        </Link>
        <Link
          className={styles.buttons.link}
          href="https://ui.shadcn.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shadcn UI <ExternalLink size={16} />
        </Link>
        <Link
          className={styles.buttons.link}
          href="https://hono.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hono <ExternalLink size={16} />
        </Link>
        <Link
          className={styles.buttons.link}
          href="https://zod.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zod <ExternalLink size={16} />
        </Link>
        <Link
          className={styles.buttons.link}
          href="https://react-hook-form.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Hook Form <ExternalLink size={16} />
        </Link>
      </div>
    </div>
  );
} 