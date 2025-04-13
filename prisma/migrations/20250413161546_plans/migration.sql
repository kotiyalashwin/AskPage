/*
  Warnings:

  - Added the required column `planId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PlanType" AS ENUM ('Free', 'Pro', 'Premium');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "planId" TEXT NOT NULL,
ADD COLUMN     "usedRequest" INTEGER NOT NULL DEFAULT 0;

-- DropEnum
DROP TYPE "Plan";

-- CreateTable
CREATE TABLE "Plan" (
    "id" TEXT NOT NULL,
    "name" "PlanType" NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "totalRequest" INTEGER NOT NULL,
    "features" JSONB NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Plan_name_key" ON "Plan"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
