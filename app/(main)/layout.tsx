import { Appbar } from "@/components/appbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Appbar />
      {children}
    </>
  );
}
