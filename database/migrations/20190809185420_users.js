
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('firstname')
    table.string('lastname')
    table.string('email')
    table.string('uuid').notNullable().primary()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
