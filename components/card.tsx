"use client";
import Link from "next/link";
import intervalToDuration from "date-fns/intervalToDuration";
import { useState } from "react";
function getDuration(date: number) {
  const interval = intervalToDuration({
    start: new Date(date),
    end: new Date(),
  });
  let duration = "";
  if (interval.years || 0 > 0) {
    interval.months || 0 > 5
      ? (duration = (interval.years || 0 + 1).toString() + " YEARS")
      : (duration = interval.years + " YEARS");
    return duration;
  }
  if (interval.months || 0 > 0) {
    interval.weeks || 0 > 1
      ? (duration = (interval.months || 0 + 1).toString() + " MONTHS")
      : (duration = interval.months + " MONTHS");
    return duration;
  }
  if (interval.weeks || 0 > 0) {
    interval.days || 0 > 3
      ? (duration = (interval.weeks || 0 + 1).toString() + " WEEKS")
      : (duration = interval.weeks + " WEEKS");
    return duration;
  }
  if (interval.days || 0 > 0) {
    interval.hours || 0 > 11
      ? (duration = (interval.days || 0 + 1).toString() + " DAYS")
      : (duration = interval.days + " DAYS");
    return duration;
  }
  if (interval.hours || 0 > 0) {
    interval.minutes || 0 > 29
      ? (duration = (interval.hours || 0 + 1).toString() + " HOURS")
      : (duration = interval.hours + " HOURS");
    return duration;
  }
  if (interval.minutes || 0 > 0) {
    interval.seconds || 0 > 29
      ? (duration = (interval.minutes || 0 + 1).toString() + " MINUTES")
      : (duration = interval.minutes + " MINUTES");
    return duration;
  }
  return duration;
}
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
  newsData: datatype;
}

export default function Card({ newsData }: Props) {
  //   console.log(newsData);

  return (
    <>
      <Link href={"/news/" + newsData._id}>
        <div className="rounded-md bg-white w-80 hover:shadow-lg transition-shadow">
          <div className="p-3">
            <img
              src={newsData.image}
              alt=""
              className="rounded-md w-80 h-44 object-cover"
            ></img>
            <div className="flex justify-between py-3">
              <div className="text-xs font-semibold uppercase">
                {new URL(newsData.link).hostname.split(".")[1]}
              </div>
              <div className="text-xxs ">{getDuration(newsData.date)}</div>
            </div>
            <div className="text-lg font-bold pb-3">{newsData.title}</div>
          </div>
        </div>
      </Link>
    </>
  );
}
