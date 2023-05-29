"use client";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import triBlack from "public/images/tri_black.png";
import { setIconPath } from "@/utils/setIconPath";
import axios from "axios";

interface dataType {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      code: number;
    };
  };
}
interface Props {
  data: dataType;
}
async function getData(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return await response.json();
}
export default function Weather({ data }: Props) {
  const [drop, setDrop] = useState(false);
  const [selected, setSelected] = useState();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setDrop(!drop)}
        >
          <img
            src={setIconPath(data.current.condition.code, data.current.is_day)}
            alt=""
            width={25}
            height={25}
          />
          <div className="text-sm pr-2 font-bold">{data.location.name}</div>
          <div>{data.current.temp_c} </div>
          <Image
            src={triBlack}
            width="8"
            height="8"
            alt="black triangle"
            className="rotate-180"
          ></Image>
        </div>
        <div
          className={` ${
            !drop && "hidden"
          } absolute bg-slate-50 p-5 text-sm rounded-sm`}
        >
          {/* <div className="flex items-center mb-3 cursor-pointer">
            <div className="text-sm pr-2 font-bold " onClick={handleClick}>
              EN
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
