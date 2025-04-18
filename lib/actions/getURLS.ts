"use server";

import { prisma } from "@/db/db";
import { auth } from "../auth";

export const getUrlHistory = async () => {
  try {
    const session = await auth();
    const userId = session?.user.id;

    const urlsHistory = await prisma.uRLS.findMany({
      where: {
        userId: Number(userId),
      },
      select: {
        status: true,
        url: true,
        id: true,
      },
    });

    console.log(urlsHistory);
    return urlsHistory;
  } catch (e) {
    console.log(e);
    return [];
  }
};
