import { createLogger, format, transports } from 'winston'
import * as Sentry from '@sentry/node'
import config from './config'

const {
  combine,
  timestamp,
  json,
  colorize,
  printf,
} = format

const { log } = config

const custom = printf(({ level, message, timestamp }) => `${timestamp} [${level}]: ${message}`)

export const logger = new createLogger({
  level: 'info',
  format: combine(
    colorize(),
    json(),
    timestamp(),
    custom,
  ),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
  ],
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    level: log.level,
    format: custom,
  }))
}

export const sentryLog = () => {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
  })

  return Sentry
}

export const requestLog = (err, req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`)

  res.on('finish', () => {
    logger.info(`${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') || 0}b sent`)
  })

  if (process.env.NODE_ENV === 'production') {
    sentryLog().captureException(err)
  }

  return next()
}
