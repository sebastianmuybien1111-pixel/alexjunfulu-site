import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Myth of Indonesian Neutrality | Alex Junfu Lu",
  description:
    "A working paper on Indonesia's hedging, strategic ambiguity, and selective alignment in Southeast Asian great-power politics.",
};

export default function IndonesiaHedgingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
