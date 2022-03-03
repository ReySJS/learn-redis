// -------------------------------------------------------------------------------------------------//
// Archive: src/controllers/users/list-users.controller.ts
// Description: File responsible for the application's 'register'
// Data: 2022/02/24
// Author: Rey
// -------------------------------------------------------------------------------------------------//

import { redisClient, getRedis } from '@app/helpers/RedisClient'
import { Request, Response } from 'express'
import prisma from '../../prisma'

export const listUsers = async (req: Request, res: Response) => {
  let userListingPermissionRole = 'enable'

  redisClient.subscribe('roleListUsers', (err) => {
    if (err) {
      console.error('Failed to sync your user listing permission')
    } else {
      console.log(
        'Subscribed successfully! This client is currently subscribed to user listing role.'
      )
    }
  })

  redisClient.on('message', (channel, message) => {
    userListingPermissionRole = JSON.parse(message)
    console.log(`Changed permissions to ${message}`)
  })

  if (userListingPermissionRole === 'disable') {
    return res.status(401).send('You are not authorized to get the user list')
  }
  console.log(userListingPermissionRole)

  const users = await prisma.user.findMany({})
  // const usersRedis = await getRedis('users')
  // const users = JSON.parse(usersRedis)
  return res.json(users)
}
