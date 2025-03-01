import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next-Stage | Next.js starter template",
  description: "A modern Next.js starter template with App Router, TypeScript, Tailwind CSS, Shadcn UI, and more.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Next-Stage | Next.js starter template",
    description: "A modern Next.js starter template with App Router, TypeScript, Tailwind CSS, Shadcn UI, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Next-Stage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next-Stage | Next.js starter template",
    description: "A modern Next.js starter template with App Router, TypeScript, Tailwind CSS, Shadcn UI, and more.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
