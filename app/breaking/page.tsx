import Feed from "@/components/feed";
import Slider from "@/components/slider";
import TopPanel from "@/components/topPanel";
async function getData(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return await response.json();
}

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
  return (
    <>
      <div className="flex flex-col items-center">
        <TopPanel />
        {/* <Slider /> */}
        {/* @ts-expect-error Async Server Component */}
        <Feed />
        <div className="">Main</div>
      </div>
    </>
  );
}
