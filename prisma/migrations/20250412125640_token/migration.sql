/*
  Warnings:

  - A unique constraint covering the columns `[platformToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_platformToken_key" ON "User"("platformToken");
