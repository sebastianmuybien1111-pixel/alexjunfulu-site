import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function createMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/og-academic.png",
          width: 1730,
          height: 909,
          alt: "Alex Junfu Lu — International Relations",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-academic.png"],
    },
  };
}
