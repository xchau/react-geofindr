'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('locations', (table) => {
    table
      .increments();
    table.string('city')
      .notNullable()
      .defaultTo('');
    table
      .string('country')
      .notNullable()
      .defaultTo('');
    table
      .float('lat', 12, 9)
      .notNullable()
      .defaultTo(47.483842);
    table
      .float('lng', 12, 9)
      .notNullable()
      .defaultTo(-122.162876);
    table
      .string('img_url')
      .notNullable()
      .defaultTo('https://elearningindustry.com/wp-content/uploads/2014/07/Top-10-Reasons-Why-LMS-Implementation-Fail.png')
    table
      .string('link')
      .notNullable()
      .defaultTo('https://wikipedia.org');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('locations');
};
