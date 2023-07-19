"use client";
import InfiniteScroll from "react-infinite-scroll-component";
import Feed from "./feed";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/context/dataContext";
import urls from "@/public/local/urls.json";
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
  async function nextData() {
    const url = urls.prod;
    const response = await fetch(
      url + `/api/getMany/${category}/21/${data.length + 9}`
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
