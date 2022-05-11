import type { Express } from 'express'
import express from 'express'
import colors from 'colors'
import { config } from 'dotenv'
import connectDB from './config/db'

import useRouter from './routes/users'
import authRouter from './routes/auth'
import postsRouter from './routes/posts'

colors.setTheme({})
config()
connectDB()

const app: Express = express()
const PORT = 3000

app.use(express.json())
app.use('/api/users', useRouter)
app.use('/api/auth', authRouter)
app.use('/api/posts', postsRouter)

app.listen(PORT, () => console.info('start server'))
