const catchAsync = require("./../utils/errors/catchAsyncError");
exports.createTodo = catchAsync(async (req, res, next) => {});
exports.getTodo = catchAsync(async (req, res, next) => {});
exports.getTodos = catchAsync(async (req, res, next) => {});
exports.getOngoingTodos = catchAsync(async (req, res, next) => {});
exports.CompletedTodos = catchAsync(async (req, res, next) => {});
exports.updateTodo = catchAsync(async (req, res, next) => {});
exports.deleteTodo = catchAsync(async (req, res, next) => {});
