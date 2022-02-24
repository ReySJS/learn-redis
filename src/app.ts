// -----------------------------------------------------------------------------------------------//
// Archive: src/app.ts
// Description: File responsible for configuring the application (Back-End)
// Data: 2022/02/24
// Author: Rey
// -----------------------------------------------------------------------------------------------//

import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'

import { router } from './routes/index.routes'

export const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({
  origin: '*',
  credentials: true,
}))
app.use(compression())
app.use(helmet())
app.disable('x-powered-by')

app.use(router) // => require all routes created on index.routes.js
