const router = require('express').Router();
const knex = require('../../knex');
const { camelizeKeys } = require('humps');

router.get('/city', (req, res) => {
  knex('locations')
    .select('*')
    .orderBy('id')
    .then((rows) => {
      res.send(camelizeKeys(rows));
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/hints/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);

  knex('hints')
    .select('*')
    .where('city_id', id)
    .then((rows) => {
      if (!rows.length) {
        return next();
      }

      const hints = JSON.stringify(camelizeKeys(rows));

      res.send(hints);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
