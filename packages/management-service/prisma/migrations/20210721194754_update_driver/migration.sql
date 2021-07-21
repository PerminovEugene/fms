/*
  Warnings:

  - You are about to drop the column `status` on the `Driver` table. All the data in the column will be lost.
  - Added the required column `expirienceYears` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" DROP COLUMN "status",
ADD COLUMN     "expirienceYears" INTEGER NOT NULL,
ADD COLUMN     "mechanicalSkill" BOOLEAN NOT NULL DEFAULT false;
