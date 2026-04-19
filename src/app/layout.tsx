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
  title: "The Growth Summit | Leadership & Entrepreneurship Conference",
  description: "Move from potential to structured growth. A leadership and entrepreneurship summit equipping you with clarity, strategy, and direction for your next level.",
  keywords: ["leadership", "entrepreneurship", "career development", "conference", "growth", "summit"],
  openGraph: {
    title: "The Growth Summit | Leadership & Entrepreneurship Conference",
    description: "Move from potential to structured growth. A leadership and entrepreneurship summit equipping you with clarity, strategy, and direction.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
