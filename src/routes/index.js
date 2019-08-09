import { Router } from 'express'
import inCompleteUserController from '../controllers/incompleteUser'

const routes = new Router()

routes.use('/', (req, res) => {
  res.render('pages/index', req.query)
})

routes.use('/incomplete', inCompleteUserController)

export default routes
