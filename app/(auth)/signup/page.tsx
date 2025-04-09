import AuthCard from "@/components/authcard";
import InputForm from "@/components/input";
import { Button } from "@/components/ui/button";
import { VioletButton } from "@/components/violetButton";
import { signIn } from "@/lib/auth";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center  patternDark">
      <AuthCard title="Welcome to AskPage.AI">
        <form
          className="flex flex-col gap-4"
          action={async (formData) => {
            "use server";
            await signIn("credentials", formData);
          }}
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
