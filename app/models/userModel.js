const AppError = require("./../utils/errors/appError");
const BaseModel = require("./BaseModel");

class UserModel extends BaseModel {
  user = "default";
  constructor() {
    super();
    this.table = "users";
  }
  generateRef() {
    return "_" + Math.random().toString(36).substr(1, 16);
  }
  async createUser(userInfo) {
    try {
      const userRef = this.generateRef();
      const res = await this.client.query(
        "INSERT INTO users (username, email, password, ref) VALUES($1, $2, $3, $4) RETURNING *",
        [userInfo.username, userInfo.email, userInfo.password, userRef]
      );
      this.user = res.rows[0];
      return this.createResponse(this.user);
    } catch (e) {
      this.setError(e);
      return this.createResponse(null);
    }
  }

  async getUserByID(userID) {
    try {
      await this.client.query(
        "SELECT * FROM users WHERE id=$1",
        [userID],
        (err, res) => {
          if (err) {
            this.setError(err);
          }
          this.user = res.rows[0];
          return this.createResponse(this.user);
        }
      );
    } catch (e) {
      this.setError(e);
      return this.createResponse(null);
    }
  }

  async getUserByEmail(userEmail) {
    try {
      await this.client.query(
        "SELECT * FROM users WHERE email=$1",
        [userEmail],
        (err, res) => {
          if (err) {
            this.setError(err);
          }
          this.user = res.rows[0];
          return this.createResponse(this.user);
        }
      );
    } catch (e) {
      this.setError(e);
      return this.createResponse(null);
    }
  }

  async getUserByUsername(username) {
    try {
      await this.client.query(
        "SELECT * FROM users WHERE username=$1",
        [username],
        (err, res) => {
          if (err) {
            this.setError(err);
          }
          this.user = res.rows[0];
          return this.createResponse(this.user);
        }
      );
    } catch (e) {
      this.setError(e);
      return this.createResponse(null);
    }
  }
}

module.exports = UserModel;
