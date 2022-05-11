import { Router } from 'express'
import User from '../models/User'
const router = Router()

router.post('/register', async (req, res) => {
  console.info('通貨')
  try {
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })

    const user = await newUser.save()
    return res.status(200).json(user)
  } catch (err) {
    return res.status(500).json(err)
  }
})

export default router
