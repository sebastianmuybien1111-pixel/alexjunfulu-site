import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Source_Sans_3,
} from "next/font/google";

import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alex Junfu Lu",
  description: "Academic portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}