import { config } from 'dotenv'

config()

module.exports = {

  [process.env.NODE_ENV]: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: 'database/migrations',
      tableName: '_migrations'
    },
    seeds: {
      directory: 'database/seeds'
    },
    pool: {
      min: 2,
      max: 10
    },
    useNullAsDefault: true
  }

}
