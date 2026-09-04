import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Analytics, GtmNoscript } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://woodsteel.sk"),
  title: "WoodSteel - Zimní zahrady, pergoly a zasklení teras",
  description:
    "Vlastní SK výroba i montáž. Cenová nabídka do 24 hodin, bezplatná prohlídka. 250+ realizací, 5 let záruka.",
  openGraph: {
    title: "WoodSteel — Outdoor prostor, který milujete celý rok",
    description:
      "Pergoly, zimní zahrady, zasklení teras. Vlastní SK výroba a montáž od roku 2021.",
    type: "website",
    locale: "cs_CZ",
  },
  verification: {
    google: "YKEOg1-tX28Hj7soObmAi8-KitpGkoGqV4vRSvCZMDE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${inter.variable} ${manrope.variable} antialiased`}>
      <body className="bg-white text-charcoal min-h-screen flex flex-col">
        <GtmNoscript />
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
