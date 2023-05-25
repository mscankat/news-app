import Feed from "@/components/feed";
import TopPanel from "@/components/topPanel";

export default function Breaking() {
  return (
    <>
      <div className="flex flex-col items-center">
        <TopPanel />

        {/* @ts-expect-error Async Server Component */}
        <Feed />
        <div className="">Main</div>
      </div>
    </>
  );
}
