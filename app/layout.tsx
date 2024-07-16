import type { Metadata } from "next";

import { Chivo_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const Chivo = Chivo_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Recipe Heaven",
    default: "Welcome | Recipe Heaven",
  },
  description:
    "Recipe Heaven is your ultimate destination for culinary delight. Dive into a treasure trove of meticulously curated recipes crafted to elevate your cooking experience. From decadent desserts to savory mains and everything in between, discover a world where every recipe is a masterpiece waiting to be recreated in your kitchen. Whether you're a seasoned chef or a novice cook, Recipe Heaven promises to inspire, delight, and satisfy your taste buds with every click.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className=" scroll-smooth" lang="en">
      <body className={`${Chivo.className}`}>
        {children}

        <Toaster></Toaster>
      </body>
    </html>
  );
}
