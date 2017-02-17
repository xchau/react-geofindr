'use strict';

exports.seed = function(knex) {
  return knex('table_name')
    .del()
    .then(() => {
      return knex('locations').insert([{
        id: 1,
        city_id: 1,
        hint: 'Sister city to Seattle.',
        points: 200
      }, {
        id: 2,
        city_id: 2,
        hint: 'Almost 4,000 years of recorded history.',
        points: 200
      }, {
        id: 3,
        city_id: 3,
        hint: 'A great place for pirozhki',
        points: 200
      }, {
        id: 4,
        city_id: 4,
        hint: 'Port city of population 986,826.'
      }]);
    })
    .then(() => {
      return knex.raw(
       "SELECT setval('hints_id_seq', (SELECT MAX(id) FROM hints));");
    });
};
