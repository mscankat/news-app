"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

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
          onClick={(e) => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <span className="slider round"></span>
      </label>
      <div className="text-xs font-bold uppercase leading-6 text-side-text-color transition-all ">
        {theme}
      </div>
    </div>
  );
}
