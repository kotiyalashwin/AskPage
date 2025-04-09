"use client";

import AuthCard from "@/components/authcard";
import InputForm from "@/components/input";
import { VioletButton } from "@/components/violetButton";
import { newUser } from "@/lib/actions/newuser";
import { signIn } from "@/lib/auth";
import { CredentialSchema, newUserSchema } from "@/schemas/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

export default function page() {
  const router = useRouter();
  const email = React.useRef("");
  const password = React.useRef("");
  const [requiredError, setRequiredError] = React.useState({
    email: false,
    password: false,
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    email.current = e.target.value;
    setRequiredError((prev) => ({ ...prev, email: false }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    password.current = e.target.value;
    setRequiredError((prev) => ({ ...prev, password: false }));
  };

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    try {
      if (e) e.preventDefault();

      if (!email.current || !password.current) {
        // toast.dismiss(toastId);
        setRequiredError({
          email: email.current ? false : true,
          password: password.current ? false : true,
        });
        toast.warning("Fill required fields");
        return;
      }
      const toastId = toast.loading("Signing Up");

      const formData = { email: email.current, password: password.current };

      const { success, error } = CredentialSchema.safeParse(formData);
      if (!success) {
        toast.dismiss(toastId);
        toast.error("Enter Valid Email and Password");

        return;
      }
      const res = await newUser(formData);
      toast.dismiss(toastId);

      if (res?.error) {
        toast.error(res.error.message);
        return;
      }
      toast.success("Account Created Successfully");

      router.push("/dashboard");
    } catch {
      toast.error("Something Went Wrong");
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center  patternDark">
      <AuthCard title="Welcome to AskPage.AI">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <InputForm
            onChange={handleEmailChange}
            required={requiredError.email}
            name="email"
            placeholder="xyz@gmail.com"
            label="Email"
          />
          <InputForm
            onChange={handlePasswordChange}
            required={requiredError.password}
            name="password"
            placeholder="123456"
            label="Password"
          />
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
