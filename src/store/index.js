import fs from 'fs'
import path from 'path'
import logger from '../utils/logger'


const db = path.resolve('src/store/db.json')

const store = (d) => {
  try {
    fs.readFile(db, 'utf-8', (err, data) => {
      if (err) throw err

      const json = JSON.parse(data)
      json.users.push(d)

      fs.writeFile(db, JSON.stringify(json), 'utf-8', (err) => {
        if (err) throw err
      })
    })
  } catch (err) {
    logger.error(err)
  }
}


export default store
