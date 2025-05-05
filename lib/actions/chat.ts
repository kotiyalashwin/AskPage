import { prisma } from "@/db/db";
import { auth } from "../auth";
import { Prisma } from "@prisma/client";

type JsonValue = Prisma.JsonValue;

interface Chat {
  text: string;
  isUser: boolean;
  timeStamp: string;
}

export const SavedChats = async (): Promise<Chat[][]> => {
  try {
    const session = await auth();
    const userEmail = session?.user.email;

    const savedChats = await prisma.chats.findMany({
      where: {
        usermail: userEmail,
      },
      select: {
        history: true,
      },
    });

    const groupedMessages = savedChats.map(
      (row) => row.history as unknown as Chat[]
    );

    return groupedMessages;
  } catch (err) {
    console.error("Error fetching chats:", err);
    return [];
  }
};
