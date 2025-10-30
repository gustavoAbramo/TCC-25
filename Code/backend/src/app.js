import express from 'express';  
import authRoutes from './routes/auth.routes.js';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import storageRoutes from './routes/storage.routes.js';
import itemRoutes from './routes/items.routes.js';
import EmailRoutes from './routes/email.routes.js';
import permissionRoutes from './routes/permissions.routes.js'
import userRoutes from './routes/user.routes.js'
import recipeRoutes from './routes/recipe.routes.js';
import chatRoutes from "./routes/chat.routes.js";
import cors from 'cors';
import historyRoutes from './routes/history.routes.js';
import { startSchedulers } from './utils/scheduler.js';

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
app.use('/recipes', recipeRoutes);
app.use('/storages', storageRoutes);
app.use('/storages', itemRoutes);
app.use('/permission', permissionRoutes);
app.use('/notifications', EmailRoutes);
app.use('/history', historyRoutes);
app.use('/users', userRoutes);
app.use('/reset-password', userRoutes);
app.use('/api/chat', chatRoutes);

app.get('/', (req, res) => {
    res.send('Smart Storage API is running');
});


// Caso nenhuma rota acima seja encontrada → retorna 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Rota não encontrada' });
});

// Middleware de tratamento de erros genéricos
app.use((err, req, res, next) => {
  console.error('Erro no servidor:', err.stack);
  res.status(500).json({ message: 'Erro interno no servidor' });
});


startSchedulers();

export default app;  // Exporta o app para o server.js usar
