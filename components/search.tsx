"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import searchGray from "public/images/search-gray.png";
import searchBlack from "public/images/search-black.png";
import { useRouter } from "next/navigation";
import { UrlObject } from "url";

export default function Search() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);
  const [input, setInput] = useState("");
  let baseUrl: URL;
  useEffect(() => {
    setMount(true);
  }, []);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    baseUrl = new URL(window.location.origin + "/tr/search");
    baseUrl.searchParams.set("q", input);
    console.log(baseUrl.pathname + baseUrl.search);
    router.push(baseUrl.pathname + baseUrl.search);
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
