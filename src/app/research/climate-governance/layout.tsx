import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Climate Governance and Institutional Inequality | Alex Junfu Lu",
  description:
    "A research project on the Financial Rift, climate justice, discourse power, and institutional coordination in global climate governance.",
};

export default function ClimateGovernanceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
