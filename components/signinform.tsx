"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent } from "@/components/ui/card";

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = () => {};
  return (
    <CardContent className="space-y-4">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-300">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            required
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-gray-300">
              Password
            </Label>
            <Button
              variant="link"
              className="px-0 text-sm text-violet-400 hover:text-violet-300"
            >
              Forgot password?
            </Button>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            required
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-violet-700 hover:bg-violet-600 text-white"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>
      </form>
    </CardContent>
  );
}
