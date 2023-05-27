"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import triGreen from "public/images/tri_green.png";
import triRed from "public/images/tri_red.png";
import triBlack from "public/images/tri_black.png";
interface dataType {
  priceChange: string;
  lastPrice: string;
  symbol: string;
}
interface Props {
  data: dataType[];
}

export default function Currency({ data }: Props) {
  const [drop, setDrop] = useState(false);
  const [selected, setSelected] = useState(data[0]);

  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
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
  if (!mount) {
    return <></>;
  }

  return (
    <>
      <div className="">
        <div
          className="flex items-center cursor-pointer "
          onClick={() => setDrop(!drop)}
        >
          <div className="text-sm pr-2 font-bold">
            {selected.symbol.split("USDT")[0]}
          </div>
          <div className="pr-2">
            {parseInt(selected.priceChange) > 0 ? (
              <Image src={triGreen} alt="increase" width={8} height={8} />
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
          <div className="text-sm pr-2">{parseInt(selected.lastPrice)} </div>
          <Image
            src={triBlack}
            alt="triangle"
            width={11}
            height={11}
            className="rotate-180"
          />
        </div>
        <div
          className={` ${
            !drop && "hidden"
          } absolute bg-slate-50 p-5 text-sm rounded-sm`}
        >
          {data.map((current: dataType) => {
            return (
              <div
                key={current.symbol}
                onClick={handleClick}
                className="flex items-center mb-3 cursor-pointer"
              >
                <div className="text-sm pr-2 font-bold ">
                  {current.symbol.split("USDT")[0]}
                </div>
                <div className="pr-2">
                  {parseInt(current.priceChange) > 0 ? (
                    <Image src={triGreen} alt="increase" width={8} height={8} />
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

                <div className="text-sm">{parseInt(current.lastPrice)} </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
