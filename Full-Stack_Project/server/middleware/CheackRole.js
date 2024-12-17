const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res
      .status(400)
      .json({ massage: "you have not permision to get all notes" });
  }
  next();
};

module.exports = isAdmin;
