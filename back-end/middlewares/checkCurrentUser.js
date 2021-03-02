const jwt = require("jsonwebtoken");

module.exports.checkCurrentUser = (req, res, next) => {
  const authorization = req.header("authorization");
  if (!authorization) {
    req.user = null;
    return next();
  }
  // get token:
  const token = authorization.replace("Bearer ", "");
  //verify token:
  try {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    req.user = { userId };
    //console.log(req.user)
    next();
  } catch (error) {
    req.user = null;
    next();
  }
};
