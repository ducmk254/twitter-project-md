const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Name must be required"],
      min: 3,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Email must be required"],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Password must be required"],
      min: [6, "Password must be at least 6 characters"],
    },
  },
  { timestamps: true }
);

//pre-middleware:

userSchema.pre('save', function(next){
  let user = this;
  bcryptjs.hash(user.password, 10, function(err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

module.exports = mongoose.model("User", userSchema);
