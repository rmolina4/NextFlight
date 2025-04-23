"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function NavBar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const isLoggedIn = !!session?.user;

  const main = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Search",
      url: "/search",
    },
    {
      text: "Flights",
      url: "/flights",
    },
  ];

  return (
    <div className="flex w-full justify-between bg-white text-sm sm:text-base">
      <h1 className="text-xl sm:text-2xl text-blue-500 my-2 pl-2">
        NextFlight
      </h1>
      <div className="flex gap-4 items-center pr-2">
        {main.map((item) => (
          <Link
            href={item.url}
            key={item.url}
            className={`py-2 px-2 sm:px-4 hover:text-blue-500 transition-colors ${
              pathname === item.url ? "text-blue-500" : ""
            }`}
          >
            {item.text}
          </Link>
        ))}
        {!isLoggedIn && (
          <>
            <Link
              className="py-2 px-15 rounded-full border transition-colors hover:bg-blue-400 hover:text-white hover:cursor-pointer"
              href="/login"
            >
              Login
            </Link>
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
              onClick={() => signOut({ callbackUrl: "/" })}
              className="py-2 px-4 rounded-full border transition-colors hover:bg-blue-400 hover:text-white hover:cursor-pointer"
            >
              Logout
            </button>
            <span className="text-sm">Hello {session.user?.name}</span>
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
