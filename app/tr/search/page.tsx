import Feed from "@/components/feed";
async function getData(url: string) {
  try {
    const response = await fetch(url);
    console.log(url);
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
  console.log(searchParams.q);
  const apiURL = new URL("http://3.73.132.230:3001/api/search");
  apiURL.searchParams.set("q", searchParams.q);
  console.log(apiURL.href);

  const data: datatype[] = await getData(apiURL.href);
  return (
    <>
      <Feed data={data} />
    </>
  );
}