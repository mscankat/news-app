import BackButton from "@/components/backButton";
import ScrollToTop from "@/components/scrollToTop";
import parse from "html-react-parser";
export default async function Page({ params }: { params: { id: string } }) {
  interface dataType {
    context: string[];
    title: string;
    description: string;
  }
  const response = await fetch(
    `https://khpycrjcxqx6xg4gpywmtzvr4a0uafez.lambda-url.eu-central-1.on.aws/api/getOne/${params.id}`
  );
  const data: dataType = await response.json();
  return (
    <>
      <ScrollToTop />
      <BackButton />
      <div className="flex flex-col w-800 m-auto py-10 ">
        <div className="font-bold text-5xl dark:text-side-light-text">
          {data.title}
        </div>
        {data.context.map((x, i) => {
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
      </div>
    </>
  );
}
