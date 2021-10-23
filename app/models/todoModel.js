const BaseModel = require("./BaseModel");

class TodoModel extends BaseModel {
  constructor() {
    super("users");
  }
  getTodos(userID) {}
  getCompletedTodos(userID) {}
  getOngoingTodos(userID) {}
  getTodo(userID, todoID) {}
  createTodo(userID, todo) {}
  updateTodo(userID, todoID, todo) {}
  deleteTodo(userId, todoID) {}
}
