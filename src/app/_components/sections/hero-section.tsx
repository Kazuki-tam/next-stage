import { styles } from "@/app/_styles/index";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-6 mt-5 relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(var(--blue-dark)_1px,transparent_1px)] opacity-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] [background-size:16px_16px]" />
      <div className="py-2">
        <h1 className={styles.text.title}>Next-Stage</h1>
      </div>
      <p className={styles.text.subtitle}>A modern, type-safe Next.js starter template designed for AI-driven development</p>
      <div className="flex gap-4 mt-4">
        <Link
          href="https://github.com/new?template_name=next-stage"
          target="_blank"
          className={styles.buttons.primary}
        >
          Get Started
        </Link>
        <Link
          href="https://github.com/Kazuki-tam/next-stage"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buttons.secondary}
        >
          GitHub Repo
        </Link>
      </div>
    </div>
  );
} 