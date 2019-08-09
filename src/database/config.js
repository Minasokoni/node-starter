module.exports = {
  development: {
    username: process.env.MYSQL_USER_NAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST_NAME,
    dialect: 'mysql'
  },
  test: {
    username: process.env.MYSQL_USER_NAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST_NAME,
    dialect: 'mysql'
  },
  production: {
    username: process.env.MYSQL_USER_NAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST_NAME,
    dialect: 'mysql',
    operatorsAliases: false
  }
}
