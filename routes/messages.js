var express = require('express');
var router = express.Router();
const knex = require('../knex')


//get all messages
router.get('/', (req, res, next) => {
  return knex('messages')
    .then(messages => {
      res.send(messages)
    })
    .catch(err => {
      next(err)
    })
})

//get all messages for certain conversation
router.post('/', (req, res, next) => {
  return knex('messages')
    .where({chat_id: req.body.chatId})
    .then(messages => {
      res.send(messages)
    })
    .catch(err => {
      next(err)
    })
})

//add a message
router.post('/add', (req, res, next) => {
  return knex('messages')
    .insert({
      sender_id: req.body.senderId,
      chat_id: req.body.chatId,
      message: req.body.message
    })
    .returning('*')
    .then(message => {
      res.send(message)
    })
    .catch(err => {
      next(err)
    })
})


module.exports = router
