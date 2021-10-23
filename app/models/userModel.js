const BaseModel = require("./BaseModel");

class UserModel extends BaseModel {
  constructor() {
    super("users");
  }
  getUserByID(userID) {}
  getUserByEmail(userEmail) {}
  getUserByUsername(username) {}
  // verifyPassword(user) {}
  setError(err) {
    this.isError = true;
    this.error = err;
  }
}
