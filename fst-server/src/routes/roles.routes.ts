// -----------------------------------------------------------------------------------------------//
// Archive: src/routes/roles.routes.ts
// Description: File responsible for api routes related to 'roles' class
// Data: 2022/03/02
// Author: Rey
// -----------------------------------------------------------------------------------------------//

import { Router } from 'express'

import { setListUserRole } from '../controllers/roles/list-users.controller'


const routes = Router()

// ------------------------------------------------------------//
// -----------------------session-routes-----------------------//
routes.put('/roles/list-users', setListUserRole)
// -----------------------session-routes-----------------------//
// ------------------------------------------------------------//

export default routes
