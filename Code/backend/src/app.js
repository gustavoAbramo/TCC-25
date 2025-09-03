import express from 'express';
import authRoutes from './routes/auth.routes.js';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import storageRoutes from './routes/storage.routes.js';
import itemRoutes from './routes/items.routes.js';
import EmailRoutes from './routes/email.routes.js';
import permissionRoutes from './routes/permissions.routes.js'
import cors from 'cors';


dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, 
}));
  
app.use(express.json());
app.use(cookieParser())
app.use('/auth', authRoutes);
app.use('/storages', storageRoutes);
app.use('/storages', itemRoutes);
app.use('/permission', permissionRoutes);
app.use('/notifications', EmailRoutes);

export default app;  // Exporta o app para o server.js usar
