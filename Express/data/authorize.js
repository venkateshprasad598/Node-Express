const auth = (res, req, next) => {
  console.log("Auth");
  next();
};
module.exports = auth;
