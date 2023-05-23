import Feed from "@/components/feed";
import Slider from "@/components/slider";
import TopPanel from "@/components/topPanel";

export default function Breaking() {
  return (
    <>
      <div className="flex flex-col items-center">
        <TopPanel />
        <Slider />
        {/* @ts-expect-error Async Server Component */}
        <Feed />
        <div className="">Main</div>
      </div>
    </>
  );
}
