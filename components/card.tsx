"use client";
import Link from "next/link";
import intervalToDuration from "date-fns/intervalToDuration";
import { useContext } from "react";
import LanguageData from "@/public/local/language.json";
import { LanguageContext } from "@/context/context";
import Image from "next/image";

function getDuration(date: number, ln: string) {
  let language;
  if (ln === "TR") {
    language = LanguageData.tr;
  } else {
    language = LanguageData.en;
  }
  const interval = intervalToDuration({
    start: new Date(date),
    end: new Date(),
  });
  let duration = "";
  if (interval.years || 0 > 0) {
    interval.months || 0 > 5
      ? (duration =
          (interval.years || 0 + 1).toString() + " " + language.card.time.year)
      : (duration = interval.years + language.card.time.year);
    return duration;
  }
  if (interval.months || 0 > 0) {
    interval.weeks || 0 > 1
      ? (duration =
          (interval.months || 0 + 1).toString() +
          " " +
          language.card.time.month)
      : (duration = interval.months + language.card.time.month);
    return duration;
  }
  if (interval.weeks || 0 > 0) {
    interval.days || 0 > 3
      ? (duration =
          (interval.weeks || 0 + 1).toString() + " " + language.card.time.week)
      : (duration = interval.weeks + language.card.time.week);
    return duration;
  }
  if (interval.days || 0 > 0) {
    interval.hours || 0 > 11
      ? (duration =
          (interval.days || 0 + 1).toString() + " " + language.card.time.day)
      : (duration = interval.days + language.card.time.day);
    return duration;
  }
  if (interval.hours || 0 > 0) {
    interval.minutes || 0 > 29
      ? (duration =
          (interval.hours || 0 + 1).toString() + " " + language.card.time.hour)
      : (duration = interval.hours + language.card.time.hour);
    return duration;
  }
  if (interval.minutes || 0 > 0) {
    interval.seconds || 0 > 29
      ? (duration =
          (interval.minutes || 0 + 1).toString() +
          " " +
          language.card.time.minute)
      : (duration = interval.minutes + language.card.time.minute);
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
  const { language } = useContext(LanguageContext);
  const allowed = [
    "ichef.bbci.co.uk",
    "cdn.webtekno.com",
    "www.webtekno.com",
    "geoim.bloomberght.com",
  ];
  const hostname = new URL(newsData.image).hostname;

  return (
    <>
      <Link href={"/news/" + newsData._id}>
        <div className="rounded-md bg-white w-80 hover:shadow-lg transition-shadow dark:bg-card-dark dark:hover:shadow-card-dark ">
          <div className="p-3">
            {allowed.includes(hostname) ? (
              <Image
                src={newsData.image}
                alt=""
                width={320}
                height={176}
                className="rounded-md  object-cover"
              />
            ) : (
              <img
                src={newsData.image}
                alt=""
                width={320}
                height={176}
                className="rounded-md object-cover"
              />
            )}

            <div className="flex justify-between py-3">
              <div className="text-xs font-semibold uppercase dark:text-side-light-text">
                {new URL(newsData.link).hostname.split(".")[1]}
              </div>
              <div className="text-xxs dark:text-side-light-text">
                {getDuration(newsData.date, language)}
              </div>
            </div>
            <div className="text-lg font-bold pb-3 dark:text-side-light-text">
              {newsData.title}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
