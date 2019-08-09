import { pool } from '../utils/db'

export default (req, res) => {
  pool.query('INSERT INTO Incomplete SET ?', req.body, (err) => {
    if (err) throw err
    res.json({ message:'saved information' })
  })
}
