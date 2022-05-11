import type { Express } from 'express'
import express from 'express'
import useRouter from './routes/users'

const app: Express = express()
const PORT = 3000

app.use('/api/users', useRouter)

app.listen(PORT, () => console.info('start server'))
