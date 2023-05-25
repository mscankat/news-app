"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
export default function Search() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="flex">
        {theme === "dark" ? (
          <Image
            src="/../public/images/search-gray.png"
            alt="search icon"
            height="25"
            width="25"
          />
        ) : (
          <Image
            src="/../public/images/search-black.png"
            alt="search icon"
            height="25"
            width="25"
          />
        )}

        <input
          type="text"
          placeholder="Search news"
          className="text-lg bg-transparent outline-none font-bold pl-2 h-6"
        />
      </div>
    </>
  );
}
