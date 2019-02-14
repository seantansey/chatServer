
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('relationships').del()
    .then(function () {
      // Inserts seed entries
      return knex('relationships').insert([
        {
          id: 1,
          user1_id: 1,
          user2_id: 2,
          status_code: 2
        },
        {
          id: 2,
          user1_id: 1,
          user2_id: 3,
          status_code: 2
        },
      ])  
    })
    .then(() => {
      return knex.raw("SELECT setval('relationships_id_seq', (SELECT MAX(id) FROM relationships));")
    })
}
