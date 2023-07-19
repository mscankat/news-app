import Scroll from "@/components/infiniteScroll";
import Slider from "@/components/slider";
import urls from "@/public/local/urls.json";
async function getData(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch");
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
  category: string;
}
export default async function Finance() {
  const url = urls.prod;
  const data: datatype[] = await getData(url + "/api/getMany/tech/30/0");
  const sliderData = data.slice(0, 9);
  const feedData = data.slice(9, 30);
  return (
    <>
      <Slider data={sliderData} />
      <Scroll first={feedData} category="tech" />
    </>
  );
}
export const revalidate = 600;
