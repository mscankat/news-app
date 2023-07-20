import BackButton from "@/components/backButton";
import ScrollToTop from "@/components/scrollToTop";
import parse from "html-react-parser";
import Model from "@/models/model";
import connectMongo from "@/utils/connectMongo";

async function getData(id: string) {
  await connectMongo();
  const data = await Model.findById(id);
  return data;
}

export default async function Page({ params }: { params: { id: string } }) {
  interface datatype {
    context: string[];
    title: string;
    description: string;
    link: string;
    category: string;
  }
  const getdata = await getData(params.id);
  const data: datatype = JSON.parse(JSON.stringify(getdata));
  return (
    <>
      <ScrollToTop />
      <BackButton />
      <div className="flex flex-col w-800 m-auto py-10 ">
        <div className="font-bold text-5xl dark:text-side-light-text">
          {data.title}
        </div>
        {data.context.map((x, i) => {
          if (data.category === "finance") {
            return i === 0 ? (
              <img src={x} alt="image" className="py-9" key={i} />
            ) : (
              <div className="py-3 dark:text-side-light-text" key={i}>
                {parse(x)}
              </div>
            );
          }
          if (
            x.includes("http") &&
            (x.includes("jpg") ||
              x.includes("jpeg") ||
              x.includes("png") ||
              x.includes("gif"))
          ) {
            return <img src={x} alt="image" className="py-10" key={i} />;
          }
          return (
            <div className="py-3 dark:text-side-light-text" key={i}>
              {parse(x)}
            </div>
          );
        })}
        <a
          href={data.link}
          className="dark:text-side-light-text mb-5  italic flex"
        >
          (<div className="dark:text-side-light-text mr-1">Kaynak: </div>{" "}
          <div className="dark:text-slate-600">{data.link}</div>)
        </a>
      </div>
    </>
  );
}
