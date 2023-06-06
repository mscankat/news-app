"use client";
import { LanguageContext } from "@/context/context";
import { useContext } from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import triBlack from "public/images/tri_black.png";

export default function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);
  const router = useRouter();
  const pathName = usePathname();

  // const [language, setLanguage] = useState("TR");
  const [drop, setDrop] = useState(false);
  useEffect(() => {
    if (pathName.includes("/en")) {
      setLanguage("EN");
    }
  }, []);

  function handleClick(event: React.MouseEvent) {
    if (event.currentTarget.innerHTML.includes("EN")) {
      setLanguage("EN");
      setDrop(false);
      // if (!pathName.includes("/en")) {
      //   router.push("/en" + pathName);
      // }
    } else {
      setLanguage("TR");
      setDrop(false);
      // if (pathName.includes("/en")) {
      //   router.push(pathName.split("/en")[1]);
      // }
    }
  }
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setDrop(!drop)}
        >
          <div className="text-sm pr-2 font-bold">{language}</div>
          <Image
            src={triBlack}
            width="8"
            height="8"
            alt="black triangle"
            className="rotate-180"
          ></Image>
        </div>
        <div
          className={` ${
            !drop && "hidden"
          } absolute bg-slate-50 p-5 text-sm rounded-sm`}
        >
          <div className="flex items-center mb-3 cursor-pointer">
            <div className="text-sm pr-2 font-bold " onClick={handleClick}>
              EN
            </div>
          </div>
          <div className="flex items-center mb-3 cursor-pointer">
            <div className="text-sm pr-2 font-bold " onClick={handleClick}>
              TR
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
