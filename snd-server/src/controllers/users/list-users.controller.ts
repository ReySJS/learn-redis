// -------------------------------------------------------------------------------------------------//
// Server: 2
// Archive: src/controllers/users/list-users.controller.ts
// Description: File responsible for user listing function
// Data: 2022/03/02
// Author: Rey
// -------------------------------------------------------------------------------------------------//

import { readFileSync } from 'fs'
import { GetUserListService } from '@app/services/get-user-list.service'
import { Request, Response } from 'express'

type Roles = {
  userListPermission?: 'enable' | 'disable'
}
export const listUsers = async (req: Request, res: Response) => {
  const data = readFileSync('./src/roles/user-roles.json', 'utf8')
  let role: Roles = JSON.parse(data)

  if (role.userListPermission === 'disable') {
    return res.status(401).send('You are not authorized to get the user list')
  }

  let users = await GetUserListService()

  return res.json(users)
}
