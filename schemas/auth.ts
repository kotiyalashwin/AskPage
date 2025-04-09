import z from "zod";

export const CredentialSchema = z.object({
  email: z.string().email({ message: "Enter a valid Email" }),
  password: z.string().min(6, { message: "Min length 6" }),
});

export type newUserSchema = z.infer<typeof CredentialSchema>;
