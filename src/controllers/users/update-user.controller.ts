//-------------------------------------------------------------------------------------------------//
// Archive: src/controllers/users/list-users.controller.ts
// Description: File responsible for the application's 'register'
// Data: 2022/01/31
// Author: Rey
//-------------------------------------------------------------------------------------------------//

import { Request, Response } from 'express'
import { User } from '../../models/Users'

export const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.body
  let update = { ...req.body }
  delete update.userId

  try {
    const user = await User.findOneAndUpdate(
      { id: userId },
      update,
      { new: true }
    )

    return res.json(user)
  } catch (err) {
    console.log(err)
  }
}
