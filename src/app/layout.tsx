import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alex Junfu Lu",
  description: "International Relations Researcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(cormorant.variable, "font-sans", geist.variable)}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#0B0B0F] font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}