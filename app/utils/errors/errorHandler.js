const sendErrorProd = (err, req, res) => {
  // any error marked by isOperational is an error sent
  // from the application due to an anticipated behaviour or input
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  // B) Programming or other unknown error: don't leak error details
  // 1) Log error
  console.error("ERROR 💥", err);
  // 2) Send generic message
  return res.status(500).json({
    status: "error",
    message: "Something went very wrong!",
  });
};
const sendErrorDev = (err, req, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // Determine environment before sending error message
  if (process.env.ENV == "development") {
    sendErrorDev(err, req, res);
  } else if (process.env.ENV == "production") {
    // More error customization will be done in the future
    sendErrorProd(err, req, res);
  }
};
