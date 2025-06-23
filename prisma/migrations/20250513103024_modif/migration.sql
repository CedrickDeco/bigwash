/*
  Warnings:

  - Added the required column `raison` to the `Depenses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Depenses" ADD COLUMN     "raison" TEXT NOT NULL;
