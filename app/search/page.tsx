import Feed from "@/components/feed";
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
  const apiURL = new URL(
    "https://khpycrjcxqx6xg4gpywmtzvr4a0uafez.lambda-url.eu-central-1.on.aws/api/search"
  );
  apiURL.searchParams.set("q", searchParams.q);
  const data: datatype[] = await getData(apiURL.href);
  return (
    <>
      <Feed data={data} />
    </>
  );
}
