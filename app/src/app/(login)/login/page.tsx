"use client";
import { useState,} from "react";
import { useRouter } from "next/navigation";
import { doCredentialLogin } from "../../actions/index";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  
  async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const response = await doCredentialLogin(formData);

      if(response?.error){
        setError("Login Failed. Please use valid credentials.");
      } else {
        router.push("/");
      }
    } catch (e: any) {
      setError(e.message || "An unknown error occurred");
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-2xl text-blue-500 absolute top-0 left-0 p-2 mt-1">
        <Link href="/">NextFlight</Link>
      </h1>
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center border border-gray-200 p-5 rounded-lg shadow-md">
          <h1 className="text-2xl text-blue-500">Login</h1>
          <form className="flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" className="border p-2 rounded" />
            <input type="password" name="password" placeholder="Password" className="border p-2 rounded" />
            <button type="submit" className="bg-blue-300 py-2 px-4 rounded-full hover:cursor-pointer">Login</button>
          </form>
          {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
          <p className="mt-4 text-sm">Don&apos;t have an account? <a href="/signup" className="text-blue-500">Signup</a></p>
        </div>
      </div>
    </div>
  );
}