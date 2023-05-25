"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  function handleClick(event: React.MouseEvent) {
    event.preventDefault;
    router.back();
  }
  return (
    <div
      className="left-64 fixed text-lg font-bold underline text-side-text-color cursor-pointer"
      onClick={handleClick}
    >
      ←Back
    </div>
  );
}
