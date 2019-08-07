import { createLogger, format, transports } from 'winston'
import config from './config'

const {
  combine, timestamp, json, colorize, printf
} = format

const { env, log } = config

const custom = printf(({ level, message, timestamp }) => `${timestamp} [${level}]: ${message}`)

const logger = new createLogger({
  level: 'info',
  format: combine(
    colorize(),
    json(),
    timestamp(),
    custom
  ),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' })
  ]
})

if (env !== 'production') {
  logger.add(new transports.Console({
    level: log.level,
    format: custom
  }))
}


logger.request  = (req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`)

  res.on('finish', () => {
    logger.info(`${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') || 0}b sent`)
  })

  next()
}


export default logger
