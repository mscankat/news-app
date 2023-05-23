"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
export default function TopPanel() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className="flex justify-between w-1024 items-center pt-11 pb-9">
        <div className="flex">
          {theme === "light" ? (
            <Image
              src="/../public/images/search-black.png"
              alt="search icon"
              height="25"
              width="25"
            />
          ) : (
            <Image
              src="/../public/images/search-gray.png"
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

        <div className="">BTC</div>
        <div>Weather</div>
        <div className="">Language</div>
      </div>
    </>
  );
}
