var express = require('express');
var router = express.Router();
const knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  return knex('users')
    .then(users => {
      res.send(users)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/', function(req, res, next) {
  return knex('users')
    .insert({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    .returning(['name', 'email'])
    .then(user => {
      res.send(user[0])
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router;
