"use client";
import Image from "next/image";
import triWhite from "../public/images/tri_white.png";
import triBlack from "../public/images/tri_black.png";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeContext";

export default function DropTriangle() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="">
      {theme === "dark" ? (
        <Image
          src={triWhite}
          alt="triangle"
          width={8}
          height={8}
          className="rotate-180 block "
        />
      ) : (
        <Image
          src={triBlack}
          alt="triangle"
          width={8}
          height={8}
          className="rotate-180"
        />
      )}
    </div>
  );
}
