import type { Metadata } from "next";
import MotionEffects from "@/components/MotionEffects";
import ReadingProgress from "@/components/ReadingProgress";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Alex Junfu Lu | Undergraduate International Relations Researcher",
    template: "%s | Alex Junfu Lu",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    "Alex Junfu Lu",
    "International Relations",
    "Foreign Policy",
    "International Conflict",
    "International Institutions",
    "Global Governance",
    "International Political Economy",
    "Geopolitics",
    "Domestic Politics",
    "State Behaviour",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Alex Junfu Lu | Undergraduate International Relations Researcher",
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/og-academic.png",
        width: 1730,
        height: 909,
        alt: "Alex Junfu Lu — International Relations, Foreign Policy, Security, and Political Decision-Making",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Junfu Lu | International Relations",
    description: siteConfig.description,
    images: ["/og-academic.png"],
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/academic-portrait.jpg`,
  email: `mailto:${siteConfig.academicEmail}`,
  jobTitle: siteConfig.role,
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: siteConfig.institution,
  },
  sameAs: [siteConfig.github],
  knowsAbout: [
    "International Relations",
    "Foreign Policy",
    "International Conflict",
    "International Institutions",
    "Global Governance",
    "International Political Economy",
    "Domestic Politics and State Behaviour",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ReadingProgress />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MotionEffects />
      </body>
    </html>
  );
}
