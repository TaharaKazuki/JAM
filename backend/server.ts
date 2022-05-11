import type { Express } from 'express'
import express from 'express'
import { config } from 'dotenv'
import mongoose from 'mongoose'
import useRouter from './routes/users'
import authRouter from './routes/auth'
import postsRouter from './routes/posts'

config()
mongoose.connect(process.env.MONGOOSE!)

const app: Express = express()
const PORT = 3000

app.use('/api/users', useRouter)
app.use('api/auth', authRouter)
app.use('api/posts', postsRouter)

app.listen(PORT, () => console.info('start server'))
