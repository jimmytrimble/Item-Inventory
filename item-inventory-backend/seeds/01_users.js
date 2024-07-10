// const bcrypt = require('bcryptjs');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


// const hashedPasswords = await Promise.all([
//   bcrypt.hash('apples', 10),
//   bcrypt.hash('peaches', 10),
//   bcrypt.hash('banana', 10),
//   bcrypt.hash('peaches', 10)
// ]);


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

// const knex = require('knex')(require('./knexfile'));
// const bcrypt = require('bcryptjs');

// async function insertUsers() {
//   const hashedPasswords = await Promise.all([
//     bcrypt.hash('apples', 10),
//     bcrypt.hash('peaches', 10),
//     bcrypt.hash('banana', 10),
//     bcrypt.hash('peaches', 10)
//   ]);

//   await knex('users').insert([
//     { name: 'Jamiel', username: 'jimmytrim', password: hashedPasswords[0] },
//     { name: 'Spencer', username: 'fatherfades', password: hashedPasswords[1] },
//     { name: 'Janae', username: 'octoberbaby', password: hashedPasswords[2] },
//     { name: 'Priest', username: 'pfoustiv', password: hashedPasswords[3] }
//   ]);

//   console.log('Users inserted successfully');
// }

// insertUsers().catch((err) => {
//   console.error('Error inserting users:', err);
// });
