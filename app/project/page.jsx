"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { works } from "../constants";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace(
      `/project/${works[0].title.toLowerCase().replace(/\s+/g, "")}`
    );
  } ,[])

  return null;
}
