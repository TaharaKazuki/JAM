import { Request, Response } from 'express'
import User from '../models/User'
import bcrypt from 'bcrypt'

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body
  try {
    const user = await User.create({
      username,
      email,
      password,
    })

    return res.status(201).json({
      success: true,
      user,
    })
  } catch (err) {
    return res.status(500).json(err)
  }
}

export const loginUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(404).send('not find user')

    if (!(await bcrypt.compare(req.body.password, user.password)))
      return res.status(400).json('different password')

    return res.status(200).send(user)
  } catch (err) {
    return res.status(500).json(err)
  }
}
