// seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding plans...");

  await prisma.plan.createMany({
    data: [
      {
        id: "plan_free",
        name: "Free",
        description: "Basic free plan",
        price: 0,
        totalRequest: 1000, // 1,000 requests/month
        features: [
          { text: "Up to 10 AI queries/month", included: true },
          { text: "Basic context understanding", included: true },
          { text: "Community access", included: true },
          { text: "1 chat saved", included: true },
          { text: "Custom AI behavior", included: false },
          { text: "Priority Gemini API quota", included: false },
        ],
      },
      {
        id: "plan_pro",
        name: "Pro",
        description: "Professional plan for growing businesses",
        price: 9.99,
        totalRequest: 10000, // 10,000 requests/month
        features: [
          { text: "Up to 100 AI queries/month", included: true },
          { text: "Enhanced context awareness", included: true },
          { text: "Smart summarization & QnA", included: true },
          {
            text: "Full browser integration",
            included: true,
          },
          { text: "5 chats saved for a month", included: true },
        ],
      },
      {
        id: "plan_premium",
        name: "Premium",
        description: "Unlimited plan for enterprise",
        price: 19.99,
        totalRequest: -1, // -1 represents unlimited
        features: [
          { text: "Unlimited AI queries", included: true },
          {
            text: "Contextual memory across tabs and sessions",
            included: true,
          },
          {
            text: "Pro summarization, translation, coding support",
            included: true,
          },
          { text: "Unlimited saved chats", included: true },
          { text: "24/7 priority support (chat + email)", included: true },
        ],
      },
    ],
    skipDuplicates: true, // Skip if plans already exist
  });

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
