const { User } = require('../models')


export default async function saveIncompleteUser(req, res, next) {
  try {
    await User.create(req.body).then(() => {
      res.json({ message: 'saved information' })
    })
  } catch (err) {
    return next(err)
  }
}
