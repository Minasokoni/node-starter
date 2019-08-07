import express from 'express'
import logger from './utils/logger'
import config from './utils/config'

const app = express()
const { port } = config


app.use(logger.request)
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/index', req.query)
})

app.listen(port, () => {
  logger.info(`Running on http://localhost:${port}/`)
})
