import BackButton from "@/components/backButton";
import parse from "html-react-parser";
export default async function Page({ params }: { params: { id: string } }) {
  interface dataType {
    context: string[];
    title: string;
    description: string;
  }
  const response = await fetch(`http://localhost:3001/api/getOne/${params.id}`);
  const data: dataType = await response.json();
  return (
    <>
      <div className="flex flex-col w-800 m-auto py-10 ">
        <BackButton />
        <div className="font-bold text-5xl">{data.title}</div>
        {data.context.map((x, i) => {
          if (
            x.includes("http") &&
            (x.includes("jpg") ||
              x.includes("jpeg") ||
              x.includes("png") ||
              x.includes("gif"))
          ) {
            return <img src={x} alt="image" className="py-10" />;
          }
          // if (x.includes("content-iframe")) {
          //   return <div className="h-508 w-full">{parse(x)}</div>;
          // }
          return <div className="py-3">{parse(x)}</div>;
        })}
      </div>
    </>
  );
}
