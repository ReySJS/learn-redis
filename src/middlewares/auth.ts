//-------------------------------------------------------------------------------------------------//
// Archive: src/middleware/auth.ts
// Description: File responsible for user authentication on routes
// Data: 2022/02/24
// Author: Rey
//-------------------------------------------------------------------------------------------------//

import { Request, Response, NextFunction } from 'express'
import fs from 'fs'
import * as JWT from '../config/jwt'

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const [, token] = <string[]>req.headers.authorization?.toString().split(' ')

  try {
    JWT.verify(token)
    next()
  } catch (error) {
    fs.readFile('./src/logs/data.json', 'utf8', (err, data) => {
      if (err) {
        console.log(err)
      } else {
        const buffer = JSON.parse(data)
        buffer.error.push(error)
        fs.writeFile(
          './src/logs/data.json',
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
