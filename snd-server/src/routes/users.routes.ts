// -----------------------------------------------------------------------------------------------//
// Archive: src/routes/session.routes.ts
// Description: File responsible for api routes related to 'session' class
// Data: 2022/02/24
// Author: Rey
// -----------------------------------------------------------------------------------------------//

import { Router } from 'express'

import { listUsers } from '@controllers/users/list-users.controller'
import { getUserInfo } from '@controllers/users/get-user-info.controller'
import { auth } from '@middlewares/auth'

const routes = Router()

// ------------------------------------------------------------//
// -----------------------session-routes-----------------------//
routes.get('/list-users', auth, listUsers)
routes.get('/user/my-profile', auth, getUserInfo)
// -----------------------session-routes-----------------------//
// ------------------------------------------------------------//

export default routes
