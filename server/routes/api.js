const router = require('express').Router();
const knex = require('../../knex');
const { camelizeKeys } = require('humps');

router.get('/', (req, res) => {
  knex('locations')
    .select('*')
    .orderBy('id')
    .then((rows) => {
      res.send(camelizeKeys(rows));
    })
    .catch((err) => {
      next(err);
    });
})

module.exports = router;
