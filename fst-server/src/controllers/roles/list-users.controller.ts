// -------------------------------------------------------------------------------------------------//
// Archive: src/controllers/roles/list-users.controller.ts
// Description: File responsible for the application listing users role
// Data: 2022/03/02
// Author: Rey
// -------------------------------------------------------------------------------------------------//

import { Request, Response } from 'express'
import { SetUserListRoleService } from '@services/set-user-list.service'

export const setListUserRole = async (req: Request, res: Response) => {
  const { permission } = req.body

  if (!permission) {
    return res
      .status(422)
      .send('Could not assign a valid configuration for this rule')
  }

  SetUserListRoleService(permission)
  return res.send('The rule for listing users has been successfully changed')
}
