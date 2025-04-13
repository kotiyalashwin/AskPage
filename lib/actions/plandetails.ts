"use server";

import { prisma } from "@/db/db";
import { auth } from "../auth";

export const planDetails = async () => {
  const session = await auth();
  const email = session?.user.email;

  if (!email) {
    console.log("no email");
  }

  const userPlanDetails = await prisma.user.findFirst({
    where: {
      email: email,
    },
    select: {
      usedRequest: true,
      plan: {
        select: {
          totalRequest: true,
          name: true,
        },
      },
    },
  });

  return userPlanDetails;
};
