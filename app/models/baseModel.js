const { Client } = require("pg");
const AppError = require("../utils/errors/appError");

class BaseModel {
  user = process.env.DB_USER;
  password = process.env.DB_PASSWORD;
  database = process.env.DB_DBNAME;
  port = process.env.DB_PORT;
  host = process.env.DB_HOST;
  isError = false;
  error = null;
  table = "";

  constructor(table) {
    this.client = new Client({
      user: this.user,
      host: this.host,
      database: this.database,
      password: this.password,
      port: this.port,
    });
    this.table = table;
    this.client.connect();
  }
}

module.exports = BaseModel;
