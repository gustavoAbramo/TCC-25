/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Users" (
    "idUser" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Estacionamentos" (
    "id_estacionamento" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "qtd_vagas" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Vagas" (
    "id_vaga" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_estacionamento" INTEGER NOT NULL,
    "status_vaga" TEXT NOT NULL,
    CONSTRAINT "Vagas_id_estacionamento_fkey" FOREIGN KEY ("id_estacionamento") REFERENCES "Estacionamentos" ("id_estacionamento") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pagamentos" (
    "idUser" INTEGER NOT NULL,
    "id_vaga" INTEGER NOT NULL,
    "id_pagamento" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_inicio" DATETIME NOT NULL,
    "data_fim" DATETIME NOT NULL,
    "valor" REAL NOT NULL,
    "status_pagamento" TEXT NOT NULL,
    CONSTRAINT "Pagamentos_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "Users" ("idUser") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pagamentos_id_vaga_fkey" FOREIGN KEY ("id_vaga") REFERENCES "Vagas" ("id_vaga") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
