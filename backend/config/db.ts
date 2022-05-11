import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOOSE!)
    console.info(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    )
  } catch (e) {
    console.error(e)
  }
}

export default connectDB
