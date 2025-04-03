import { BookOpen } from "lucide-react";
import { ModeToggle } from "./toggle-theme";
import { Button } from "./ui/button";
import Link from "next/link";

export const Appbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/50 backdrop-blur-sm w-full border-b">
      <div className="container flex justify-between p-4 items-center">
        <div className="flex  items-center">
          <BookOpen size={30} /> <span className="ml-4">AskPage.Ai</span>
        </div>

        <nav className="hidden md:flex space-x-4 items-center">
          <Link className="hover:text-violet-600" href={"#working"}>
            How It Works
          </Link>
          <Link className="hover:text-violet-600" href={"#features"}>
            Features
          </Link>
        </nav>

        <div className="flex space-x-4">
          <div className="space-x-4">
            <Button
              variant={"outline"}
              className="border-violet-600 bg-transparent border-2  hover:bg-background"
            >
              Login
            </Button>
            <Button className="bg-violet-600 text-white hover:bg-violet-800">
              Get Extention
            </Button>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
