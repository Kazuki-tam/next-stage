import { Code, Database, FileCode, Shield } from "lucide-react";
import { FeatureCard } from "@/app/_components/sections/feature-card";

export function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
      <FeatureCard
        icon={Code}
        title="Type-Safe Development"
        description="Built with TypeScript and Zod for end-to-end type safety from API routes to frontend components."
      />

      <FeatureCard
        icon={FileCode}
        title="AI Editor Ready"
        description="Pre-configured development convention files for AI-powered editors like Windsurf and Cursor to accelerate your development workflow."
      />

      <FeatureCard
        icon={Database}
        title="Hono API Integration"
        description="Leverage Hono's powerful middleware and routing capabilities for building robust API endpoints."
      />

      <FeatureCard
        icon={Shield}
        title="Validation & Security"
        description="Built-in form validation with React Hook Form and Zod ensures data integrity and security."
      />
    </div>
  );
}
