const BaseModel = require("./BaseModel");

class UserModel extends BaseModel {
  constructor() {
    super("users");
  }
  getUserByID(userID) {
    this.client
      .query("SELECT * FROM users WHERE id=$1 LIMIT 1 RETURNING *", userID)
      .then((res) => {
        return res.rows[0];
      })
      .catch((err) => {
        this.setError(err);
      });
  }
  getUserByEmail(userEmail) {}
  getUserByUsername(username) {}
  // verifyPassword(user) {}
  setError(err) {
    this.isError = true;
    this.error = err;
  }
}
