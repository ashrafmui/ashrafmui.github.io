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
  title: "Muhaiminul Ashraf — Full-Stack Engineer",
  description:
    "Muhaiminul Ashraf — full-stack engineer with hardware knowledge. Building AI-integrated web apps, backend pipelines, and the systems underneath. Northeastern Computer Engineering '25.",
  keywords: [
    "Muhaiminul Ashraf", "software engineer", "full-stack", "Next.js",
    "TypeScript", "AI", "embedded", "portfolio", "Northeastern",
  ],
  openGraph: {
    title: "Muhaiminul Ashraf — Full-Stack Engineer",
    description:
      "Full-stack engineer with hardware knowledge. AI-integrated web apps, backend pipelines, and embedded systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
