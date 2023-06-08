"use client";
import { useEffect, useState } from "react";
import { setIconPath } from "@/utils/setIconPath";
import axios from "axios";
import DropTriangle from "./dropTriangle";
import Image from "next/image";

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
  const [selected, setSelected] = useState({
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
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<dataType[]>([
    {
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
    },
  ]);
  function handleClick(event: React.MouseEvent) {
    const symbol = event.currentTarget.textContent;
    console.log(symbol);
    for (const sym of data) {
      if (symbol?.includes(sym.location.name)) {
        setSelected(sym);
        setDrop(!drop);
        return;
      }
    }
  }
  function getData(url: string) {
    return axios.get(url).then((response) => {
      setData((current) => [...current, response.data]);
      setSelected(response.data);
    });
  }

  useEffect(() => {
    getData(
      "https://api.weatherapi.com/v1/current.json?key=13f2370015ba4cc49fa193438232704&q=istanbul&aqi=yes"
    ).finally(() => {
      setMounted(true);
      setData((current) => [current[1]]);
    });
    getData(
      "https://api.weatherapi.com/v1/current.json?key=13f2370015ba4cc49fa193438232704&q=ankara&aqi=yes"
    );
    getData(
      "https://api.weatherapi.com/v1/current.json?key=13f2370015ba4cc49fa193438232704&q=izmir&aqi=yes"
    );
    getData(
      "https://api.weatherapi.com/v1/current.json?key=13f2370015ba4cc49fa193438232704&q=kayseri&aqi=yes"
    );
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="">
        <div
          className="flex items-center cursor-pointer gap-2"
          onClick={() => setDrop(!drop)}
        >
          <Image
            src={setIconPath(
              selected.current.condition.code,
              selected.current.is_day
            )}
            alt=""
            width={25}
            height={25}
          />
          <div className="text-sm pr-1 font-bold dark:text-side-light-text">
            {selected.location.name}
          </div>
          <div className="text-sm pr-1 dark:text-side-light-text">
            {selected.current.temp_c}⁰C{" "}
          </div>
          <DropTriangle />
        </div>
        <div
          className={` ${
            !drop && "hidden"
          } absolute bg-slate-50  py-2 text-sm rounded-sm dark:bg-side-light-second flex flex-col gap-2 z-10`}
        >
          {data.map((x) => {
            return (
              <div
                key={x.location.name}
                className="flex cursor-pointer hover:bg-side-text-color gap-2 py-2 px-3"
                onClick={handleClick}
              >
                <Image
                  src={setIconPath(x.current.condition.code, x.current.is_day)}
                  alt=""
                  width={25}
                  height={25}
                />
                <div className="text-sm pr-1 font-bold dark:text-side-light-text">
                  {x.location.name}
                </div>
                <div className="text-sm pr-1 dark:text-side-light-text">
                  {x.current.temp_c}⁰C{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
