"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const main = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Flights",
      url: "/flights",
    },
    {
      text: "About",
      url: "/about",
    },
  ];

  const other = [
    {
      text: "Login",
      url: "/login",
      style: "border"
    },
    {
      text: "Signup",
      url: "/signup",
      style: "bg-blue-300"
    },
  ];

  return (
    <div className="flex w-full justify-between p-2">
      <h1 className="text-2xl text-blue-500 mt-1">NextFlight</h1>
      <div className="flex gap-4">
        {main.map((item) => (
          <Link
            href={item.url}
            key={item.url} className={`py-2 px-4`}
          >
            {item.text}
          </Link>
        ))}
        {other.map((item) => (
          <Link key={item.url} href={item.url} className={`py-2 px-15 rounded-full ${item.style}`}>
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
