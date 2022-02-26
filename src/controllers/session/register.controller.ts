// -------------------------------------------------------------------------------------------------//
// Archive: src/controllers/session/register.controller.ts
// Description: File responsible for the application's 'register'
// Data: 2022/02/24
// Author: Rey
// -------------------------------------------------------------------------------------------------//

import { setRedis } from '@app/helpers/RedisClient'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import prisma from '../../prisma'
import { userValidation } from '../../validations/user'

export const register = async (req: Request, res: Response) => {
  const user: {
    name: string
    email: string
    phone: string
    type: 'USER' | 'ADMIN'
  } = req.body

  const password = await bcrypt.hash(req.body.password, 10)

  try {
    const error = await userValidation(user)

    if (error) {
      return res.status(error.status).send(error.message)
    }

    await prisma.user.create({
      data: { ...user, password },
    })

    const users = await prisma.user.findMany({})
    await setRedis(`users`, JSON.stringify(users))

    return res.status(200).send('Novo usuário cadastrado com sucesso')
  } catch (err: any) {
    console.log(err)

    return res.status(422).send('Não foi possível processar sua solicitação')
  }
}
