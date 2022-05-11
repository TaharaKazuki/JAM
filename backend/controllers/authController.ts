import { Request, Response } from 'express'
import User from '../models/User'

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })

    const user = await newUser.save()
    return res.status(200).json(user)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export const loginUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(404).send('not find user')

    const validPassword = req.body.password === user.password
    if (!validPassword) return res.status(400).json('different password')

    return res.status(200).json(user)
  } catch (err) {
    return res.status(500).json(err)
  }
}
