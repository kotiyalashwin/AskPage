"use client";

import { usePatternClass } from "@/hooks/patternclass";
import { Button } from "./ui/button";
import Link from "next/link";

export const HeroSection = () => {
  const pattern = usePatternClass();

  return (
    <section className={`${pattern} w-full h-[90vh]`}>
      <div className="h-full justify-center container relative z-10 flex flex-col items-center text-center">
        <h1 className="text-6xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 max-w-4xl ">
          Read Pages faster.Get summaries instantly
        </h1>
        <h1 className="text-neutral-400 mb-6 md:text-xl">
          AI powered extention for scrapping textual information
        </h1>
        <Button className="bg-violet-600 text-white hover:bg-violet-800">
          <Link href={"signup"}>Get Started</Link>
        </Button>
      </div>
    </section>
  );
};
