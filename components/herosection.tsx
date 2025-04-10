"use client";

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
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-800/10 rounded-full blur-[80px]" />
      </div>
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
