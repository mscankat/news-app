import "./globals.css";
import { Inter } from "next/font/google";
import Context from "@/context/context";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-light dark:bg-dark`}>
        <Context>
          <main>{children}</main>
        </Context>
      </body>
    </html>
  );
}
