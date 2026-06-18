import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {SiteHeader} from "@/components/navigation/site-header";
import {SITE_CONFIG} from "@news/config";
import {SiteFooter} from "@/components/navigation/site-footer";
import {getCategories} from "@/features/categories/services/category-queries";
import {Category} from "@news/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let categories: Category[] = [];

  try {
    categories = await getCategories();
  } catch (error) {
    console.error("Failed to load categories", error);
  }
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />

        <main className="flex-1">{children}</main>

        <SiteFooter categories={categories} />
      </body>
    </html>
  );
}
