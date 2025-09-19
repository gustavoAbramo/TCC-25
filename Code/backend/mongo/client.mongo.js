import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl = process.env.DATABASE_URL_2;
const mongoDbName = process.env.MONGO_DB_NAME;

let mongoInstance;

export async function mongoClient() {
  if (!mongoInstance) {
    mongoInstance = new MongoClient(mongoUrl);
    await mongoInstance.connect();
  }
  return mongoInstance.db(mongoDbName); 
}