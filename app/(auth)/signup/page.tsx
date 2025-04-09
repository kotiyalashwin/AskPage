"use client";

import AuthCard from "@/components/authcard";
import InputForm from "@/components/input";
import { VioletButton } from "@/components/violetButton";
import { newUser } from "@/lib/actions/newuser";
import { signIn } from "@/lib/auth";
import { CredentialSchema, newUserSchema } from "@/schemas/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function page() {
  const router = useRouter();

  const handleSubmit = async (
    formData: newUserSchema,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    try {
      e.preventDefault();

      const toastId = toast.loading("Signing Up");
      const { success } = CredentialSchema.safeParse(formData);
      console.log();
      if (!success) {
        toast.dismiss(toastId);
        toast.error("Wrong Inputs");
        return;
      }
      const res = await newUser(formData);

      if (res?.error) {
        toast.dismiss(toastId);
        toast.error(res.error.message);
      } else {
        toast.success("Account Created Successfully");
      }

      // router.push("/dashboard");
    } catch {
      toast.error("Something Went Wrong");
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center  patternDark">
      <AuthCard title="Welcome to AskPage.AI">
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) =>
            handleSubmit(
              {
                email: "test1@gmail.com",
                password: "",
              },
              e
            )
          }
        >
          <InputForm name="email" placeholder="xyz@gmail.com" label="Email" />
          <InputForm name="password" placeholder="123456" label="Password" />
          <VioletButton type={"submit"}>Sign Up</VioletButton>
          <p className="text-center text-violet-400">
            Existing User?{" "}
            <Link href={"/login"} className="underline">
              SignIn
            </Link>
          </p>
        </form>
      </AuthCard>
    </div>
  );
}
