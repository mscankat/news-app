"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import triWhite from "../public/images/tri_white.png";
import triBlack from "../public/images/tri_black.png";

export default function DropTriangle() {
  const { theme } = useTheme();
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
