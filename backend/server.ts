import type { Express } from 'express'
import express from 'express'
import colors from 'colors'
import { config } from 'dotenv'
import connectDB from './config/db'

import authRouter from './routes/auth'

colors.setTheme({})
config()
connectDB()

const app: Express = express()
const PORT = 3000

app.use(express.json())
app.use('/api', authRouter)

app.listen(PORT, () => console.info('start server'))
