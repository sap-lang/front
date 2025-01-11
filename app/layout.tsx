import type { Metadata } from "next";
// import localFont from "next/font/local";
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

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Sap-Lang",
  description: "the Sap-Lang programming language",
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
