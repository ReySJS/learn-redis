// -------------------------------------------------------------------------------------------------//
// Archive: src/controllers/users/get-user-info.controller.ts
// Description: File responsible for obtaining user information
// Data: 2022/02/24
// Author: Rey
// -------------------------------------------------------------------------------------------------//

import { getRedis } from '@app/helpers/RedisClient'
import { Request, Response } from 'express'
import prisma from '../../prisma'

type User = {
  name: string
  email: string
  phone: string
}

export const listUsers = async (req: Request, res: Response) => {
  const { userId } = req

  console.time('performance')

  const userRedis = await getRedis(`user-${userId}`)
  const user: User = JSON.parse(userRedis)
  // const user = await prisma.user.findUnique({ where: { id: Number(userId) } })

  console.timeEnd('performance')
  return res.json(user)
}
