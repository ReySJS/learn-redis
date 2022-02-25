import Redis from 'ioredis'
import { promisify } from 'util'

export const redisClient = new Redis()

export const getRedis = (key: string) => {
  const syncRedisGet = promisify(redisClient.get).bind(redisClient)
  return syncRedisGet(key)
}

export const setRedis = (key: string, value: string) => {
  const syncRedisSet = promisify(redisClient.set).bind(redisClient)
  return syncRedisSet(key, value)
}
