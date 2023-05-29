import Currency from "./currencyDrop";
import LanguageSelector from "./languageSelector";
import Search from "./search";
import Weather from "./weather";

interface currencyDataType {
  priceChange: string;
  lastPrice: string;
  symbol: string;
}

export default function TopPanel() {
  return (
    <>
      <div className="flex justify-between w-1024 items-center pt-11 pb-9">
        <Search />

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
