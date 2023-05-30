"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import searchGray from "public/images/search-gray.png";
import searchBlack from "public/images/search-black.png";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);
  const [input, setInput] = useState("");
  useEffect(() => {
    setMount(true);
  }, []);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = new URL(window.location.href);
    url.searchParams.set("q", input);
    router.push(url.href);
  }

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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search news"
            className="text-lg bg-transparent outline-none font-bold pl-2 h-6"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}
