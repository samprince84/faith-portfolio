import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ma. Faith B. Briones | Virtual Bookkeeper & Administrative Assistant",
  description:
    "Professional portfolio of Ma. Faith B. Briones - Certified Bookkeeper, Virtual Assistant specializing in bookkeeping, financial reports, QuickBooks, Xero, and administrative support.",
  keywords: [
    "Bookkeeper",
    "Virtual Assistant",
    "Faith Briones",
    "QuickBooks",
    "Xero",
    "Financial Reporting",
    "Administrative Assistant",
  ],
  authors: [{ name: "Ma. Faith B. Briones" }],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${playfair.variable} ${greatVibes.variable} scroll-smooth antialiased`}
    >
      <body className="bg-black text-white min-h-screen selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}

