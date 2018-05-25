var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('people')
   .select()
   .then(people => res.json(people))
});

module.exports = router;
