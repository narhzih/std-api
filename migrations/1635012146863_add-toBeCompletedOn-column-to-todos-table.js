/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.addColumns("todos", {
    toBeCompletedOn: {
      type: "timestamp",
      notNull: false,
      default: null,
    },
  });
};

exports.down = (pgm) => {};
