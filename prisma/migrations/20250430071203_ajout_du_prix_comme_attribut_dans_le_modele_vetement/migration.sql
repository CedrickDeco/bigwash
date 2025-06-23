/*
  Warnings:

  - Added the required column `prix` to the `Vetement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vetement" ADD COLUMN     "prix" DOUBLE PRECISION NOT NULL;
