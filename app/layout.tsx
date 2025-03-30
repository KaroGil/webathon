import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import SessionProviderWrapper from "@/components/session-provider";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/hooks/use-language";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kompis",
  description: "Made with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <SessionProviderWrapper>
            <Header />
            <main className="flex-grow">{children}</main>
            <div className="flex-grow mt-50" />
          </SessionProviderWrapper>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
