import z from "zod";

export const CredentialSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type newUserSchema = z.infer<typeof CredentialSchema>;
