//-------------------------------------------------------------------------------------------------//
// Archive: src/controllers/users/list-users.controller.ts
// Description: File responsible for the application's 'register'
// Data: 2022/02/24
// Author: Rey
//-------------------------------------------------------------------------------------------------//

import { Request, Response } from 'express'
import prisma from '../../prisma'

export const listUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.User.find({}, { email: 1, name: 1 })
    return res.json(users)
  } catch (err) {
    console.log(err)
  }
}
