import Feed from "@/components/feed";
import urls from "@/public/local/urls.json";
async function getData(url: string) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}
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
export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const url = urls.prod;
  const apiURL = new URL(url + "/api/search");
  apiURL.searchParams.set("q", searchParams.q);
  const data: datatype[] = await getData(apiURL.href);
  return (
    <>
      <Feed data={data} />
    </>
  );
}
