import { Footer } from "./footer";
import { Header } from "./header";

interface SiteLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function SiteLayout({ children, className = "" }: SiteLayoutProps) {
  return (
    <div className={`flex flex-col min-h-screen bg-[#1a1a1a] text-white ${className}`}>
      <Header />
      <main className="flex-grow pt-[72px] pb-10 flex flex-col items-center">
        <div className="container mx-auto px-4 py-8 flex-1 flex flex-col items-center">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
