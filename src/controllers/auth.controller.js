import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js'

export const register = async (req, res) => {
  const { email, password, username } = req.body

  try {
    const passwordEncrypted = await bcrypt.hash(password, 10)

    const newUser = new User({
      username,
      email,
      password: passwordEncrypted
    })

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id })

    res.cookie('token', token)

    res.json({
      id: userSaved._id,
      email: userSaved.email,
      username: userSaved.username
    })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body

  try {

    const userExist = await User.findOne({ email })

    if (!userExist) return res.status(400).json({ message: "Credenciales incorrectas." })

    const validatePassword = await bcrypt.compare(password, userExist.password)

    if (!validatePassword) return res.status(400).json({ message: "Credenciales incorrectas." })

    const token = await createAccessToken({ id: userExist._id })

    res.cookie('token', token)

    res.json({
      id: userExist._id,
      email: userExist.email,
      username: userExist.username
    })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const logout = (req, res) => {
  res.cookie('token', "", {
    expires: new Date(0)
  })
  return res.sendStatus(200)
}

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id)

  if (!userFound) return res.status(400).json({ message: "Usuario no encontrado." })
  
  return res.json({
    id: userFound._id
  })
}