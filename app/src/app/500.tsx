"use client";

import NavBar from "@/components/navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Custom500() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <div>
      <NavBar></NavBar>
      <h1>500 - Server-side error occurred</h1>
    </div>
  );
}
