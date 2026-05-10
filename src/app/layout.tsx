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

const sourceSans = localFont({
  src: [
    {
      path: "../../public/fonts/SourceSans3-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SourceSans3-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SourceSans3-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
});

export const metadata: Metadata = {
  // 添加了 metadataBase 解决终端里的黄色警告。
  // 注意：在你的网站正式上线并购买域名后，请将这里的 localhost 替换为你的真实域名（例如：https://alexjunfulu.com）
  metadataBase: new URL("http://localhost:3000"), 
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

// 刚才不小心被删掉的就是下面这个默认导出的布局组件：
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}