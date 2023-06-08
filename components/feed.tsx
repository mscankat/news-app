import Card from "./card";

interface datatype {
  _id: string;
  date: number;
  link: string;
  title: string;
  description?: string;
  context: string[];
  image: string;
}
interface Props {
  data: datatype[];
}

export default function Feed({ data }: Props) {
  let left = [];
  let middle = [];
  let right = [];

  for (const item of data) {
    if (data.indexOf(item) % 3 === 0) {
      left.push(item);
    }

    if (data.indexOf(item) % 3 === 1) {
      middle.push(item);
    }

    if (data.indexOf(item) % 3 === 2) {
      right.push(item);
    }
  }

  return (
    <>
      <div>
        <div className="flex gap-8">
          <div className="mt-7 cursor-pointer flex flex-col gap-3 flex-wrap w-80">
            {left.length > 0 &&
              left.map((x: datatype) => {
                return <Card newsData={x} key={x._id} />;
              })}
          </div>
          <div className="mt-7 cursor-pointer  flex gap-3 flex-wrap w-80 flex-col">
            {middle.length > 0 &&
              middle.map((x: datatype) => {
                return <Card newsData={x} key={x._id} />;
              })}
          </div>
          <div className="mt-7 cursor-pointer  flex gap-3 flex-wrap w-80 flex-col">
            {right.length > 0 &&
              right.map((x: datatype) => {
                return <Card newsData={x} key={x._id} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}
