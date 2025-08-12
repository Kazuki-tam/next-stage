type SiteInfo = {
  name: string;
  title: string;
  description: string;
  url: string;
};

export const siteInfo = {
  name: "Next-Stage",
  title: "Next-Stage",
  description: "A modern, type-safe Next.js starter template designed for AI-driven development",
  url: "https://next-stage-demo.vercel.app/",
} as const satisfies SiteInfo;
