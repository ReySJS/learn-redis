//-------------------------------------------------------------------------------------------------//
// Archive: src/controllers/session/register.controller.ts
// Description: File responsible for the application's 'register'
// Data: 2022/02/24
// Author: Rey
//-------------------------------------------------------------------------------------------------//

import prisma from '../prisma'

interface UserTypes {
  email: string
  phone: string
}

export const userValidation = async ({ email, phone }: UserTypes) => {
  const error = {
    message: '',
    status: 0,
  }
  try {
    const duplicateEmail = await prisma.user.findUnique({ where: { email } })
    if (duplicateEmail) {
      error.message = 'O email informado já está sendo usado'
      error.status = 409
      return error
    }

    const duplicatePhone = await prisma.user.findUnique({ where: { phone } })
    if (duplicatePhone) {
      error.message = 'O telefone informado já está sendo usado'
      error.status = 409
      return error
    }
  } catch (err: any) {
    error.message = 'O servidor não pode processar a solicitação recebida'
    error.status = 500
    return error
  }
  return false
}
