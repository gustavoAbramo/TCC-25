import { PrismaClient } from './client/index.js'; // Ajuste o caminho conforme necessário
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

const mongoUrl = process.env.DATABASE_URL_2;
const mongoClient = new MongoClient(mongoUrl);

export {prisma, mongoClient};                                                                                                                                     