"use client";

import AuthCard from "@/components/authcard";
import InputForm from "@/components/input";
import { toast } from "sonner";
import { VioletButton } from "@/components/violetButton";
import { signIn } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import { authenticate } from "@/lib/actions/authenticate";
// import { useRouter } from "next/navigation";

export default function page() {
  // const router = useRouter();
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
    const loadId = toast.loading("Signin In");
    if (e) {
      e.preventDefault();
    }

    const res = await authenticate({
      email: email.current,
      password: password.current,
    });
    toast.dismiss(loadId);
    if (res.error) {
      toast.warning(res.error.message);
      return;
    }
    toast.success("Signed IN");

    // const sigininResponse = await signIn("credentials", {
    //   email: email.current,
    //   password: password.current,
    //   redirect: false,
    // });
    // console.log("SignIN Responsea", sigininResponse);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center  patternDark">
      <AuthCard title="Welcome Back!!">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <InputForm
            name="email"
            placeholder="xyz@gmail.com"
            label="Email"
            onChange={handleEmailChange}
            required={requiredError.email}
          />
          <InputForm
            name="password"
            placeholder="123456"
            label="Password"
            onChange={handlePasswordChange}
            required={requiredError.password}
          />
          <VioletButton type={"submit"}>Sign In</VioletButton>
          <p className="text-center text-violet-400">
            New User?{" "}
            <Link href={"/signup"} className="underline">
              SignUp{" "}
            </Link>
          </p>
        </form>
      </AuthCard>
    </div>
  );
}
