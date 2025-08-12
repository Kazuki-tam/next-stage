import { ExternalLink, FileCode } from "lucide-react";
import Link from "next/link";
import { TechListItem } from "@/app/_components/sections/tech-list-item";
import { styles } from "@/app/_styles/index";

export function TechStackSection() {
  const resources = [
    { label: "Bun", href: "https://bun.sh/docs" },
    { label: "Next.js", href: "https://nextjs.org/docs" },
    { label: "Tailwind CSS", href: "https://tailwindcss.com/" },
    { label: "shadcn/ui", href: "https://ui.shadcn.com" },
    { label: "Hono", href: "https://hono.dev" },
    { label: "Zod", href: "https://zod.dev" },
    { label: "React Hook Form", href: "https://react-hook-form.com/" },
    { label: "Markuplint", href: "https://markuplint.dev/" },
    { label: "Biome", href: "https://biomejs.dev/" },
  ] as const;
  return (
    <div className={styles.cards.section}>
      <h2 className={styles.text.sectionTitle}>
        <FileCode className="text-[var(--blue-text)]" size={24} />
        Modern Tech Stack
      </h2>
      <div className={styles.layout.techGrid}>
        <div>
          <h3 className={styles.text.categoryTitle}>Frontend</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <TechListItem text="Next.js with App Router" />
            </li>
            <li className="flex items-center gap-2">
              <TechListItem text="TypeScript for type safety" />
            </li>
            <li className="flex items-center gap-2">
              <TechListItem text="Tailwind CSS for styling" />
            </li>
            <li className="flex items-center gap-2">
              <TechListItem text="shadcn/ui components" />
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.text.categoryTitle}>Backend & API</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <TechListItem text="Hono for API routes" />
            </li>
            <li className="flex items-center gap-2">
              <TechListItem text="Zod for validation" />
            </li>
            <li className="flex items-center gap-2">
              <TechListItem text="React Hook Form integration" />
            </li>
            <li className="flex items-center gap-2">
              <TechListItem text="Type-safe API responses" />
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.text.categoryTitle}>Development</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <TechListItem text="Bun package manager" />
            </li>
            <li className="flex items-center gap-2">
              <TechListItem text="Biome for linting and formatting" />
            </li>
            <li className="flex items-center gap-2">
              <TechListItem text="Markuplint for linting HTML" />
            </li>
            <li className="flex items-center gap-2">
              <TechListItem text="AI editor convention files" />
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-4 justify-center">
        {resources.map(({ label, href }) => (
          <Link
            key={href}
            className={styles.buttons.link}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label} <ExternalLink size={16} />
          </Link>
        ))}
      </div>
    </div>
  );
}
