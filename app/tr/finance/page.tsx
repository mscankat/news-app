import Feed from "@/components/feed";
import Slider from "@/components/slider";
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
  const data: datatype[] = await getData(
    "http://localhost:3001/api/getMany/finance/30"
  );
  const sliderData = data.slice(0, 9);
  const feedData = data.slice(9, 30);
  return (
    <>
      <Slider data={sliderData} />
      <Feed data={feedData} />
    </>
  );
}
