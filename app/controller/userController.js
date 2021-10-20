exports.firstCall = (req, res) => {
  res.status(201).json({
    status: "success",
    message: "Everything's fine!",
  });
};
