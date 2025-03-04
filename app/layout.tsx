import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";

import { IBM_Plex_Sans } from 'next/font/google'
import { IBM_Plex_Mono } from 'next/font/google'

const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "600"
})

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "600"
})

export const metadata: Metadata = {
  title: "The Sap-Lang programming language",
  openGraph:{
    title: "The Sap-Lang programming language",
    url: "https://sap-lang.org",
    description: "SAP Language is a new programming language that is designed to be simple, intuitive, and powerful. It is designed to be a general-purpose language that can be used for a wide range of applications, from simple scripts to complex applications.",
    images: [
      {
        url: "https://sap-lang.org/SAP.png",
      }
    ],
    tags: ["programming", "language", "sap-lang"]
  }
  // description: "the Sap-Lang programming language",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`w-[95%] md:w-full mx-auto ${fontSans.className} ${fontMono.className} antialiased transition-all min-h-screen bg-gradient-to-br from-blue-600 to-blue-900 text-white  overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
