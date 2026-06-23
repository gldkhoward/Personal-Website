import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Luke Howard | Founder & Robotics Software Engineer";
const description =
  "Founder and full-stack engineer building Lecxa and o1lab. Cross-disciplinary work across AI, robotics, and the web — taking things from zero to one.";

export const metadata: Metadata = {
  metadataBase: new URL("https://lukehoward.com.au"),
  title: {
    default: title,
    template: "%s | Luke Howard",
  },
  description,
  keywords: [
    "Luke Howard",
    "founder",
    "software engineer",
    "robotics",
    "AI",
    "machine learning",
    "full-stack",
    "Next.js",
    "Australia",
    "startups",
  ],
  authors: [{ name: "Luke Howard" }],
  creator: "Luke Howard",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://lukehoward.com.au",
    siteName: "Luke Howard",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
