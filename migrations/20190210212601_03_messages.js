'use strict'
exports.up = (knex, Promise) => {
  return knex.schema.createTable('messages', (table) => {
    table.increments()
    table.integer('sender_id').notNullable()
    table.integer('chat_id').notNullable()
    table.string('message').notNullable()
    table.foreign('sender_id').references('users.id').onDelete('CASCADE')
    table.foreign('chat_id').references('chats.id').onDelete('CASCADE')
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('messages')
}
