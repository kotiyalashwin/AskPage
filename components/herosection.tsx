"use client";

import { usePatternClass } from "@/hooks/patternclass";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "motion/react";
export const HeroSection = ({ getPattern }: { getPattern(): string }) => {
  const pattern = getPattern();

  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`${pattern} w-full h-[90vh]`}
    >
      <div className="h-full justify-center container relative z-10 flex flex-col items-center text-center">
        <motion.h1 className="text-6xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 max-w-4xl ">
          Read Pages faster.Get summaries instantly
        </motion.h1>
        <h1 className="text-neutral-400 mb-6 md:text-xl">
          AI powered extention for scrapping textual information
        </h1>
        <Button className="bg-violet-600 text-white hover:bg-violet-800">
          <Link href={"signup"}>Get Started</Link>
        </Button>
      </div>
    </motion.section>
  );
};
