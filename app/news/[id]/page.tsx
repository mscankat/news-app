import parse from "html-react-parser";
export default async function Page({ params }: { params: { id: string } }) {
  interface dataType {
    context: string[];
  }
  const response = await fetch(
    `http://3.73.132.230:3001/api/getOne/${params.id}`
  );
  const data: dataType = await response.json();
  return (
    <>
      <div className="flex flex-col w-800 m-auto py-10">
        {data.context.map((x, i) => {
          if (x.includes("ichef")) {
            return <img src={x} alt="image" className="py-10" />;
          }
          return (
            <>
              {i === 0 ? (
                <div className="font-bold text-5xl">{x}</div>
              ) : (
                <div className="py-3">{parse(x)}</div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}
