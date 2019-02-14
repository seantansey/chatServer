'use strict'
exports.up = (knex, Promise) => {
  return knex.schema.createTable('chats', (table) => {
    table.increments()
    table.integer('user1_id').notNullable()
    table.string('user1_name').notNullable()
    table.integer('user2_id').notNullable()
    table.string('user2_name').notNullable()
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('chats')
};
