module.exports.errHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  //Duplicate :
  if (err.code === 11000) {
    err.statusCode = 400;
    for (let i in err.keyValue) {
      err.message = `${i} have to be unique`;
    }
  }

  // Input required:
  if (err.name === "ValidationError") {
    err.statusCode = 400;
    err.message = err.message;
  }

  // ObjectID : not found :
  if (err.kind === "ObjectId") {
    err.statusCode = 404;
    err.message = `${err.value} is not found because of wrong ID`;
  }

  res.status(err.statusCode).json({
    status: "fail",
    message: err.message,
  });
};
