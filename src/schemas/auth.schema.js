import { z } from 'zod'

export const registerSchema = z.object({
  username:
    z.string({ required_error: "El campo username es requerido." }),
  email:
    z.string({ required_error: "El campo email es requerido." })
      .email({ required_error: "El email no es válido." }),
  password:
    z.string({ required_error: "El campo password es requerido." })
      .min(8, { message: "La contraseña debe tener un mínimo de 8 caracteres." }),
})

export const loginSchema = z.object({
  email:
    z.string({ required_error: "El campo email es requerido." })
      .email({ required_error: "El email no es válido." }),
  password:
    z.string({ required_error: "El campo password es requerido." })
      .min(8, { message: "La contraseña debe tener un mínimo de 8 caracteres." }),
})