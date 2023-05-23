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
  const data = await getData("http://3.73.132.230:3001/api/getAll");

  //   useEffect(() => {});

  return (
    <>
      <div className="mt-7 cursor-pointer  flex gap-8 flex-wrap w-1024">
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
      </div>

      {/* <div className="mt-7 cursor-pointer  flex gap-8 flex-wrap w-1024">
        <div className="rounded-md bg-white w-80 hover:shadow-2xl transition-shadow">
          <div className="p-3">
            <img
              src="https://ichef.bbci.co.uk/news/800/cpsprodpb/0345/live/e07c9750-f968-11ed-9c29-0feef5d66222.jpg.webp"
              alt="thumbnail"
              className="rounded-md w-80"
            ></img>
            <div className="flex justify-between py-3">
              <div className="text-xs font-semibold">BBC</div>
              <div className="text-xxs ">1 HOUR</div>
            </div>
            <div className="text-lg font-bold pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
