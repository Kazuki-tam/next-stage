import { styles } from "@/lib/styles";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className={styles.cards.feature}>
      <div className="flex flex-col h-full">
        <div className={styles.iconContainer}>
          <Icon className="text-[var(--blue-primary)]" size={20} />
        </div>
        <h2 className={styles.text.cardTitle}>{title}</h2>
        <p className="text-gray-400 text-left flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
} 