import compression from 'compression'
import helmet from 'helmet'
import express from 'express'
import { requestLog } from './logger'
import routes from '../routes'

export default (app) => {
  app.use(helmet())
  app.use(requestLog)
  app.use(express.json())
  app.use(compression())
  app.use(express.urlencoded({ extended: true }))
  app.use('/', routes)
  app.set('view engine', 'ejs')
}
