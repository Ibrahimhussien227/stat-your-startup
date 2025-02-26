import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "easymde/dist/easymde.min.css";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
