import compression from 'compression'
import express from 'express'
import logger from './logger'
import routes from '../routes'

export default (app) => {
  app.use(logger.request)
  app.use(express.json())
  app.use(compression())
  app.use(express.urlencoded({ extended: true }))
  app.use('/', routes)
  app.set('view engine', 'ejs')
}
