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
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("class", localStorage.getItem("theme") || "light");
  });
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
