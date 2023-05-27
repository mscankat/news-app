"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Providers } from "./providers";
import ThemeSwitch from "@/components/themeSwitch";
import Link from "next/link";
import { createContext, useState } from "react";
import { useRouter } from "next/navigation";
import { languageContext } from "./contexts";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-light dark:bg-dark`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
