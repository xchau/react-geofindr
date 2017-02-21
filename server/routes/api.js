const router = require('express').Router();
const knex = require('../../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');



router.get('/city', (req, res, next) => {
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

router.get('/hints/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  knex('hints')
    .select('*')
    .where('city_id', id)
    .orderBy('points', 'ASC')
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

router.post('/addcity', (req, res, next) => {
  const { city, country, lat, lng, imgUrl, link, hint1, hint2, hint3, h1pv, h2pv, h3pv } = req.body;
  let response = {};
  let cityId;

  console.log(city, country, lat, lng, imgUrl, link, hint1, hint2, hint3, h1pv, h2pv, h3pv);

  knex('locations')
    .insert(decamelizeKeys({
      city,
      country,
      lat,
      lng,
      imgUrl,
      link
    }), '*')
    .then((locations) => {
      if (!locations.length) {
        return next();
      }

      response.location = locations[0];
      cityId = locations[0].id;

      // res.send(camelizeKeys(newLocation));
      return knex('hints')
        .insert(decamelizeKeys([{
          cityId,
          hint: hint1,
          points: h1pv
        }, {
          cityId,
          hint: hint2,
          points: h2pv
        }, {
          cityId,
          hint: hint3,
          points: h3pv
        }]), '*')
    })
    .then((hints) => {
      if (!hints.length) {
        console.log(hints);
        return next();
      }

      response.hints = hints;

      res.send(response);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
