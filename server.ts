import type { Express } from 'express'
import express from 'express'

const app: Express = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('hello express')
})

app.listen(PORT, () => console.info('start server'))
