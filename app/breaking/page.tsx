import Feed from "@/components/feed";
import TopPanel from "@/components/topPanel";

export default function Breaking() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Feed />
    </>
  );
}
