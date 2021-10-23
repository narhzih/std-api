exports.testCall = (req, res) => {
  res.status(201).json({
    status: "success",
    message: "You can access this route because you're logged in",
    data: {
      user: req.user,
    },
  });
};
