'use strict';

exports.seed = function(knex) {
  return knex('table_name')
    .del()
    .then(() => {
      return knex('locations').insert([{
        id: 1,
        city_id: 1,
        
      }]);
    })
    .then(() => {
      return knex.raw(
       "SELECT setval('hints_id_seq', (SELECT MAX(id) FROM hints));");
    });
};
