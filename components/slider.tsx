"use client";
import Card from "./card";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
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

export default function Slider({ data }: Props) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );
  function handleClick(event: React.MouseEvent) {
    event.preventDefault();
    instanceRef.current?.prev();
  }
  function handleClick2(event: React.MouseEvent) {
    event.preventDefault();
    instanceRef.current?.next();
  }

  return (
    <>
      <div className="w-1024 h-508 bg-white rounded-md ">
        <div className="flex justify-between pt-10 px-14 items-baseline">
          <div className="font-extrabold text-3xl">What's New</div>
          <div className="text-xs tracking-wider font-semibold">
            Latest News
          </div>
        </div>
        <div ref={sliderRef} className="keen-slider relative">
          <div
            className="absolute left-0 top-3 z-10 bg-neutral-400 opacity-70 w-8 h-72 rounded-r flex"
            onClick={handleClick}
          >
            <div className=" w-0 h-0 border-r-8 border-r-side-dark border-t-8 border-b-8 border-b-transparent border-t-transparent m-auto items-center "></div>
          </div>
          <div
            className="absolute right-0 top-3 z-10 bg-neutral-400 opacity-70 w-8 h-72 rounded-l flex"
            onClick={handleClick2}
          >
            <div className=" w-0 h-0 border-l-8 border-l-side-light border-t-8 border-b-8 border-b-transparent border-t-transparent m-auto items-center "></div>
          </div>
          <div className="keen-slider__slide flex justify-center ">
            <Card newsData={data[0]} />
            <Card newsData={data[1]} />
            <Card newsData={data[2]} />
          </div>
          <div className="keen-slider__slide flex justify-center">
            <Card newsData={data[3]} />
            <Card newsData={data[4]} />
            <Card newsData={data[5]} />
          </div>
          <div className="keen-slider__slide flex justify-center">
            <Card newsData={data[6]} />
            <Card newsData={data[7]} />
            <Card newsData={data[8]} />
          </div>
        </div>
      </div>
    </>
  );
}
