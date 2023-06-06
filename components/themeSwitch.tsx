"use client";
import { useContext, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import LanguageData from "@/public/local/language.json";
import { LanguageContext } from "@/context/context";

export default function ThemeSwitch() {
  const { language } = useContext(LanguageContext);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  let ln;
  if (language === "TR" ? (ln = LanguageData.tr) : (ln = LanguageData.en))
    useEffect(() => {
      setMounted(true);
    }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex content-center gap-5 mr-3">
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <span className="slider round"></span>
      </label>
      <div className="text-xs font-bold uppercase leading-6 text-side-text-color transition-all ">
        {theme === "dark" ? ln.sidebar.mode.dark : ln.sidebar.mode.light}
      </div>
    </div>
  );
}
