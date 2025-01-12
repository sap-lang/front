import type { Metadata } from "next";
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
        className={`${fontSans.className} ${fontMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
