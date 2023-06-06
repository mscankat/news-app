"use client";
import { useState, createContext } from "react";
interface contextType {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}
const defaultValues: contextType = {
  language: "",
  setLanguage: () => {},
};
export const LanguageContext = createContext<contextType>(defaultValues);

export default function Context({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("TR");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
