import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400"],
  // variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Jewellery",
  description: "E-commerce Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bricolage.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
