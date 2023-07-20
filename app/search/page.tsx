import Feed from "@/components/feed";
import Model from "@/models/model";
import connectMongo from "@/utils/connectMongo";

async function getData(query: string | undefined) {
  await connectMongo();
  if (query) {
    const data = await Model.aggregate([
      {
        $search: {
          index: "turkish",
          autocomplete: {
            query: query,
            path: "description",
          },
        },
      },
    ]);
    return data;
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
  const getdata = await getData(searchParams.q);
  const data: datatype[] = JSON.parse(JSON.stringify(getdata));
  return (
    <>
      <Feed data={data} />
    </>
  );
}
