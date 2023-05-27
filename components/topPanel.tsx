import Currency from "./currencyDrop";
import LanguageSelector from "./languageSelector";
import Search from "./search";
async function getData(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return await response.json();
}
interface dataType {
  priceChange: string;
  lastPrice: string;
  symbol: string;
}
export default async function TopPanel() {
  const data: dataType[] = await getData(
    "https://api.binance.com/api/v3/ticker/24hr?symbols=[%22ETHUSDT%22,%22BTCUSDT%22,%22BNBUSDT%22]"
  );
  return (
    <>
      <div className="flex justify-between w-1024 items-center pt-11 pb-9">
        <Search />

        <div className="">
          <Currency data={data} />
        </div>
        <div>Weather</div>
        <div className="">
          <LanguageSelector />
        </div>
      </div>
    </>
  );
}
