
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {
          id: 1,
          sender_id: 1,
          chat_id: 1,
          message: 'Yo',
          created_at: new Date('2016-06-26 14:26:16 UTC')
        },
        {
          id: 2,
          sender_id: 2,
          chat_id: 1,
          message: 'what up dawg',
          created_at: new Date('2016-06-26 14:26:18 UTC')
        },
        {
          id: 3,
          sender_id: 1,
          chat_id: 2,
          message: 'Suh',
          created_at: new Date('2016-06-26 14:26:16 UTC')
        },
        {
          id: 4,
          sender_id: 3,
          chat_id: 2,
          message: 'ayyyyye',
          created_at: new Date('2016-06-26 14:26:19 UTC')
        },
        {
          id: 5,
          sender_id: 1,
          chat_id: 1,
          message: 'nm my man',
          created_at: new Date('2016-06-26 14:26:20 UTC')
        },
      ])
    })
    .then(() => {
      return knex.raw("SELECT setval('messages_id_seq', (SELECT MAX(id) FROM messages));")
    })
}
