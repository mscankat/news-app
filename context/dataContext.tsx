"use client";
import { createContext, useState } from "react";

interface datatype {
  _id: string;
  date: number;
  link: string;
  title: string;
  description?: string;
  context: string[];
  image: string;
}
interface contextType {
  data: datatype[];
  setData: React.Dispatch<
    React.SetStateAction<
      {
        _id: string;
        date: number;
        link: string;
        title: string;
        context: string[];
        image: string;
      }[]
    >
  >;
}
const defaultValues: contextType = {
  data: [
    {
      _id: "",
      date: 0,
      link: "",
      title: "",

      context: [""],
      image: "",
    },
  ],
  setData: () => {},
};

export const DataContext = createContext<contextType>(defaultValues);
export default function DataContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState([
    {
      _id: "",
      date: 0,
      link: "",
      title: "",
      context: [""],
      image: "",
    },
  ]);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}
