// -----------------------------------------------------------------------------------------------//
// Archive: src/routes/index.ts
// Description: File responsible for loading all routes
// Data: 2022/02/24
// Author: Rey
// -----------------------------------------------------------------------------------------------//

import { Router } from 'express'
import sessionRoutes from './session.routes'
import usersRoutes from './users.routes'

export const router = Router()

// ------------------------------------------------------------//
// ------------------------general-routes----------------------//
router.use(sessionRoutes)
router.use(usersRoutes)
