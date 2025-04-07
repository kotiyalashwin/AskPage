import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";

export default function page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center  patternDark">
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/dashboard" });
        }}
      >
        <Button>Sign in using Google </Button>
      </form>
    </div>
  );
}
