/*
  Warnings:

  - Added the required column `updatedAt` to the `Lot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Paiement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Vetement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lot" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Paiement" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Vetement" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Depenses" (
    "idDepenses" TEXT NOT NULL,
    "beneficiaire" TEXT NOT NULL,
    "ordonanceur" TEXT NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Depenses_pkey" PRIMARY KEY ("idDepenses")
);
