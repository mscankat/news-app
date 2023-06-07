"use client";
import { createContext, useEffect, useState } from "react";

interface contextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
const defaultValues: contextType = {
  theme: "",
  setTheme: () => {},
};
export const ThemeContext = createContext<contextType>(defaultValues);

export default function ColorContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
    document
      .getElementsByTagName("html")[0]
      .setAttribute("class", localStorage.getItem("theme") || "light");
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
