async function getData(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return await response.json();
}
interface datatype {
  id: string;
  date: Number;
  link: string;
  title: string;
  description?: string;
  context: string[];
  image: string;
}

export default async function Feed() {
  const data: datatype[] = await getData("http://3.73.132.230:3001/api/getAll");
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

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    console.log(event);
  }

  return (
    <div className="flex gap-8">
      <div className="mt-7 cursor-pointer flex flex-col gap-3 flex-wrap w-80">
        {left.map((x: datatype) => {
          return (
            <div className="rounded-md bg-white w-80 hover:shadow-lg transition-shadow">
              <div className="p-3">
                <img
                  src={x.image}
                  alt="thumbnail"
                  className="rounded-md w-80"
                ></img>
                <div className="flex justify-between py-3">
                  <div className="text-xs font-semibold uppercase">
                    {new URL(x.link).hostname.split(".")[1]}
                  </div>
                  <div className="text-xxs ">1 HOUR</div>
                </div>
                <div className="text-lg font-bold pb-3">{x.title}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-7 cursor-pointer  flex gap-3 flex-wrap w-80 flex-col">
        {middle.map((x: datatype) => {
          return (
            <div className="rounded-md bg-white w-80 hover:shadow-lg transition-shadow">
              <div className="p-3">
                <img
                  src={x.image}
                  alt="thumbnail"
                  className="rounded-md w-80"
                ></img>
                <div className="flex justify-between py-3">
                  <div className="text-xs font-semibold uppercase">
                    {new URL(x.link).hostname.split(".")[1]}
                  </div>
                  <div className="text-xxs ">1 HOUR</div>
                </div>
                <div className="text-lg font-bold pb-3">{x.title}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-7 cursor-pointer  flex gap-3 flex-wrap w-80 flex-col">
        {right.map((x: datatype) => {
          return (
            <div className="rounded-md bg-white w-80 hover:shadow-lg transition-shadow">
              <div className="p-3">
                <img
                  src={x.image}
                  alt="thumbnail"
                  className="rounded-md w-80"
                ></img>
                <div className="flex justify-between py-3">
                  <div className="text-xs font-semibold uppercase">
                    {new URL(x.link).hostname.split(".")[1]}
                  </div>
                  <div className="text-xxs ">1 HOUR</div>
                </div>
                <div className="text-lg font-bold pb-3">{x.title}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="mt-7 cursor-pointer  flex gap-8 flex-wrap w-1024">
        {data.map((x: datatype) => {
          return (
            <div className="rounded-md bg-white w-80 hover:shadow-2xl transition-shadow">
              <div className="p-3">
                <img
                  src={x.image}
                  alt="thumbnail"
                  className="rounded-md w-80"
                ></img>
                <div className="flex justify-between py-3">
                  <div className="text-xs font-semibold uppercase">
                    {new URL(x.link).hostname.split(".")[1]}
                  </div>
                  <div className="text-xxs ">1 HOUR</div>
                </div>
                <div className="text-lg font-bold pb-3">{x.title}</div>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
