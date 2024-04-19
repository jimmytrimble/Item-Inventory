/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')
  await knex('users').insert([
    {name: 'Jamiel', username: 'jimmytrim', password: 'apples'},
    {name: 'Spencer', username: 'fatherfades', password: 'peaches'},
    {name: 'Janae', username: 'octoberbaby', password: 'banana'},
    {name: 'Priest', username: 'pfoustiv', password: 'peaches'}
  ]);
};
