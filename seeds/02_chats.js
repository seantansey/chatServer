
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chats').del()
    .then(function () {
      // Inserts seed entries
      return knex('chats').insert([
        {
          id: 1,
          user1_id: 1,
          user1_name: 'Fuckboi Johnson',
          user2_id: 2,
          user2_name: 'Nicolaus Copernicus'
        },
        {
          id: 2,
          user1_id: 1,
          user1_name: 'Fuckboi Johnson',
          user2_id: 3,
          user2_name: 'Bill Cosby'
        }
      ])
    })
    .then(() => {
      return knex.raw("SELECT setval('chats_id_seq', (SELECT MAX(id) FROM chats));")
    })
}
