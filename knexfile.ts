const knexcfg = {
  test: {
    client: "postgresql",
    connection: {
      host: "db01",
      database: "trackevent_test",
      user: "postgres",
      password: "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  prod: {
    client: "postgresql",
    connection: {
      host: "db01",
      database: "trackevent",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

export = knexcfg;
