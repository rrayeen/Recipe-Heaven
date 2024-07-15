import type { Metadata } from "next";

import { Chivo_Mono } from "next/font/google";
import "./globals.css";

const Chivo = Chivo_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe Haven",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className=" scroll-smooth" lang="en">
      <body className={`${Chivo.className}`}>{children}</body>
    </html>
  );
}
