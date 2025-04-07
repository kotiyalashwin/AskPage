import z from "zod";

export const CredentialSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  password: z.string(),
});
