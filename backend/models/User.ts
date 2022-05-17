import { Schema, model, Types } from 'mongoose'
import bcrypt from 'bcrypt'

interface IUser {
  username: string
  email: string
  password: string
  profilePicture: string
  coverPicture: string
  followers: Types.DocumentArray<any>
  followings: Types.DocumentArray<any>
  isAdmin: boolean
  desc: string
  city: string
}

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 25,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 50,
    },
    profilePicture: {
      type: String,
      default: '',
    },
    coverPicture: {
      type: String,
      default: '',
    },
    followers: {
      type: [String],
      default: [],
    },
    followings: {
      type: [String],
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 70,
    },
    city: {
      type: String,
      max: 50,
    },
  },
  { timestamps: true }
)

export default model('User', UserSchema)
