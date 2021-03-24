const homeModel = require("../models/home.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/User.model");
module.exports.register = async (req, res, next) => {
  try {
    //req.body = name,email,password
    // console.log(req.body);
    const user = await homeModel.userModel.create(req.body);

    // tao token
    const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET);

    res.status(200).json({
      status: "success",
      data: { token, userName: user.name },
    });
  } catch (error) {
    return next(error);
  }
};
module.exports.login = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      // Email isn't correct
      const err = new Error("Email is not correct");
      err.statusCode = 400; // Loi register or login
      return next(err);
    }
    // console.log(user);
    // check password:
    const validatePass = bcrypt.compareSync(req.body.password, user.password);
    if (validatePass) {
      const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET);
      // console.log(token);

      res.status(200).json({
        status: "success",
        data: { token, userName: user.name },
      });
    } else {
      // Password not correct!!!
      const err = new Error("Password is not correct");
      err.statusCode = 400; // Loi register or login
      return next(err);
    }
  } catch (error) {
    return next(error);
  }
};

module.exports.getCurrentUser = async (req, res, next) => {
  const data = { user: null };
  try {
    const user = await UserModel.findOne({ _id: req.user.userId });
    data.user = { userName: user.name };
    return res.status(200).json({
      status: "sucess",
      data,
    });
  } catch (error) {
    return res.json(data);
  }
};
