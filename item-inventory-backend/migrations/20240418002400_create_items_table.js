/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('items', table => {
    table.increments('id')
    table.string('item_name')
    table.decimal('price')
    table.string('image')
    table.string('details')
    table.integer('item_id')
    table.foreign('item_id').references('users.id')
    // table.integer('item_id')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

  return knex.schema
  .alterTable('items', table => {
    table.dropForeign('item_id');
  })
  .then(() => {
      return knex.schema.dropTableIfExists('items')
  })

};
