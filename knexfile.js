// Update with your config settings.
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/database.db3'
    }
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: './data/database.db3',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    // connection: {
    //   connection: process.env.DATABASE_URL,
    //   user:     'username',
    //   password: 'password'
    // },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
