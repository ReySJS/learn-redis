// -------------------------------------------------------------------------------------------------//
// Archive: src/controllers/session/logout.controller.ts
// Description: File responsible for the application's 'logout'
// Data: 2022/02/24
// Author: Rey
// -------------------------------------------------------------------------------------------------//

import { Request, Response } from 'express'

export const logout = async (req: Request, res: Response) => {
  return res.cookie('auth', '').redirect('/')
}
