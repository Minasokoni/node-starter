exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('uuid').notNullable().primary()
    table.string('firstname')
    table.string('lastname')
    table.string('email')
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
