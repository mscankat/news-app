"use client";
import { LanguageContext } from "@/context/context";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function BackButton() {
  const { language } = useContext(LanguageContext);
  const router = useRouter();
  function handleClick(event: React.MouseEvent) {
    event.preventDefault;
    router.back();
  }
  return (
    <div
      className="ml-8 fixed text-lg font-bold underline text-side-text-color cursor-pointer"
      onClick={handleClick}
    >
      {language === "TR" ? "←Geri" : "←Back"}
    </div>
  );
}
