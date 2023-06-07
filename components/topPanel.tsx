import Currency from "./currencyDrop";
import LanguageSelector from "./languageSelector";
import Search from "./search";
import Weather from "./weather";

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
