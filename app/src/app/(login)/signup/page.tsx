"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  
  async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const username = formData.get("username") as string | null;
      const email = formData.get("email") as string | null;
      const password = formData.get("password") as string | null;

      if (!username || !email || !password) {
        throw new Error("All fields are required");
      }
      const response = await doCredentialLogin(formData);

      if (response?.error) {
        console.error(response.error);
        setError(response.error.message || "An error occurred");
      } else {
        router.push("/");
      }
    } catch (e: any) {
      console.error(e);
      setError(e.message || "An error occurred");
    }
  };
  
  function setError(err: any) {
    throw new Error(err);
  }
  
  
    return (
      <div className="min-h-screen flex flex-col">
        <h1 className="text-2xl text-blue-500 absolute top-0 left-0 p-2 mt-1"><a href="/">NextFlight</a></h1>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center border border-gray-200 p-5 rounded-lg shadow-md">
            <h1 className="text-2xl text-blue-500">Signup</h1>
            <form className="flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
              <input type="text" name="username" placeholder="Username" className="border p-2 rounded" />
              <input type="email" name="email" placeholder="Email" className="border p-2 rounded" />
              <input type="password" name="password" placeholder="Password" className="border p-2 rounded" />
              <button type="submit" className="bg-blue-300 py-2 px-4 rounded-full hover:cursor-pointer">Login</button>
            </form>
            <p className="mt-4 text-sm">Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
          </div>
        </div>
      </div>
    );
  }