import { User } from '../models'

export default async function saveIncompleteUser(req, res) {
  try {
    await User.create(req.body).then(() => {
      res.status(200).json({ message: 'saved information' })
    })
  } catch (err) {
    res.status(500).json({ err })
  }
}
