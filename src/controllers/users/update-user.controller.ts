//-------------------------------------------------------------------------------------------------//
// Archive: src/controllers/users/list-users.controller.ts
// Description: File responsible for the application's 'register'
// Data: 2022/02/24
// Author: Rey
//-------------------------------------------------------------------------------------------------//

import { Request, Response } from 'express'
import prisma from '../../prisma'
import { userValidation } from '../../validations/user'

export const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.body
  let update = { ...req.body }
  delete update.userId

  try {
    const error = await userValidation(update)
    if (error) {
      return res.status(error.status).send(error.message)
    }

    const user = await prisma.user.update({where: { id: userId }, data: update})

    return res.json(user)
  } catch (err) {
    console.log(err)
  }
}
