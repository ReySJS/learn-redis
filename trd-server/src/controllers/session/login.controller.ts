// -------------------------------------------------------------------------------------------------//
// Archive: src/controllers/session/login.controller.ts
// Description: File responsible for the application's 'login'
// Data: 2022/02/24
// Author: Rey
// -------------------------------------------------------------------------------------------------//

import 'dotenv/config'
import { setRedis } from '@app/helpers/RedisClient'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import prisma from '../../prisma'

import * as JWT from '../../config/jwt'

type User = {
  id: number
  name: string
  email: string
  phone: string
  password: string
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const user: User | null = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      return res.status(401).send({ message: 'Usuário não encontrado' })
    }

    const checkPassword = bcrypt.compareSync(password, user.password)

    if (!checkPassword) {
      return res.status(401).send({ message: 'A senha informada não é válida' })
    }

    const token = JWT.sign(user, user.id)

    await setRedis(`user-${user.id}`, JSON.stringify(user))
    return res
      .status(200)
      .send({ message: `Bem-vindo ${user.name}`, token, user })
  } catch (error) {
    return res.status(500).send(error)
  }
}
