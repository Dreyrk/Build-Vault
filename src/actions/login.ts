"use server";

import { signIn } from "../../auth";
import { AuthError } from "next-auth";

export async function login(prevState: string | undefined, formData: FormData) {
  try {
  } catch (e) {
    if (e instanceof AuthError) {
      switch (e.type) {
        case "CredentialsSignin":
          return "Invalid Credentials";
        default:
          return "Something went wrong";
      }
    }
    throw e;
  }
}
