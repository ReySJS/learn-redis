// -------------------------------------------------------------------------------------------------//
// Archive: src/services/set-user-list.service.ts
// Description: File responsible for assignment service for user listing rule
// Data: 2022/03/02
// Author: Rey
// -------------------------------------------------------------------------------------------------//

import { redisClient } from '@app/helpers/RedisClient'

export const SetUserListRoleService = (permission: 'enable' | 'disable') => {
  console.log(permission)

  redisClient.publish('roleListUsers', permission)
  return true
}
