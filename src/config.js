import { config } from 'dotenv'

config()

const env = process.env.NODE_ENV || 'development'


export default {
  [env]: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'mysql',
    logging: false
  }
}
