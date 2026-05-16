import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "De-Escalatory Institutionalism | Alex Junfu Lu",
  description:
    "A research article on ASEAN, informal institutions, grey-zone conflict, and de-escalatory capacity in South China Sea governance.",
};

export default function DeEscalatoryInstitutionalismLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
