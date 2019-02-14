var express = require('express');
var router = express.Router();
const knex = require('../knex')



//get all chats
router.get('/', (req, res, next) => {
  return knex('chats')
    .then(chats => {
      res.send(chats)
    })
    .catch(err => {
      next(err)
    })
})


//get all chats for certain user
router.post('/', (req, res, next) => {
  return knex('chats')
    .where({user1_id: req.body.id})
    .orWhere({user2_id: req.body.id})
    .then(chats => {
      res.send(chats)
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router;
