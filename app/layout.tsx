import type { Metadata } from "next";
import "./globals.css";
// Fonts
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Inter, Urbanist } from "next/font/google";
import { CoinProvider } from "./providers/coinProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Define a CSS variable name
  display: "swap",
});

const urbanist = Urbanist({
  // Use underscore for multi-word font names
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nick Hemingway",
  description: "Intermediate Full Stack Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="overscroll-none"
      style={{ backgroundColor: "black" }}
    >
      <body
        className={`${inter.variable} ${urbanist.variable} antialiased dark`}
      >
        <CoinProvider>
          <Navbar />

          {children}
          <Footer />
        </CoinProvider>
      </body>
    </html>
  );
}
