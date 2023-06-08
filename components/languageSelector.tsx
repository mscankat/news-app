"use client";
import { LanguageContext } from "@/context/context";
import { useContext } from "react";
import { useEffect, useState } from "react";
import DropTriangle from "./dropTriangle";
export default function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [drop, setDrop] = useState(false);

  function handleClick(event: React.MouseEvent) {
    if (event.currentTarget.innerHTML.includes("EN")) {
      setLanguage("EN");
      localStorage.setItem("language", "EN");
      setDrop(false);
    } else {
      setLanguage("TR");
      localStorage.setItem("language", "TR");
      setDrop(false);
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
      <div className="relative">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setDrop(!drop)}
        >
          <div className="text-sm pr-1 font-bold dark:text-side-light-text">
            {language}
          </div>
          <DropTriangle />
        </div>
        <div
          className={` ${
            !drop && "hidden"
          } absolute bg-slate-50 py-2 text-sm rounded-sm dark:bg-side-light-second right-0`}
        >
          <div className="flex items-center  cursor-pointer dark:text-side-light-text">
            <div
              className="text-sm py-2 px-5  font-bold hover:bg-side-text-color"
              onClick={handleClick}
            >
              EN
            </div>
          </div>
          <div className="flex items-center  cursor-pointer dark:text-side-light-text">
            <div
              className="text-sm py-2 px-5 font-bold hover:bg-side-text-color"
              onClick={handleClick}
            >
              TR
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
