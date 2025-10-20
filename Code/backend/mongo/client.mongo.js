import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl = process.env.DATABASE_URL_2;
const mongoDbName = process.env.MONGO_DB_NAME;

let mongoInstance;

export async function mongoClient() {
  if (!mongoInstance) {
    try {
      // verifica se a conexão é local (ex: mongodb://localhost:27017)
      const isLocal = mongoUrl.includes("localhost") || mongoUrl.includes("127.0.0.1");

      mongoInstance = new MongoClient(mongoUrl, isLocal ? {} : {
        tls: true,
        authMechanism: "SCRAM-SHA-256",
      });

      await mongoInstance.connect();
      console.log(`✅ Conectado ao MongoDB (${isLocal ? "local" : "Azure"})!`);
    } catch (error) {
      console.error("❌ Erro ao conectar ao MongoDB:", error);
      throw error;
    }
  }

  return mongoInstance.db(mongoDbName);
}
