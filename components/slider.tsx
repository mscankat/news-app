"use client";
import Card from "./card";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Slider({ data }: any) {
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
            className="absolute left-0 top-3 z-10 bg-neutral-400 opacity-70 w-8 h-72 rounded-r"
            onClick={handleClick}
          ></div>
          <div
            className="absolute right-0 top-3 z-10 bg-neutral-400 opacity-70 w-8 h-72 rounded-l"
            onClick={handleClick2}
          ></div>
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
