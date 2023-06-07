"use client";
import Image from "next/image";
import { useState, useEffect, use } from "react";
import triGreen from "public/images/tri_green.png";
import triRed from "public/images/tri_red.png";
import axios from "axios";
import DropTriangle from "./dropTriangle";
interface dataType {
  priceChange: string;
  lastPrice: string;
  symbol: string;
}

export default function Currency() {
  const [drop, setDrop] = useState(false);
  const [data, setData] = useState<dataType[]>([
    { priceChange: "", lastPrice: "", symbol: "" },
  ]);
  const [selected, setSelected] = useState<dataType>(data[0]);

  useEffect(() => {
    axios
      .get(
        "https://api.binance.com/api/v3/ticker/24hr?symbols=[%22ETHUSDT%22,%22BTCUSDT%22,%22BNBUSDT%22]"
      )
      .then((response) => {
        setData(response.data);
        setSelected(response.data[0]);
        console.log(response.data);
      })
      .finally(() => setMounted(true));
  }, []);

  function handleClick(event: React.MouseEvent) {
    const symbol = event.currentTarget.firstElementChild?.innerHTML;
    for (const sym of data) {
      if (sym.symbol.includes(symbol || "")) {
        setSelected(sym);
        setDrop(!drop);
        return;
      }
    }
  }
  const [mounted, setMounted] = useState(false);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <div className="">
        <div
          className="flex items-center cursor-pointer "
          onClick={() => setDrop(!drop)}
        >
          <div className="text-sm pr-2 font-bold dark:text-side-light-text">
            {selected.symbol.split("USDT")[0]}
          </div>
          <div className="pr-2">
            {parseInt(selected.priceChange) > 0 ? (
              <Image
                src={triGreen}
                alt="increase"
                width={8}
                height={8}
                className="fill"
              />
            ) : (
              <Image
                src={triRed}
                alt="decrease"
                width={8}
                height={8}
                className="rotate-180"
              />
            )}
          </div>
          <div className="text-sm pr-2 dark:text-side-light-text">
            {parseInt(selected.lastPrice) || " "}{" "}
          </div>
          <DropTriangle />
        </div>
        <div
          className={` ${
            !drop && "hidden"
          } absolute bg-slate-50 p-5 text-sm rounded-sm dark:bg-side-light-second`}
        >
          {data.map((current: dataType) => {
            return (
              <div
                key={current.symbol}
                onClick={handleClick}
                className="flex items-center mb-3 cursor-pointer"
              >
                <div className="text-sm pr-2 font-bold dark:text-side-light-text">
                  {current.symbol.split("USDT")[0]}{" "}
                </div>
                <div className="pr-2 ">
                  {parseInt(current.priceChange) || 0 > 0 ? (
                    <Image src={triGreen} alt="increase" width={8} height={8} />
                  ) : (
                    <Image
                      src={triRed}
                      alt="decrease"
                      width={8}
                      height={8}
                      className="rotate-180"
                    />
                  )}{" "}
                </div>

                <div className="text-sm dark:text-side-light-text">
                  {parseInt(current.lastPrice) || ""}{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
