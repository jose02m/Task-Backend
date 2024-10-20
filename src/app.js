import express from 'express';
import authRoutes from './routes/auth.routes.js'

const app = express();

export default app;

app.use(express.json());
app.use('/api', authRoutes);