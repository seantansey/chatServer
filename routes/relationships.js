var express = require('express');
var router = express.Router();
const knex = require('../knex')


//get all relationships
router.get('/', (req, res, next) => {
  return knex('relationships')
    .then(relationships => {
      res.send(relationships)
    })
    .catch(err => {
      next(err)
    })
})

// //get all relations for certain user
// router.post('/', (req, res, next) => {
//   return knex('relationships')
//     .where({user1_id: req.body.id})
//     .orWhere({user2_id: req.body.id})
//     .then(relations => {
//       res.send(relations)
//     })
//     .catch(err => {
//       next(err)
//     })
// })
//
// // //add a relationship
// router.post('/add', (req, res, next) => {
//   return knex('relationships')
//     .insert({
//       user1_id: req.body.user1Id,
//       user2_id: req.body.user2Id,
//       status_code: req.body.statusCode
//     })
//     .returning('*')
//     .then(relation => {
//       res.send(relation)
//     })
//     .catch(err => {
//       next(err)
//     })
// })


module.exports = router
