import { Request, Response } from 'express'
import User from '../models/User'

export const updateUser = async (req: Request, res: Response) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      res.status(200).send(user)
    } catch (error) {
      return res.status(500).json(error)
    }
  } else {
    return res.status(403).json('your account')
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id)
      res.status(200).json('user delete')
    } catch (error) {
      return res.status(500).json(error)
    }
  } else {
    return res.status(403).json('you can your account only delete')
  }
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).send(user)
  } catch (error) {
    return res.status(500).json(error)
  }
}
