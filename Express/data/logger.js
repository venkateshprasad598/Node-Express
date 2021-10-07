const logger = (req, res, next) => {
  console.log(req.url);
  req.user = "Hello Boss";
  next();
};
module.exports = logger;
