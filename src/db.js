import mongoose from 'mongoose'

export const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost/tasks_mern")
    console.log(">>> Database is connected.")
  } catch (error) {
    console.log(error)
  }
}