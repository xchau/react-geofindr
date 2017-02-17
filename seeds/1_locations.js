'use strict';

exports.seed = function(knex) {
  return knex('locations')
    .del()
    .then(() => {
      return knex('locations').insert([{
          id: 1,
          city: 'Kobe',
          country: 'Japan',
          lat: 34.707468,
          lng: 135.213605,
          img_url: 'https://celebritycruisescom.files.wordpress.com/2014/11/kobe-japan.jpg',
          link: 'https://en.wikipedia.org/wiki/Kobe'
        }, {
          id: 2,
          city: 'Izmir',
          country: 'Turkey',
          lat: 38.696694,
          lng: 135.188639,
          img_url: 'https://userscontent2.emaze.com/images/04c2ac0f-c29d-4746-892f-6e1f253762e6/a00f0c75baf1b0c1f0fa1db8c9e4f89d.jpg',
          link: 'https://en.wikipedia.org/wiki/%C4%B0zmir'
        }, {
          id: 3,
          city: 'Warsaw',
          country: 'Poland',
          lat: 52.213632,
          lng: 21.021158,
          img_url: 'http://www.bargaintravel4u.co.uk/assets/warsaw-hotels_1.jpg',
          link: 'https://en.wikipedia.org/wiki/Warsaw'
        }, {
          id: 4,
          city: 'Sao Luis',
          country: 'Brazil',
          lat: -2.537582,
          lng: -44.211207,
          img_url: 'https://s-media-cache-ak0.pinimg.com/originals/01/00/c6/0100c61fbbb2b0449fe0c1db3fc87306.jpg',
          link: 'https://en.wikipedia.org/wiki/S%C3%A3o_Lu%C3%ADs,_Maranh%C3%A3o'
        }]);
    })
    .then(() => {
      return knex.raw(
       "SELECT setval('locations_id_seq', (SELECT MAX(id) FROM locations));");
    });
};
