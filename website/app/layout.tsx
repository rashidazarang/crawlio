import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crawlio — Download Websites. Build With Real Artifacts.",
  description:
    "Native macOS app that downloads entire websites into local files. Browse offline, or open in your IDE and let AI read the real HTML. Native macOS. One-time purchase.",
  keywords: [
    "website downloader",
    "offline browsing",
    "macOS",
    "site archiver",
    "WARC",
    "web scraper",
    "AI artifacts",
    "download website",
    "MCP",
    "Claude Code",
    "ChatGPT",
  ],
  openGraph: {
    title: "Crawlio — The Web, On Your Disk",
    description:
      "Download entire websites into local files. Browse offline or hand them to your AI. Native macOS. One-time purchase.",
    url: "https://crawlio.app",
    siteName: "Crawlio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crawlio — The Web, On Your Disk",
    description:
      "Download entire websites into local files. Browse offline or hand them to your AI. Native macOS. One-time purchase.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
