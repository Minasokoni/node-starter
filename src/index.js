import express from 'express'
import chalk from 'chalk'
import { logger, sentryLog } from './utils/logger'
import sequelize from './utils/db'
import applyMiddleware from './utils/middleware'

const app = express()

applyMiddleware(app)

if (process.env.NODE_ENV === 'production') app.use(sentryLog().Handlers.errorHandler())

app.listen(process.env.PORT, (err) => {
  if (err) {
    logger.error(err)
    process.exit(1)
    return
  }

  sequelize
    .authenticate()
    .then(() => {
      logger.info(`
      Running on port: ${chalk.yellow.bold(process.env.PORT)}
      Enviornment: ${chalk.green.bold(process.env.NODE_ENV)}
      MYSQL Database: ${chalk.green.bold('connected')}
      `)
    }).catch((err) => {
      throw err
    })
})
