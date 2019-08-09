import Sequelize from 'sequelize'
import sql from '../utils/db'

const User = sql.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  tableName: 'Incomplete'
})


export default User
