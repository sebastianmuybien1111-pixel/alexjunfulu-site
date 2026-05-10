import Navbar from "@/components/Navbar";

export default function ResearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid-background noise relative min-h-screen bg-[#28314E] text-[#F1E6D8]">
      <Navbar />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-28 pt-36 md:pt-44">
        {children}
      </div>
    </main>
  );
}
