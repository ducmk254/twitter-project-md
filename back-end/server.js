// dotenv:
require("dotenv").config();
//connect DB:
const { connectDB } = require("./configs/db");
connectDB();

// cors:
const cors = require("cors");

const express = require("express");
const app = express();
const router = require("./routers/home.router");
const port = process.env.APP_PORT;
const bodyParser = require("body-parser");
const { errHandler } = require("./middlewares/errHandler");

app.use(cors());

// body-parser : da duoc tich hop vao express roi hoac co the dung rieng package

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//router:
router(app);

// middleware xử lý khi có lỗi trong quá trình controller:
// thường đặt ở vị trí dưới cùng của middleware
app.use(errHandler);

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
