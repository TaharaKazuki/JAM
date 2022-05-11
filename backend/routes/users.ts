import { Router } from 'express'
import User from '../models/User'
const router = Router()

router.get('/user', async (req, res) => {
  return res.status(200).json(res)
})

export default router
