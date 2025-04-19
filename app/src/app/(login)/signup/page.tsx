"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Signup() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, []);

  const [usernameInput, setUsernameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsernameInput(e.target.value);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmailInput(e.target.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPasswordInput(e.target.value);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-2xl text-blue-500 absolute top-0 left-0 p-2 mt-1">
        <a href="/">NextFlight</a>
      </h1>
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center border border-gray-200 p-5 rounded-lg shadow-md">
          <h1 className="text-2xl text-blue-500">Signup</h1>
          <form className="flex flex-col gap-4 mt-5">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="border p-2 rounded"
              onChange={handleUsernameChange}
              value={usernameInput}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border p-2 rounded"
              onChange={handleEmailChange}
              value={emailInput}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border p-2 rounded"
              onChange={handlePasswordChange}
              value={passwordInput}
            />
            <button
              type="submit"
              className="bg-blue-300 py-2 px-4 rounded-full hover:cursor-pointer"
              onClick={async (e: React.FormEvent) => {
                e.preventDefault();
                const res = await fetch("http://localhost:3000/api/signup", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    username: usernameInput,
                    email: emailInput,
                    password: passwordInput,
                  }),
                });
                const data = await res.json();

                if (res.status != 201) {
                  setError(data);
                } else {
                  router.push("/");
                }
              }}
            >
              Signup
            </button>
          </form>
          {error && (
            <div className="text-red-600 bg-red-100 p-2 rounded border border-red-300">
              {error}
            </div>
          )}
          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
