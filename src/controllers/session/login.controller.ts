//-------------------------------------------------------------------------------------------------//
// Archive: src/controllers/session/login.controller.ts
// Description: File responsible for the application's 'login'
// Data: 2022/02/24
// Author: Rey
//-------------------------------------------------------------------------------------------------//

import 'dotenv/config'
import { Request, Response } from 'express'
import prisma from "../../prisma";

import * as JWT from '../../config/jwt'

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const user = await prisma.User.findOne({ email }).exec()

    if (!user) {
      return res.status(400).send({ message: 'Usuário não encontrado' })
    }

    user.comparePassword(password, (error: any, match: any) => {
      if (!match) {
        return res
          .status(400)
          .send({ message: 'A senha informada não é válida' })
      }
    })

    const userInfo = {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    }

    const token = JWT.sign(userInfo)
    return res
      .status(200)
      .send({ message: `Bem-vindo ${user.name}`, token, user: userInfo })
  } catch (error) {
    return res.status(500).send(error)
  }
}
