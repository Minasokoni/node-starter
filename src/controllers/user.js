import { pool } from '../utils/db'

export default async function saveIncompleteUser(req, res, next) {
  try {
    await pool.query('INSERT INTO Incomplete SET ?', req.body, (err) => {
      if (err) throw err
      res.json({ message: 'saved information' })
    })
  } catch (err) {
    return next(err)
  }
}
