import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";

import "./globals.css";

const InterTight = Inter_Tight({
  variable: "--InterTight",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christian Ware's Portfolio Website",
  description:
    "Welcome to my website wher you can see my most recent work and download my resume. Feel free to reach out at any time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={InterTight.variable}>{children}</body>
    </html>
  );
}
