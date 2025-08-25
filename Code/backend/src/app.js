import express from 'express';
import authRoutes from './routes/auth.routes.js';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import storageRoutes from './routes/storage.routes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use('/auth', authRoutes);
app.use('/storages', storageRoutes)

export default app;  // Exporta o app para o server.js usar
