import React from "react";
import { Button } from "./ui/button";

export const VioletButton = ({
  className,
  children,
  variant,
  type,
}: {
  className?: string;
  children: React.ReactNode;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  type?: "button" | "reset" | "submit" | undefined;
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      className={`${className} bg-violet-600 text-white hover:bg-violet-800`}
    >
      {children}
    </Button>
  );
};
