// -------------------------------------------------------------------------------------------------//
// Archive: src/config/jwt.ts
// Description: File responsible for the application's 'login'
// Data: 2021/02/24
// Author: Rey
// -------------------------------------------------------------------------------------------------//

import 'dotenv/config'
import jwt, { JwtPayload } from 'jsonwebtoken'

const secret = process.env.JWT_SECRET

export const sign = (payload: JwtPayload, userId: number) =>
  jwt.sign(payload, <string>secret, {
    expiresIn: '7d',
    subject: String(userId),
  })

export const verify = (token: string | undefined) =>
  <JwtPayload>jwt.verify(<string>token, <string>secret)

export const decode = (token: string) => <JwtPayload>jwt.decode(token)
