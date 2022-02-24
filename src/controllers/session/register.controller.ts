//-------------------------------------------------------------------------------------------------//
// Archive: src/controllers/session/register.controller.ts
// Description: File responsible for the application's 'register'
// Data: 2022/02/24
// Author: Rey
//-------------------------------------------------------------------------------------------------//

import { Request, Response } from 'express'
import prisma from "../../prisma";
import { userValidation } from '../../validations/user'

export const register = async (req: Request, res: Response) => {
  const user: {
    name: string
    email: string
    phone: string
    password: string
  } = req.body

  try {
    const error = await userValidation(user)

    if (error) {
      return res.status(error.status).send(error.message)
    }

    await prisma.User.create(user)

    return res.status(200).send('Novo usuário cadastrado com sucesso')
  } catch (err: any) {
    console.log(err)
  }
}
