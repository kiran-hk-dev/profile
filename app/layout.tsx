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
    default: "Kiran H K | Full Stack Developer (MERN) · DevOps / GitOps (ArgoCD)",
    template: "%s | Kiran H K",
  },
  description:
    "Portfolio of Kiran H K, Full Stack Developer (MERN + Next.js, 5+ years) with deployment ownership: ArgoCD GitOps (App-of-Apps, Image Updater, Rollouts canaries), AWS EKS + Terraform, Jenkins/GitHub Actions CI (Trivy + cosign), Prometheus/Grafana/Loki with LLM incident triage.",
  keywords: [
    "Kiran H K",
    "Full Stack Developer",
    "MERN",
    "DevOps Engineer",
    "ArgoCD",
    "Argo Rollouts",
    "AIOps",
    "Kubernetes",
    "EKS",
    "Terraform",
    "AWS",
    "Jenkins",
    "GitHub Actions",
    "Prometheus",
    "Grafana",
    "Bengaluru",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: "Kiran H K | DevOps Engineer · GitOps (ArgoCD) · AI-Augmented Platform",
    description:
      "5+ years running production on EKS with ArgoCD GitOps, Terraform, and AI-augmented delivery — canary releases, SLO observability, zero critical vulns.",
    url: siteUrl,
    siteName: "Kiran H K Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran H K | DevOps Engineer · GitOps (ArgoCD) · AI-Augmented Platform",
    description: "ArgoCD GitOps, EKS + Terraform, and AI-augmented DevOps delivery.",
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
