"use server";

import { signIn } from "@/lib/auth";
import { newUserSchema } from "@/schemas/auth";

export async function authenticate(formData: newUserSchema) {
  try {
    const session = await signIn("credentials", formData);
    return { success: true, message: "login successful" };
  } catch (err: any) {
    if (err.type === "AuthError") {
      return {
        error: { message: err.message },
      };
    }
    return { error: { message: "Failed to login", error: err } };
  }
}
