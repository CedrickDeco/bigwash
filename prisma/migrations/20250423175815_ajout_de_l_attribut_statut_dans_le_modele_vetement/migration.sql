/*
  Warnings:

  - Added the required column `statut` to the `Vetement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vetement" ADD COLUMN     "statut" TEXT NOT NULL;
