import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "katex/dist/katex.min.css";

const cormorant = localFont({
  src: [
    {
      path: "../../public/fonts/CormorantGaramond-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CormorantGaramond-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/CormorantGaramond-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/CormorantGaramond-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
});

const ibmPlexSans = localFont({
  src: [
    {
      path: "../../public/fonts/IBMPlexSans-Variable.ttf",
      weight: "400 700",
      style: "normal",
    },
  ],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexjunfulu.top"),
  title: "Alex Junfu Lu | International Relations Researcher",
  description: "Academic portfolio of Alex Junfu Lu, researching how power operates in the international system and how domestic politics shape those power relations.",
  keywords: [
    "International Relations",
    "Global Governance",
    "Indo-Pacific Geopolitics",
    "International Political Economy",
    "Climate Governance",
    "Alex Junfu Lu"
  ],
  openGraph: {
    title: "Alex Junfu Lu | Academic Portfolio",
    description: "Researching power, institutions, and strategic competition in world politics.",
    url: "/",
    siteName: "Alex Junfu Lu",
    images: [
      {
        url: "/new-profile.jpg",
        width: 800,
        height: 600,
        alt: "Alex Junfu Lu Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Junfu Lu | Academic Portfolio",
    description: "Researching power, institutions, and strategic competition in world politics.",
    images: ["/new-profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
