import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
  title: {
    default: "Sidnei Pacheco — Senior Software Engineer",
    template: "%s | Sidnei Pacheco",
  },
  description:
    "Senior Software Engineer with 15+ years building scalable products. CTO & Founder experience. Ruby, TypeScript, Go, Rust, React, Rails, AWS, Kubernetes.",
  metadataBase: new URL("https://sidneipacheco.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sidneipacheco.com",
    siteName: "Sidnei Pacheco",
    title: "Sidnei Pacheco — Senior Software Engineer",
    description:
      "Senior Software Engineer with 15+ years building scalable products. CTO & Founder experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidnei Pacheco — Senior Software Engineer",
    description:
      "Senior Software Engineer with 15+ years building scalable products.",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} grain antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
