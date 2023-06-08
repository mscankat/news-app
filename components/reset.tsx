import { DataContext } from "@/context/dataContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function ResetContext() {
  const router = useRouter();
  const { data, setData } = useContext(DataContext);
}
