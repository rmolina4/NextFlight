"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      style: "border",
    },
    {
      text: "Signup",
      url: "/signup",
      style: "bg-blue-300",
    },
  ];

  return (
    <div className="flex w-full justify-between p-2">
      <h1 className="text-2xl text-blue-500 mt-1">NextFlight</h1>
      <div className="flex gap-4 items-center">
        {main.map((item) => (
          <Link href={item.url} key={item.url} className={`py-2 px-4 hover:text-blue-500 transition-colors ${pathname === item.url ? "text-blue-500" : ""}`}>
            {item.text}
          </Link>
        ))}
        {!isLoggedIn && (
          <>
            <button
              className="py-2 px-15 rounded-full border transition-colors hover:bg-blue-400 hover:text-white hover:cursor-pointer"
              onClick={() => {
                setIsLoggedIn(!isLoggedIn);
              }}
            >
              Login
            </button>
            <Link
              href="/signup"
              className="py-2 px-15 rounded-full bg-blue-300 transition-colors hover:bg-blue-400 hover:text-white"
            >
              Signup
            </Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <button
              key={"logout"}
              onClick={() => {
                setIsLoggedIn(!isLoggedIn);
              }}
               className="py-2 px-4 rounded-full border transition-colors hover:bg-blue-400 hover:text-white hover:cursor-pointer"
            >
              Logout
            </button>
            <Image
              src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
              alt={"Avatar Image"}
              width={45}
              height={45}
              className="rounded-full"
              unoptimized
            />
          </>
        )}
      </div>
    </div>
  );
}
