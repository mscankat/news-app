import Scroll from "@/components/infiniteScroll";
import Slider from "@/components/slider";
import urls from "@/public/local/urls.json";

async function getData(url: string) {
  const response = await fetch(url, { cache: "no-cache" });

  if (!response.ok) {
    console.log("fetch failed");
  }
  return await response.json();
}
export const metadata = {
  title: "News",
  description: "Breaking News",
};
interface datatype {
  _id: string;
  date: number;
  link: string;
  title: string;
  description?: string;
  context: string[];
  image: string;
}
export default async function Breaking() {
  const url = urls.local;
  const data: datatype[] = await getData(url + "/api/getMany/breaking/30/0");
  const sliderData = data.slice(0, 9);
  const feedData = data.slice(9, 30);
  return (
    <>
      <Slider data={sliderData} />
      <Scroll first={feedData} category="breaking" />
    </>
  );
}
