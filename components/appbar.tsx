import { BookOpen } from "lucide-react";
import { ModeToggle } from "./toggle-theme";
import { Button } from "./ui/button";
import Link from "next/link";
import { auth, signOut } from "@/lib/auth";
import { VioletButton } from "./violetButton";

export const Appbar = async () => {
  const session = await auth();
  return (
    <header className="sticky top-0 z-50 bg-background/50 backdrop-blur-sm w-full border-b">
      <div className="container flex justify-between p-4 items-center">
        <div className="flex  items-center">
          <BookOpen size={30} />{" "}
          <Link href={""} className="ml-4 cursor-pointer">
            AskPage.Ai
          </Link>
        </div>

        <nav className="hidden md:flex space-x-4 items-center justify-evenly">
          <Link className="hover:text-violet-600" href={"#working"}>
            Working
          </Link>

          <Link
            className="hover:text-violet-600"
            href={"#features"}
            // scroll={false}
          >
            Features
          </Link>
          <Link
            className="hover:text-violet-600"
            href={"#pricing"}
            // scroll={false}
          >
            Pricing
          </Link>
        </nav>

        <div className="flex space-x-4 items-center">
          {session ? (
            <>
              <VioletButton>
                <Link href={"/dashboard"}>Profile</Link>
              </VioletButton>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <Button
                  type="submit"
                  variant={"outline"}
                  className="border-violet-600 bg-transparent border-2  hover:bg-background"
                >
                  Logout
                </Button>
              </form>
            </>
          ) : (
            <div className="flex space-x-4">
              <Button
                type="submit"
                variant={"outline"}
                className="border-violet-600 bg-transparent border-2  hover:bg-background"
              >
                <Link href={"/login"}>Login</Link>
              </Button>

              <VioletButton className="hidden md:block">
                Get Extention
              </VioletButton>

              {/* <Button className="hidden md:block bg-violet-600 text-white hover:bg-violet-800">
                Get Extention
              </Button> */}
            </div>
          )}

          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
