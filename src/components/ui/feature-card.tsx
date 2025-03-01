import { styles } from "@/lib/styles";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className={`${styles.cards.feature} py-6`}>
      <div className="flex flex-col">
        <h2 className={styles.text.cardTitle}>
          <span className="inline-flex items-center gap-2">
            <Icon className="text-[var(--blue-primary)]" size={20} /> 
            {title}
          </span>
        </h2>
        <p className="text-gray-400 text-left">
          {description}
        </p>
      </div>
    </div>
  );
} 