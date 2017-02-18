'use strict';

exports.seed = function(knex) {
  return knex('hints')
    .del()
    .then(() => {
      return knex('hints').insert([{
        id: 1,
        city_id: 1,
        hint: 'Sister city to Seattle',
        points: 200
      }, {
        id: 2,
        city_id: 2,
        hint: 'Almost 4,000 years of recorded history',
        points: 200
      }, {
        id: 3,
        city_id: 3,
        hint: 'A great place for pirozhki',
        points: 600
      }, {
        id: 4,
        city_id: 4,
        hint: 'Port city of population 986,826',
        points: 400
      }, {
        id: 5,
        city_id: 1,
        hint: 'Port City',
        points: 400
      }, {
        id: 6,
        city_id: 1,
        hint: 'Country capital of Tokyo',
        points: 600
      }, {
        id: 7,
        city_id: 2,
        hint: 'Care to see the Hagia Sophia?',
        points: 600
      }, {
        id: 8,
        city_id: 2,
        hint: 'The land of Ancient Byzantium',
        points: 400
      }, {
        id: 9,
        city_id: 3,
        hint: 'Most populous city in the EU',
        points: 200
      }, {
        id: 10,
        city_id: 3,
        hint: 'Razed during WWII during its occupation',
        points: 400
      }, {
        id: 11,
        city_id: 4,
        hint: 'Home town of famous singer Alcione',
        points: 200
      }, {
        id: 12,
        city_id: 4,
        hint: 'Você fala português? Olhe para o nordeste',
        points: 600
      }, {
        id: 13,
        city_id: 5,
        hint: 'Major tourist destination',
        points: 200
      }, {
        id: 14,
        city_id: 5,
        hint: 'Count Dracula\'s "transportation hub" in Bram Stoker\'s classic novel',
        points: 400
      }, {
        id: 15,
        city_id: 5,
        hint: 'Seaside resort facing the Black Sea',
        points: 600
      }, {
        id: 16,
        city_id: 6,
        hint: 'Features a tropical wet & dry climate',
        points: 200
      }, {
        id: 17,
        city_id: 6,
        hint: 'Known as "The Garden City"',
        points: 400
      }, {
        id: 18,
        city_id: 6,
        hint: 'Nearby to Lake Bosomtwe, the Ashanti Region\'s only natural lake',
        points: 600
      }, {
        id: 19,
        city_id: 7,
        hint: '28,053 people per square mile',
        points: 200
      }, {
        id: 20,
        city_id: 7,
        hint: 'Five boroughs',
        points: 400
      }, {
        id: 21,
        city_id: 7,
        hint: 'Occupied during the US recession',
        points: 600
      }]);
    })
    .then(() => {
      return knex.raw(
       "SELECT setval('hints_id_seq', (SELECT MAX(id) FROM hints));");
    });
};
