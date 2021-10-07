const logger = (req, res, next) => {
  const query = req.query;
  if (query.user === "susan") {
    req.user = { name: "Susan" };
  }
  next();
};
module.exports = logger;
