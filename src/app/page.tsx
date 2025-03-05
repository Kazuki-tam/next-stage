import { styles } from "@/app/_styles/index";
import { SiteLayout } from "@/components/layout/site-layout";
import { FeaturesSection } from "./_components/sections/features-section";
import { HeroSection } from "./_components/sections/hero-section";
import { TechStackSection } from "./_components/sections/tech-stack-section";

export default function Home() {
  return (
    <SiteLayout>
      <div className="flex flex-col gap-12 items-center max-w-4xl w-full text-center">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Tech Stack Section */}
        <TechStackSection />
      </div>
    </SiteLayout>
  );
}
