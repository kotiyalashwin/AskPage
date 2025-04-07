import { Appbar } from "@/components/appbar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessiion = await auth();

  if (!sessiion?.user) {
    redirect("/api/auth/signin");
  } else {
    return (
      <>
        <Appbar />
        {children}
      </>
    );
  }
}
