// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const seeding = 'postgres://postgres:docker@127.0.0.1:5432/item_inventory2'
const building = 'postgres://postgres:docker@localhost/item_inventory2'

module.exports = {

  development: {
    client: 'pg',
    connection: seeding,
    // connection: building
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
