"use client";
// import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Providers } from "../providers";
import ThemeSwitch from "@/components/themeSwitch";
import Link from "next/link";
import logoWhite from "/public/images/logo-white.png";
import TopPanel from "@/components/topPanel";
import dynamic from "next/dynamic";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div className="flex">
        <div className="fixed w-60 h-screen bg-side-light dark:bg-side-dark flex flex-col items-center gap-10 transition-colors">
          <Link href="/">
            <Image src={logoWhite} alt="logo" width={128} height={128} />
          </Link>
          <ul className="flex w-full  flex-col text-xs font-bold text-side-text-color ">
            <Link href="/breaking">
              <li className="hover:bg-side-light-second hover:text-side-hover-text py-7 right transition-all">
                <div className="w-44 block ml-auto">BREAKING NEWS </div>
              </li>
            </Link>
            <Link href="/technology">
              <li className="hover:bg-side-light-second hover:text-side-hover-text py-7 right transition-all">
                <div className="w-44 block ml-auto"> SCIENCE & TECH</div>
              </li>
            </Link>
            <Link href="/finance">
              <li className="hover:bg-side-light-second hover:text-side-hover-text py-7 right transition-all">
                <div className="w-44 block ml-auto"> FINANCE</div>
              </li>
            </Link>
            <Link href="/en">
              <li className="hover:bg-side-light-second hover:text-side-hover-text py-7 right transition-all">
                <div className="w-44 block ml-auto"> LIFESTYLE</div>
              </li>
            </Link>
            <Link href="/sport">
              <li className="hover:bg-side-light-second hover:text-side-hover-text py-7 right transition-all">
                <div className="w-44 block ml-auto"> SPORT</div>
              </li>
            </Link>
          </ul>
          <div>
            <ThemeSwitch />
          </div>
        </div>
        <div className="ml-60 w-full ">
          <div className="m-auto w-1024 ">
            <TopPanel />
            <main className=" ">{children}</main>
          </div>
        </div>
      </div>
    </Providers>
  );
}
