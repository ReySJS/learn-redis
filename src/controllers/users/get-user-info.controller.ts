// -------------------------------------------------------------------------------------------------//
// Archive: src/controllers/users/get-user-info.controller.ts
// Description: File responsible for obtaining user information
// Data: 2022/02/24
// Author: Rey
// -------------------------------------------------------------------------------------------------//

import { Request, Response } from 'express'
import prisma from '../../prisma'

export const listUsers = async (req: Request, res: Response) => {
  const { userId } = req

  console.time('performance')
  const user = await prisma.user.findUnique({ where: { id: userId } })

  console.timeEnd('performance')
  return res.json(user)
}
