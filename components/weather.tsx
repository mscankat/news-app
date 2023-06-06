"use client";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import triBlack from "public/images/tri_black.png";
import { setIconPath } from "@/utils/setIconPath";
import axios from "axios";
import DropTriangle from "./dropTriangle";

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

export default function Weather() {
  const [drop, setDrop] = useState(false);
  const [selected, setSelected] = useState();
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<dataType>({
    location: {
      name: "",
    },
    current: {
      temp_c: 0,
      temp_f: 0,
      is_day: 0,
      condition: {
        code: 0,
      },
    },
  });

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=13f2370015ba4cc49fa193438232704&q=istanbul&aqi=yes"
      )
      .then((response) => {
        setData(response.data);
        setSelected(response.data[0]);
        console.log(response.data);
      })
      .finally(() => setMounted(true));
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
          <div className="text-sm pr-1 font-bold">{data.location.name}</div>
          <div className="text-sm pr-1">{data.current.temp_c} </div>
          <DropTriangle />
        </div>
        <div
          className={` ${
            !drop && "hidden"
          } absolute bg-slate-50 p-5 text-sm rounded-sm dark:bg-side-dark`}
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
