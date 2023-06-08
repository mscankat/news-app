"use client";
import InfiniteScroll from "react-infinite-scroll-component";
import Feed from "./feed";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/context/dataContext";
interface datatype {
  _id: string;
  date: number;
  link: string;
  title: string;

  context: string[];
  image: string;
}
const defValues = {
  _id: "",
  date: 0,
  link: "",
  title: "",
  context: [],
  image: "",
};
export default function Scroll({
  first,
  category,
}: {
  first: datatype[];
  category: string;
}) {
  const { data, setData } = useContext(DataContext);
  useEffect(() => {
    if (data.length < 3) {
      setData(first);
    }
  }, []);
  //   const [data, setData] = useState<datatype[]>(first);
  async function nextData() {
    const response = await fetch(
      `https://khpycrjcxqx6xg4gpywmtzvr4a0uafez.lambda-url.eu-central-1.on.aws/api/getMany/${category}/21/${
        data.length + 9
      }`
    );
    const newData = await response.json();
    setData((data) => [...data, ...newData]);
  }
  return (
    <InfiniteScroll
      dataLength={data.length}
      next={nextData}
      hasMore={true}
      loader={""}
    >
      <Feed data={data.length < 2 ? first : data} />
    </InfiniteScroll>
  );
}
