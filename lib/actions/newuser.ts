"use server";

import { newUserSchema } from "@/schemas/auth";
import { prisma } from "../db";
import bcrypt from "bcryptjs";

export const newUser = async (credentials: newUserSchema) => {
  try {
    const { email, password } = credentials;

    const existing = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existing) {
      return { error: { message: "User Already Exists" } };
    }
    const hshpw = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email: email,
        password: hshpw,
        provider: "Credentials",
      },
    });
  } catch {
    return { error: { message: "Something Went Wrong" } };
  }
};
