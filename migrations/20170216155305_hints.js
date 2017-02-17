
exports.up = function(knex) {
  return knex.schema.createTable('hints', (table) => {
    table
      .increments();
    table
      .integer('city_id')
      .references('id')
      .inTable('locations')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table
      .string('hint')
      .notNullable()
      .defaultTo('');
    table
      .integer('points')
      .notNullable()
      .defaultTo(0);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('hints');
};
