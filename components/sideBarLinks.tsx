"use client";
import { LanguageContext } from "@/context/context";
import Link from "next/link";
import { useContext } from "react";
interface Props {
  tr: string;
  en: string;
  path: string;
}
export default function SideBarLinks({ tr, en, path }: Props) {
  const { language } = useContext(LanguageContext);
  return (
    <Link href={`/${path}`}>
      <li className="hover:bg-side-light-second hover:text-side-hover-text py-7 right transition-all">
        <div className="w-44 block ml-auto">{language === "TR" ? tr : en}</div>
      </li>
    </Link>
  );
}
