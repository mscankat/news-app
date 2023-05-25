import Link from "next/link";
import { intervalToDuration, formatDuration } from "date-fns";
import Card from "./card";
import Slider from "./slider";

async function getData(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return await response.json();
}
interface datatype {
  _id: string;
  date: number;
  link: string;
  title: string;
  description?: string;
  context: string[];
  image: string;
}

export default async function Feed() {
  const data: datatype[] = await getData("http://3.73.132.230:3001/api/getAll");
  let left = [];
  let middle = [];
  let right = [];

  for (const item of data) {
    if (data.indexOf(item) % 3 === 0) {
      left.push(item);
    }

    if (data.indexOf(item) % 3 === 1) {
      middle.push(item);
    }

    if (data.indexOf(item) % 3 === 2) {
      right.push(item);
    }
  }

  return (
    <>
      <Slider data={data} />
      <div className="flex gap-8">
        <div className="mt-7 cursor-pointer flex flex-col gap-3 flex-wrap w-80">
          {left.map((x: datatype) => {
            return <Card newsData={x} />;
          })}
        </div>
        <div className="mt-7 cursor-pointer  flex gap-3 flex-wrap w-80 flex-col">
          {middle.map((x: datatype) => {
            return <Card newsData={x} />;
          })}
        </div>
        <div className="mt-7 cursor-pointer  flex gap-3 flex-wrap w-80 flex-col">
          {right.map((x: datatype) => {
            return <Card newsData={x} />;
          })}
        </div>
      </div>
    </>
  );
}
