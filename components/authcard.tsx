"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignInForm from "@/components/signinform";
import SignUpForm from "@/components/signupform";
import GoogleSignIn from "@/components/googlesignin";

export default function AuthCard() {
  const [activeTab, setActiveTab] = useState<string>("signin");

  return (
    <Card className="w-full max-w-md border-violet-800 bg-gray-900 text-white shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-violet-300">
          Welcome
        </CardTitle>
        <CardDescription className="text-gray-400">
          Sign in to your account or create a new one
        </CardDescription>
      </CardHeader>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-800">
          <TabsTrigger
            value="signin"
            className="data-[state=active]:bg-violet-700 data-[state=active]:text-white"
          >
            Sign In
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="data-[state=active]:bg-violet-700 data-[state=active]:text-white"
          >
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="signin" className="mt-4">
          <SignInForm />
        </TabsContent>
        <TabsContent value="signup" className="mt-4">
          <SignUpForm />
        </TabsContent>
      </Tabs>
      <CardFooter className="flex flex-col space-y-4 pt-4 border-t border-gray-800">
        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-700" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-gray-900 px-2 text-gray-400">
              Or continue with
            </span>
          </div>
        </div>
        <GoogleSignIn />
      </CardFooter>
    </Card>
  );
}
