// -----------------------------------------------------------------------------------------------//
// Archive: src/routes/session.routes.ts
// Description: File responsible for api routes related to 'session' class
// Data: 2022/02/24
// Author: Rey
// -----------------------------------------------------------------------------------------------//

import { Router } from 'express'

const routes = Router()

import { listUsers } from '../controllers/users/list-users.controller'
import { updateUser } from '../controllers/users/update-user.controller'
import { auth } from '../middlewares/auth'

// ------------------------------------------------------------//
// -----------------------session-routes-----------------------//
routes.get('/list-users', auth, listUsers)
routes.put('/update-user', auth, updateUser)
// -----------------------session-routes-----------------------//
// ------------------------------------------------------------//

export default routes
