-- CreateTable
CREATE TABLE "Chats" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "savedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "history" JSONB NOT NULL,

    CONSTRAINT "Chats_pkey" PRIMARY KEY ("id")
);
