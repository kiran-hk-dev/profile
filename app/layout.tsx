import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/data/profile";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://kiran-hk-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kiran H K | DevOps Engineer & Full Stack Developer",
    template: "%s | Kiran H K",
  },
  description:
    "Portfolio of Kiran H K, DevOps Engineer & MERN Full-Stack Developer (5+ years): React, Next.js, TypeScript, Node.js, MongoDB, Supabase, Docker, Kubernetes (EKS), Terraform, Jenkins, GitHub Actions, ArgoCD, AWS, CI/CD, and observability.",
  keywords: [
    "Kiran H K",
    "DevOps Engineer",
    "Full Stack Developer",
    "MERN",
    "Next.js",
    "TypeScript",
    "Supabase",
    "Terraform",
    "Kubernetes",
    "EKS",
    "AWS",
    "Bengaluru",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: "Kiran H K | DevOps Engineer & Full Stack Developer",
    description:
      "5+ years shipping MERN + Next.js apps and cloud infrastructure — Docker, Kubernetes (EKS), Terraform, Jenkins/GitHub Actions, AWS, Supabase — with live builds.",
    url: siteUrl,
    siteName: "Kiran H K Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran H K | DevOps Engineer & Full Stack Developer",
    description: "5+ years building web applications and cloud infrastructure.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    telephone: profile.phone,
    address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
    url: siteUrl,
    sameAs: [profile.github, profile.linkedin],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
