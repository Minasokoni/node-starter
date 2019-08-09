import Sequelize from 'sequelize'

const settings = {
  host: process.env.MYSQL_HOST_NAME,
  user: process.env.MYSQL_USER_NAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}

const sql = new Sequelize(`mysql://${settings.user}:${settings.password}@${settings.host}/${settings.database}`)

export default sql
// export const db = mysql.createConnection(settings)
// export const pool = mysql.createPool({ ...settings, connectionLimit: 100 })