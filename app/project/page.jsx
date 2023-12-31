"use client";

import { useRouter } from "next/navigation";
import { works } from "../constants";

export default function Page() {
  const router = useRouter();

  router.replace(
    `/project/${works[0].title.toLowerCase().replace(/\s+/g, "")}`
  );

  return null;
}
