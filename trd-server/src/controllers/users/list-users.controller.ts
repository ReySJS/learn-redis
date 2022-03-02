// -------------------------------------------------------------------------------------------------//
// Archive: src/controllers/users/list-users.controller.ts
// Description: File responsible for the application's 'register'
// Data: 2022/02/24
// Author: Rey
// -------------------------------------------------------------------------------------------------//

import { getRedis } from '@app/helpers/RedisClient'
import { Request, Response } from 'express'
import prisma from '../../prisma'

export const listUsers = async (req: Request, res: Response) => {
  // const users = await prisma.user.findMany({})
  const usersRedis = await getRedis('users')
  const users = JSON.parse(usersRedis)
  return res.json(users)
}
