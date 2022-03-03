// -----------------------------------------------------------------------------------------------//
// Archive: src/routes/index.ts
// Description: File responsible for loading all routes
// Data: 2022/02/02
// Author: Rey
// -----------------------------------------------------------------------------------------------//

import { Router } from 'express'
import rolesRoutes from './roles.routes'

export const router = Router()

// ------------------------------------------------------------//
// ------------------------general-routes----------------------//
router.use(rolesRoutes)
