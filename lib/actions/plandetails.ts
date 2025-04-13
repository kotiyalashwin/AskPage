// actions/plan-details.ts
"use server";
import { prisma } from "@/db/db";
import { auth } from "../auth";
import { PlanDetailsSchema } from "@/schemas/plan";

export const planDetails = async () => {
  const session = await auth();
  const email = session?.user.email;

  if (!email) return null;

  const rawData = await prisma.user.findFirst({
    where: { email },
    select: {
      usedRequest: true,
      plan: {
        select: {
          totalRequest: true,
          name: true,
          features: true,
        },
      },
    },
  });

  if (!rawData) return null;

  // Transform and validate the data
  const safeData = {
    usedRequest: rawData.usedRequest,
    plan: {
      totalRequest: rawData.plan.totalRequest,
      name: rawData.plan.name,
      features: Array.isArray(rawData.plan.features)
        ? rawData.plan.features
        : [],
    },
  };

  // Validate with Zod
  const result = PlanDetailsSchema.safeParse(safeData);

  if (!result.success) {
    console.error("Validation failed:", result.error);
    return null;
  }

  return result.data;
};
