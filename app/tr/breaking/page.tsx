import Feed from "@/components/feed";
import Slider from "@/components/slider";
async function getData(url: string) {
  const response = await fetch(url);

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
  const data: datatype[] = await getData(
    "http://localhost:3001/api/getMany/breaking/30"
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
