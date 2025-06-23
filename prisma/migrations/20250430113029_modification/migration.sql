/*
  Warnings:

  - You are about to drop the column `prix` on the `Vetement` table. All the data in the column will be lost.
  - Added the required column `prix` to the `TypeVetement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TypeVetement" ADD COLUMN     "prix" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Vetement" DROP COLUMN "prix";
