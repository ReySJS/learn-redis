// -------------------------------------------------------------------------------------------------//
// Server: 3
// Archive: src/services/get-user-list.service.ts
// Description: File responsible for get user list
// Data: 2022/03/03
// Author: Rey
// -------------------------------------------------------------------------------------------------//

import { getRedis, setRedis } from '@app/helpers/RedisClient'
import prisma from '../prisma'

export const GetUserListService = async () => {
  let users = []
  const usersRedis = await getRedis('users')

  if (!JSON.parse(usersRedis)) {
    users = await prisma.user.findMany({})
    await setRedis('users', JSON.stringify(users))
  } else {
    users = JSON.parse(usersRedis)
  }
  return users
}
