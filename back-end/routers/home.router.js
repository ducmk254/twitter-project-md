const homeController = require("../controllers/home.controller");
const { verifyToken } = require("../middlewares/verifyToken");
module.exports = (app) => {
  app
    .route("/api/v1/author/register")
    .post(homeController.userController.register);
  app.route("/api/v1/author/login").get(homeController.userController.login);

  app
    .route("/api/v1/posts")
    .get(homeController.postController.getAllPost)
    .post(verifyToken, homeController.postController.createOnePost); // Truoc khi tao duoc post moi can login truoc

  app
    .route("/api/v1/posts/:postId")
    .put(verifyToken, homeController.postController.editOnePost)
    .delete(verifyToken, homeController.postController.deleteOnePost);

  app.all("*", (req, res, next) => {
    const err = new Error("Route not found");
    err.statusCode = 404;
    next(err);
  });
};
