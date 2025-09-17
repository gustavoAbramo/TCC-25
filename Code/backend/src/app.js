import express from 'express';  
import authRoutes from './routes/auth.routes.js';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import storageRoutes from './routes/storage.routes.js';
import itemRoutes from './routes/items.routes.js';
import EmailRoutes from './routes/email.routes.js';
import permissionRoutes from './routes/permissions.routes.js'
import userRoutes from './routes/user.routes.js'
import dishRoutes from './routes/dish.routes.js';
import chatRoutes from "./routes/chat.routes.js";
import cors from 'cors';
import historyRoutes from './routes/history.routes.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, 
}));
  
app.use(express.json());
app.use(cookieParser())
app.use('/auth', authRoutes);
app.use('/user', userRoutes)
app.use('/dishes', dishRoutes);
app.use('/storages', storageRoutes);
app.use('/storages', itemRoutes);
app.use('/permission', permissionRoutes);
app.use('/notifications', EmailRoutes);
app.use('/history', historyRoutes);
app.use('/users', userRoutes);
app.use('/reset-password', userRoutes);
app.use('/api/chat', chatRoutes);

export default app;  // Exporta o app para o server.js usar
