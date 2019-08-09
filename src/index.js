import express from 'express'
import chalk from 'chalk'
import { logger, sentryLog } from './utils/logger'
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

  logger.info(`
Running on port: ${chalk.yellow.bold(process.env.PORT)}
Enviornment: ${chalk.green.bold(process.env.NODE_ENV)}
  `)
})
