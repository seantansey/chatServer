'use strict'
exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.string('email').notNullable().defaultTo('')
    table.string('password').notNullable().defaultTo('')
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
