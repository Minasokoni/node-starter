import { config } from 'dotenv'

config()

export default {
  url: process.env.SITE_URL,
  database: process.env.DATABASE_URI,
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  log: {
    level: process.env.WINSTON_LOG_LEVEL
  }
}
