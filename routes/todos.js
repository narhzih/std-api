var express = require("express");
var router = express.Router();
const todoController = require("./../app/controller/todoController");
const authMiddleware = require("./../app/middlewares/auth");

router.use(authMiddleware.protect);

router.get("/todos", todoController.getTodos);
router.get("/todo/:id", todoController.getTodo);
router.post("/todo", todoController.createTodo);
router.patch("/todo/:id", todoController.updateTodo);
router.delete("/todo/:id", todoController.deleteTodo);
