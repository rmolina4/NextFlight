"use client";

import NavBar from "@/components/navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <div>
      <NavBar></NavBar>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}
