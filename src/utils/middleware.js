import compression from 'compression'
import express from 'express'
import logger from './logger'
import router from '../routes'

export default (app) => {
  app.use(logger.request)
  app.use(express.json())
  app.use(compression())
  app.use('/', router)
  app.use(express.urlencoded({ extended: true }))
  app.set('view engine', 'ejs')
}
