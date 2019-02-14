
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          name: 'Fuckboi Johnson',
          email: 'fbj@gmail.com',
          password: '123456',
          created_at: new Date('2016-06-26 14:26:16 UTC')
      },
      {
        id: 2,
        name: 'Nicolaus Copernicus',
        email: 'nc@gmail.com',
        password: 'abcd',
        created_at: new Date('2016-06-26 14:26:16 UTC')
      },
      {
        id: 3,
        name: 'Bill Cosby',
        email: 'bc@gmail.com',
        password: 'hey',
        created_at: new Date('2016-06-26 14:26:16 UTC')
      },
      ])
    })
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
    })
}
