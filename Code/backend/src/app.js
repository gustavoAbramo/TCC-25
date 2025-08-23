import express from 'express';
import authRoutes from './routes/auth.routes.js';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use('/auth', authRoutes);

export default app;  // Exporta o app para o server.js usar
