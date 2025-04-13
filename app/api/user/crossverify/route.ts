// app/api/check-session/route.ts
import { prisma } from "@/db/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json(
      { message: "Invalid email provided" },
      { status: 400 }
    );
  }

  const exists = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (exists) {
    return NextResponse.json({ exists: true }); // Or false
  } else {
    return NextResponse.json({ exists: false });
  }
}

// You can also export GET, PUT, DELETE, etc. in the same file
