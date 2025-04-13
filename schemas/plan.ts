import { z } from "zod";

export const FeatureSchema = z.object({
  text: z.string().default(""),
  included: z.boolean(),
});

export const PlanDetailsSchema = z.object({
  usedRequest: z.number(),
  plan: z.object({
    totalRequest: z.number(),
    name: z.string(),
    features: z.array(FeatureSchema).default([]), // Ensures array format
  }),
});

export type PlanDetails = z.infer<typeof PlanDetailsSchema>;

export type FeaturesAll = z.infer<typeof FeatureSchema>;
