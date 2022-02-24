// -----------------------------------------------------------------------------------------------//
// Archive: src/routes/session.routes.ts
// Description: File responsible for api routes related to 'session' class
// Data: 2022/02/24
// Author: Rey
// -----------------------------------------------------------------------------------------------//

import { Router } from 'express'

const routes = Router()

import { register } from '../controllers/session/register.controller'
import { login } from '../controllers/session/login.controller'
import { logout } from '../controllers/session/logout.controller'
import { auth } from '../middlewares/auth'


// ------------------------------------------------------------//
// -----------------------session-routes-----------------------//
routes.post('/register', register)
routes.post('/login', login)
routes.post('/logout', auth, logout)
// -----------------------session-routes-----------------------//
// ------------------------------------------------------------//

export default routes
