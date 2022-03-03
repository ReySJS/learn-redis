// -------------------------------------------------------------------------------------------------//
// Archive: src/services/set-user-list.service.ts
// Description: File responsible for assignment service for user listing rule
// Data: 2022/03/02
// Author: Rey
// -------------------------------------------------------------------------------------------------//

import { redisClient } from '@app/helpers/RedisClient'

type ServiceParams = {
  permission: 'enable' | 'disable'
}

export const SetUserListRoleService = (permission: ServiceParams) => {
  redisClient.publish('roleListUsers', JSON.stringify(permission))
  return true
}
