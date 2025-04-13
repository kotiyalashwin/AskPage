import { prisma } from "@/db/db";

export const getPlans = async () => {
  try {
    const plansDB = await prisma.plan.findMany();
    const retutnPlans = plansDB.map((el, i) => {
      if (i == 1) {
        return { ...el, popular: true };
      } else {
        return { ...el, popular: false };
      }
    });

    return retutnPlans;
  } catch {
    return [];
  }
};
