"use server";

import { signIn, signOut } from "../auth";

interface loginInfo {
  username: string;
  password: string;
}

export async function logout() {
  await signOut({ redirectTo: "/" });
}

export async function login(data: loginInfo): Promise<any> {
  try {
    const response = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });
    return response;
  } catch (err: any) {
    return {error: { message: err.message || "Login failed." } };
  }
}
