import express from 'express'

import authRoutes from './auth.routes.js'
import taskRoutes from './task.routes.js'

const app = express();

app.use('/auth', authRoutes)
app.use('/tasks', taskRoutes)

export default app;