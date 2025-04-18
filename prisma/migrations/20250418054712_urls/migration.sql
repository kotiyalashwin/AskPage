-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Success', 'Failed');

-- CreateTable
CREATE TABLE "URLS" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "URLS_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "URLS" ADD CONSTRAINT "URLS_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
