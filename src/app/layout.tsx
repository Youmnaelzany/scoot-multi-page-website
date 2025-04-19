import type { Metadata } from "next";
import { Lexend_Deca, Space_Mono } from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScootOff from "@/components/ScootOff";

import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scoot App",
  description: "Scoot App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} ${lexendDeca.variable} mx-auto h-screen max-w-7xl antialiased`}
      >
        <Header />
        {children}
        <ScootOff />
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
