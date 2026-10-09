/*
  Warnings:

  - You are about to drop the column `period` on the `Experience` table. All the data in the column will be lost.
  - Added the required column `startedAt` to the `Experience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "period",
ADD COLUMN     "endedAt" DATE,
ADD COLUMN     "startedAt" DATE NOT NULL;
