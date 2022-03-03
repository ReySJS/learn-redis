// -------------------------------------------------------------------------------------------------//
// Archive: src/services/set-user-list.service.ts
// Description: File responsible for assignment service for user listing rule
// Data: 2022/03/02
// Author: Rey
// -------------------------------------------------------------------------------------------------//

import { redisClient } from '@app/helpers/RedisClient'

export const SetUserListRoleService = (permission: 'enable' | 'disable') => {

  redisClient.publish('roleListUsers', permission)
  console.log(`
  Permission for listing users changed to "${permission}"`)
  return true
}
