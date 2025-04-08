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
      <h1 className="text-2xl text-blue-500">NextFlight</h1>
      <div className="flex gap-25">
        {main.map((item) => (
          <button key={item.url} className={`py-2 px-4`}>
          <Link
            href={item.url}
          >
            {item.text}
          </Link>
          </button>
        ))}
        {other.map((item) => (
          <button key={item.url} className={`py-2 px-15 rounded-full ${item.style}`}>
          <Link key={item.url} href={item.url}>
            {item.text}
          </Link>
          </button>
        ))}
      </div>
    </div>
  );
}
