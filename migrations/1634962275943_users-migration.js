/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("users", {
    id: "id",
    username: { type: "varchar(1000)", notNull: true },
    email: { type: "varchar(255)", notNull: true, unique: true },
    password: { type: "varchar(128)", notNull: true },
    ref: { type: "varchar(100)", notNull: true, unique: true },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    modifiedAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });

  pgm.createTable("todos", {
    id: "id",
    user_id: { type: "int", notNull: true },
    title: { type: "varchar(100)", notNull: true },
    desc: { type: "varchar(1000)", notNull: true },
    ref: { type: "varchar(100)", notNull: true, unique: true },
    completed: { type: "bool", notNull: true, default: false },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    modifiedAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("todos", {
    ifExists: true,
  });

  pgm.dropTable("users", {
    ifExists: true,
  });
};
