/*
  Warnings:

  - Added the required column `platformToken` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Plan" AS ENUM ('Free', 'Pro', 'Premium');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "platformToken" TEXT NOT NULL;
