import Feed from "@/components/feed";
import Scroll from "@/components/infiniteScroll";
import Slider from "@/components/slider";
import InfiniteScroll from "react-infinite-scroll-component";
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
    "https://khpycrjcxqx6xg4gpywmtzvr4a0uafez.lambda-url.eu-central-1.on.aws/api/getMany/breaking/30/0"
  );
  const sliderData = data.slice(0, 9);
  const feedData = data.slice(9, 30);
  return (
    <>
      <Slider data={sliderData} />
      <Scroll first={feedData} category="breaking" />
    </>
  );
}
