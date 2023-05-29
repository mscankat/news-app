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
async function getData(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return await response.json();
}
export default function Weather() {
  const [drop, setDrop] = useState(false);
  const [selected, setSelected] = useState();
  const [data, setData] = useState<dataType>({
    current: { temp_c: 0, temp_f: 0, is_day: 0, condition: { code: 0 } },
    location: { name: "" },
  });
  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=13f2370015ba4cc49fa193438232704&q=istanbul&aqi=yes"
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);

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
          />
          <div className="text-sm pr-2 font-bold">{data.location.name}</div>
          <div>{data.current.temp_c}</div>
          <Image
            src={triBlack}
            width="8"
            height="8"
            alt="black triangle"
            className="rotate-180"
          ></Image>
        </div>
        {/* <div
          className={` ${
            !drop && "hidden"
          } absolute bg-slate-50 p-5 text-sm rounded-sm`}
        >
          <div className="flex items-center mb-3 cursor-pointer">
            <div className="text-sm pr-2 font-bold " onClick={handleClick}>
              EN
            </div>
          </div>
          <div className="flex items-center mb-3 cursor-pointer">
            <div className="text-sm pr-2 font-bold " onClick={handleClick}>
              TR
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
