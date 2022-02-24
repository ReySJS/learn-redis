//-------------------------------------------------------------------------------------------------//
// Archive: src/controllers/users/list-users.controller.ts
// Description: File responsible for the application's 'register'
// Data: 2022/01/31
// Author: Rey
//-------------------------------------------------------------------------------------------------//

import { Request, Response } from 'express'
import { User } from '../../models/Users'

export const listUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({}, { email: 1, name: 1 })
    return res.json(users)
  } catch (err) {
    console.log(err)
  }
}
