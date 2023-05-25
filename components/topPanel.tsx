import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Currency from "./currencyDrop";
import Search from "./search";
async function getData(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return await response.json();
}
interface datatype {
  symbol: string;
  price: string;
}
export default async function TopPanel() {
  const data: datatype[] = await getData(
    "https://api.binance.com/api/v3/ticker/24hr?symbols=[%22ETHUSDT%22,%22BTCUSDT%22]"
  );
  return (
    <>
      <div className="flex justify-between w-1024 items-center pt-11 pb-9">
        <Search />

        <div className="">
          <Currency data={data} />
        </div>
        <div>Weather</div>
        <div className="">Language</div>
      </div>
    </>
  );
}
