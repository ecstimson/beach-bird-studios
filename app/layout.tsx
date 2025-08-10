import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beach Bird Studios - Complete SEO Websites That Dominate Search",
  description: "Years of SEO work delivered in one complete website. Outrank competitors, dominate AI search results, and maximize Google Business Profile visibility.",
  keywords: "SEO websites, local SEO, AI search optimization, Google Business Profile, complete SEO packages",
  openGraph: {
    title: "Beach Bird Studios - Premium SEO & Website Company",
    description: "Complete SEO websites designed to dominate traditional search, AI results, and local maps",
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
      <body className={`${inter.className} bg-beach-white`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}