import Currency from "./currencyDrop";
import LanguageSelector from "./languageSelector";
import Search from "./search";
import Weather from "./weather";

interface dataType {
  priceChange: string;
  lastPrice: string;
  symbol: string;
}
interface weatherDataType {
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

export default function TopPanel() {
  return (
    <>
      <div className="flex justify-between w-1024 items-center pt-11 pb-9">
        <div>
          <Search />
        </div>

        <div className="">
          <Currency />
        </div>
        <div>
          <Weather />
        </div>
        <div className="">
          <LanguageSelector />
        </div>
      </div>
    </>
  );
}
