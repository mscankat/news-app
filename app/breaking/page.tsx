import Scroll from "@/components/infiniteScroll";
import Slider from "@/components/slider";
import Model from "@/models/model";
import connectMongo from "@/utils/connectMongo";

async function getData() {
  const category = "breaking";
  await connectMongo();
  const data = await Model.aggregate([
    {
      $match: { category: category },
    },
  ])
    .sort({ date: -1 })
    .skip(0)
    .limit(30);
  return data;
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
  const getdata = await getData();
  const data: datatype[] = JSON.parse(JSON.stringify(getdata));
  const sliderData = data.slice(0, 9);
  const feedData = data.slice(9, 30);
  return (
    <>
      <Slider data={sliderData} />
      <Scroll first={feedData} category="breaking" />
    </>
  );
}
export const revalidate = 600;
