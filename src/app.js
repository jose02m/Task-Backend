import express from 'express';
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'
import routes from './routes/routes.js'
import cookieParser from 'cookie-parser'

const app = express();

export default app;

app.use(express.json());
app.use(cookieParser());

// app.use('/api', authRoutes);
// app.use('/api', taskRoutes);

app.use('/api', routes)