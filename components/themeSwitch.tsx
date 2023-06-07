"use client";
import { useContext, useEffect, useState } from "react";
import LanguageData from "@/public/local/language.json";
import { LanguageContext } from "@/context/context";
import { ThemeContext } from "@/context/themeContext";

export default function ThemeSwitch() {
  const { language } = useContext(LanguageContext);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  let ln;
  language === "TR" ? (ln = LanguageData.tr) : (ln = LanguageData.en);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  function handleChange() {
    if (theme === "dark") {
      document.getElementsByTagName("html")[0].setAttribute("class", "light");
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
    if (theme === "light") {
      document.getElementsByTagName("html")[0].setAttribute("class", "dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <div className="flex content-center gap-5 mr-3">
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleChange}
        />
        <span className="slider round"></span>
      </label>
      <div className="text-xs font-bold uppercase leading-6 text-side-text-color transition-all ">
        {theme === "dark" ? ln.sidebar.mode.dark : ln.sidebar.mode.light}
      </div>
    </div>
  );
}
