"use client";
import { LanguageContext } from "@/context/context";
import Card from "./card";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useContext, useEffect } from "react";
import LanguageData from "@/public/local/language.json";
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
      slideChanged() {},
    },
    [
      // add plugins here
    ]
  );
  const { language } = useContext(LanguageContext);
  let ln;
  if (language === "TR") {
    ln = LanguageData.tr;
  } else {
    ln = LanguageData.en;
  }
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
      <div className="w-1024 h-508 bg-white rounded-md dark:bg-card-dark">
        <div className="flex justify-between pt-10 px-14 items-baseline">
          <div className="font-extrabold text-3xl dark:text-side-light-text">
            {ln.slider.title}
          </div>
          <div className="text-xs tracking-wider font-semibold dark:text-side-light-text">
            {ln.slider.subtitle}
          </div>
        </div>
        <div ref={sliderRef} className="keen-slider relative">
          <div
            className="absolute left-0 top-3 z-10 bg-side-text-color opacity-70 w-8 h-72 rounded-r flex cursor-pointer hover:w-9 transition-all"
            onClick={handleClick}
          >
            <div className=" w-0 h-0 border-r-8 border-r-side-dark border-t-8 border-b-8 border-b-transparent border-t-transparent m-auto items-center "></div>
          </div>
          <div
            className="absolute right-0 top-3 z-10 bg-side-text-color opacity-70 w-8 h-72 rounded-l flex cursor-pointer hover:w-9 transition-all"
            onClick={handleClick2}
          >
            <div className=" w-0 h-0 border-l-8 border-l-black border-t-8 border-b-8 border-b-transparent border-t-transparent m-auto items-center "></div>
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
