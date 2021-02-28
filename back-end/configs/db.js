const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect to DB sucessfully");
  } catch (error) {
    console.log("Cannot connect to DB: " + error);
    process.exit(1);
  }
};

module.exports = { connectDB };
