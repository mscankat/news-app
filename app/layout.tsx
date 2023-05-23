import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Providers } from "./providers";
import ThemeSwitch from "@/components/themeSwitch";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "News",
  description: "Breaking News",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-light dark:bg-dark`}>
        <Providers>
          <div className="flex">
            <div className="w-60 h-screen bg-side-light dark:bg-side-dark flex flex-col items-center gap-10 transition-colors">
              <Link href="/">
                <Image
                  src="/../public/images/logo-white.png"
                  alt="logo"
                  width={128}
                  height={128}
                />
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
                <Link href="/lifestyle">
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
            <main className="flex-1">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
