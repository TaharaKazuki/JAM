import { Request, Response } from 'express'
import User from '../models/User'
import bcrypt from 'bcrypt'

export const createUser = async (req: Request, res: Response) => {
  try {
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
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

    if (!(await bcrypt.compare(req.body.password, user.password)))
      return res.status(400).json('different password')

    return res.status(200).send(user)
  } catch (err) {
    return res.status(500).json(err)
  }
}
