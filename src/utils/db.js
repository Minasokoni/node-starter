import Knex from 'knex'
import chalk from 'chalk'
import knexfile from '../../knexfile'
import { logger } from './logger'

const env = process.env.NODE_ENV || 'development'
const knex = Knex(knexfile[env])

knex.raw("SELECT 'test connection';").then((message) => {
  console.log(`Database: ${chalk.green.bold('connected')} (${process.env.DATABASE_URL})`)
}).catch((err) => {
  throw err
})

export default knex
