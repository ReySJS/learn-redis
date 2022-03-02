// -------------------------------------------------------------------------------------------------//
// Archive: src/controllers/users/get-user-info.controller.ts
// Description: File responsible for obtaining user information
// Data: 2022/02/24
// Author: Rey
// -------------------------------------------------------------------------------------------------//

import { getRedis } from '@app/helpers/RedisClient'
import { Request, Response } from 'express'

export const getUserInfo = async (req: Request, res: Response) => {
  const { userId } = req

  console.time('performance')

  const userRedis = await getRedis(`user-${userId}`)
  const user = JSON.parse(userRedis)

  console.timeEnd('performance')
  return res.json(user)
}
