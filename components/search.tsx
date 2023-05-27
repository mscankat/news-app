"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import searchGray from "public/images/search-gray.png";
import searchBlack from "public/images/search-black.png";
export default function Search() {
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return <></>;
  }
  return (
    <>
      <div className="flex">
        {theme === "dark" ? (
          <Image src={searchGray} alt="search icon" height="25" width="25" />
        ) : (
          <Image src={searchBlack} alt="search icon" height="25" width="25" />
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
