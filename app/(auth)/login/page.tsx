import AuthCard from "@/components/authcard";
import InputForm from "@/components/input";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VioletButton } from "@/components/violetButton";
import { signIn } from "@/lib/auth";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center  patternDark">
      <AuthCard title="Welcome Back!!">
        <form
          className="flex flex-col gap-4"
          action={async (formData) => {
            "use server";
            await signIn("credentials", formData);
          }}
        >
          <InputForm name="email" placeholder="xyz@gmail.com" label="Email" />
          <InputForm name="password" placeholder="123456" label="Password" />
          <VioletButton>Sign In</VioletButton>
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
