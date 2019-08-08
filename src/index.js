import express from 'express'
import logger from './utils/logger'
import config from './utils/config'
import { pool, db } from './utils/db'

const app = express()
const { port } = config

db.connect((err) => {
  if (err) throw err
  logger.info('Connected to MYSQL Database.')
})

app.use(logger.request)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/index', req.query)
})

app.post('/incomplete', async (req, res) => {
  pool.query('INSERT INTO Incomplete SET ?', req.body, (err) => {
    if (err) throw err
    res.json({ message:'saved information' })
  })
})

app.listen(port, () => {
  logger.info(`Running on http://localhost:${port}/`)
})
