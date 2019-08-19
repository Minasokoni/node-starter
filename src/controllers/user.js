import uuid from 'uuid/v4'
import { User } from '../models'

export async function saveIncompleteUser(req, res) {
  try {
    await User.update(req.cookies.id, req.body).then(() => {
      res.status(200).json({ message: 'saved information' })
    })
  } catch (err) {
    res.status(500).json(err)
  }
}

export async function saveUser(req, res) {
  if (!req.cookies.id) {
    try {
      const id = uuid()
      res.cookie('id', id, { httpOnly: true, maxAge: 2592000 }) // one day
      await User.create({ uuid: id })
    } catch (err) {
      res.status(500).json({ err })
    }
  }

  res.render('pages/index', req)
}
