"use client";
import Image from "next/image";
import { useState } from "react";

export default function Currency({ data }: any) {
  const [drop, setDrop] = useState(false);
  const triGreenPath = "/../public/images/tri_green.png";
  const triRedPath = "/../public/images/tri_red.png";
  const triBlackPath = "/../public/images/tri_black.png";

  return (
    <>
      <div className="">
        <div
          className="flex items-center cursor-pointer "
          onClick={() => setDrop(!drop)}
        >
          <div className="text-sm pr-2 font-bold">BTC</div>
          <div className="pr-2">
            {parseInt(data[0].priceChange) > 0 ? (
              <Image src={triGreenPath} alt="increase" width={8} height={8} />
            ) : (
              <Image
                src={triRedPath}
                alt="decrease"
                width={8}
                height={8}
                className="rotate-180"
              />
            )}
          </div>
          <div className="text-sm pr-2">{parseInt(data[0].lastPrice)} </div>
          <Image
            src={triBlackPath}
            alt="triangle"
            width={11}
            height={11}
            className="rotate-180"
          />
        </div>
        <div
          className={` ${!drop && "hidden"} absolute bg-slate-50 p-5 text-sm `}
        >
          <div className="flex items-center">
            <div className="text-sm pr-2 font-bold">BTC</div>
            <div className="pr-2">
              {parseInt(data[0].priceChange) > 0 ? (
                <Image src={triGreenPath} alt="increase" width={8} height={8} />
              ) : (
                <Image
                  src={triRedPath}
                  alt="decrease"
                  width={8}
                  height={8}
                  className="rotate-180"
                />
              )}
            </div>

            <div className="text-sm">{parseInt(data[0].lastPrice)} </div>
          </div>

          <div className="flex items-center mt-3">
            <div className="text-sm pr-2 font-bold">ETH</div>
            <div className="pr-2">
              {parseInt(data[1].priceChange) > 0 ? (
                <Image src={triGreenPath} alt="increase" width={8} height={8} />
              ) : (
                <Image
                  src={triRedPath}
                  alt="decrease"
                  width={8}
                  height={8}
                  className="rotate-180"
                />
              )}
            </div>

            <div className="text-sm">{parseInt(data[1].lastPrice)} </div>
          </div>
        </div>
      </div>
    </>
  );
}
