import {
  ArrowRight,
  BarChart,
  Code,
  Download,
  FileQuestion,
  Lock,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const WorkingSection = () => {
  return (
    <section
      id="working"
      className="w-full h-screen  bg-background  py-20  text-foreground relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-800/10 rounded-full blur-[80px]" />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-600 dark:text-violet-400">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              Our Process
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500 dark:from-white dark:to-violet-400">
              How It Works
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              Not everyone wants to read everything.Saving time with streamline
              process
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 relative">
          {/* Connecting line */}
          <div className="absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-violet-600/0 via-violet-600 to-violet-600/0 hidden md:block" />

          {/* Step 1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl blur-sm opacity-30 dark:opacity-50 group-hover:opacity-50 dark:group-hover:opacity-100 transition-all duration-500 -m-1"></div>
            <div className="relative flex flex-col h-full bg-card border border-violet-500/20 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-[-5px] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]">
              <div className="flex justify-between items-start mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] dark:shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                  <span className="text-xl font-bold">01</span>
                </div>
                <Download className="h-10 w-10 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                Install
              </h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Get started in seconds by adding extention to your browser
              </p>
              {/* <div className="flex items-center text-violet-600 dark:text-violet-400 font-medium">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div> */}
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative md:mt-16">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl blur-sm opacity-30 dark:opacity-50 group-hover:opacity-50 dark:group-hover:opacity-100 transition-all duration-500 -m-1"></div>
            <div className="relative flex flex-col h-full bg-card border border-violet-500/20 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-[-5px] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]">
              <div className="flex justify-between items-start mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] dark:shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                  <span className="text-xl font-bold">02</span>
                </div>
                <Lock className="h-10 w-10 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                SignIn
              </h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                SignIn to your account to get access.
              </p>
              {/* <div className="flex items-center text-violet-600 dark:text-violet-400 font-medium">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div> */}
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl blur-sm opacity-30 dark:opacity-50 group-hover:opacity-50 dark:group-hover:opacity-100 transition-all duration-500 -m-1"></div>
            <div className="relative flex flex-col h-full bg-card border border-violet-500/20 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-[-5px] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]">
              <div className="flex justify-between items-start mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] dark:shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                  <span className="text-xl font-bold">03</span>
                </div>
                <FileQuestion className="h-10 w-10 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Ask</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Ask questions related to you webpage using the chat interface
              </p>
              {/* <div className="flex items-center text-violet-600 dark:text-violet-400 font-medium">
                <span>See Results</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
