-- CreateTable
CREATE TABLE "User" (
    "idUser" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "telephone" TEXT,
    "picture" TEXT,
    "photo" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("idUser")
);

-- CreateTable
CREATE TABLE "Client" (
    "idClient" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "telephone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("idClient")
);

-- CreateTable
CREATE TABLE "TypeVetement" (
    "idType" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TypeVetement_pkey" PRIMARY KEY ("idType")
);

-- CreateTable
CREATE TABLE "Lot" (
    "idLot" TEXT NOT NULL,
    "dateEntree" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateReccup" TEXT NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "solde" DOUBLE PRECISION NOT NULL,
    "statut" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lot_pkey" PRIMARY KEY ("idLot")
);

-- CreateTable
CREATE TABLE "Vetement" (
    "idVetement" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "lotId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,

    CONSTRAINT "Vetement_pkey" PRIMARY KEY ("idVetement")
);

-- CreateTable
CREATE TABLE "Paiement" (
    "idPaiement" TEXT NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "date" TEXT NOT NULL,
    "lotId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Paiement_pkey" PRIMARY KEY ("idPaiement")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lot" ADD CONSTRAINT "Lot_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("idClient") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vetement" ADD CONSTRAINT "Vetement_lotId_fkey" FOREIGN KEY ("lotId") REFERENCES "Lot"("idLot") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vetement" ADD CONSTRAINT "Vetement_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "TypeVetement"("idType") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_lotId_fkey" FOREIGN KEY ("lotId") REFERENCES "Lot"("idLot") ON DELETE RESTRICT ON UPDATE CASCADE;
