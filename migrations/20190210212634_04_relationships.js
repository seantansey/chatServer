'use strict'
exports.up = (knex, Promise) => {
  return knex.schema.createTable('relationships', (table) => {
    table.increments()
    table.integer('user1_id').notNullable()
    table.integer('user2_id').notNullable()
    table.integer('status_code').notNullable()
    table.foreign('user1_id').references('users.id').onDelete('CASCADE')
    table.foreign('user2_id').references('users.id').onDelete('CASCADE')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('relationships')
}
