'use server'

import { signIn, signOut } from "../auth";

export async function doLogout () {
    await signOut({ redirectTo: "/" });
}

export async function doCredentialLogin (formData: FormData) : Promise<unknown> {

    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
        const response = await signIn("credentials", {
            username,
            password,
            redirect: false,
        });
        return response;
    } catch (err : unknown) {
        if (err instanceof Error) {
            return {error: { message: err.message } };
        } else {
            return {error: { message: "Login failed." } };
        }
    }
}