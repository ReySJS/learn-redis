// -------------------------------------------------------------------------------------------------//
// Archive: src/middleware/auth.ts
// Description: File responsible for user authentication on routes
// Data: 2022/02/24
// Author: Rey
// -------------------------------------------------------------------------------------------------//

import { Request, Response, NextFunction } from 'express'
import fs from 'fs'
import * as JWT from '../config/jwt'

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).end()
  }

  const [, token] = authHeader.split(' ')

  try {
    JWT.verify(token)

    const { sub: userId } = JWT.decode(token)
    req.userId = String(userId)
    next()
  } catch (error) {
    fs.readFile('./src/logs/data.json', 'utf8', (err, data) => {
      if (err) {
        console.log(err)
      } else {
        const buffer = JSON.parse(data)
        buffer.error.push(error)
        fs.writeFile(
          './src/logs/auth.json',
          JSON.stringify(buffer),
          (err) => {}
        )
      }
    })
    res.cookie('auth', '').status(401).send('Falha na autenticação do usuário')
  }
}
// --------------------Middleware to user authentication-----------------------
// ----------------------------------------------------------------------------
