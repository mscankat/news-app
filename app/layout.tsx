"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Context from "@/context/context";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
import ThemeSwitch from "@/components/themeSwitch";
import Link from "next/link";
import logoWhite from "/public/images/logo-white.png";
import TopPanel from "@/components/topPanel";
import LanguageData from "@/public/local/language.json";
import SideBarLinks from "@/components/sideBarLinks";
import ColorContext, { ThemeContext } from "@/context/themeContext";
import { useContext } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <ColorContext>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} bg-light dark:bg-dark`}>
          <Context>
            {/* <Providers> */}
            <div className="flex">
              <div className="fixed w-60 h-screen bg-side-light dark:bg-side-dark flex flex-col items-center gap-10 transition-colors">
                <Link href="/">
                  <Image src={logoWhite} alt="logo" width={128} height={128} />
                </Link>
                <ul className="flex w-full  flex-col text-xs font-bold text-side-text-color ">
                  <SideBarLinks
                    tr={LanguageData.tr.sidebar.breaking}
                    en={LanguageData.en.sidebar.breaking}
                    path="breaking"
                  />
                  <SideBarLinks
                    tr={LanguageData.tr.sidebar.technology}
                    en={LanguageData.en.sidebar.technology}
                    path="technology"
                  />
                  <SideBarLinks
                    tr={LanguageData.tr.sidebar.finance}
                    en={LanguageData.en.sidebar.finance}
                    path="finance"
                  />
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
            {/* </Providers> */}
          </Context>
        </body>
      </html>
    </ColorContext>
  );
}
