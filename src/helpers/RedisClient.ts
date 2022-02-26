import Redis from 'ioredis'
import { promisify } from 'util'

export const redisClient = new Redis({
  port: 6379,
  host: '216.238.107.146',
  family: 4,
  db: 0,
  password:
    'authZEDlLTSACcPFyLc6wMFRdOO83H6L+9Go5ipEucl5Q7YtNWAgb3IQXerqR+OSOPpHtaHxgQ8u3iFYd5ss',
  connectTimeout: 10000,
})

export const getRedis = (value: string) => {
  const syncRedisGet = promisify(redisClient.get).bind(redisClient)
  return syncRedisGet(value)
}

export const setRedis = (key: string, value: string) => {
  const syncRedisSet = promisify(redisClient.set).bind(redisClient)
  return syncRedisSet(key, value)
}
