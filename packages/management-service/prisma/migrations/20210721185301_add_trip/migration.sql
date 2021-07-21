/*
  Warnings:

  - Added the required column `model` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "model" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Trip" (
    "id" SERIAL NOT NULL,
    "driverId" INTEGER NOT NULL,
    "vehicleId" INTEGER NOT NULL,
    "start" TIMESTAMP NOT NULL,
    "end" TIMESTAMP NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trip" ADD FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
