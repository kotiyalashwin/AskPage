/*
  Warnings:

  - You are about to drop the column `userId` on the `Chats` table. All the data in the column will be lost.
  - Added the required column `usermail` to the `Chats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chats" DROP COLUMN "userId",
ADD COLUMN     "usermail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_usermail_fkey" FOREIGN KEY ("usermail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
