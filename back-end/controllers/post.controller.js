const homeModel = require("../models/home.model");
const postModel = require("../models/Post.model");
const homeController = require("./home.controller");
module.exports.createOnePost = async (req, res, next) => {
  try {
    const { userId } = req.user;

    const post = await postModel.create({ ...req.body, author: userId });
    res.status(200).json({
      status: "sucess",
      data: { post },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports.getAllPost = async (req, res, next) => {
  try {
    const posts = await postModel
      .find()
      .populate("author", "name createdAt updatedAt");
    // or .populate({path: "author", select:["name createdAt updatedAt"]});

    res.status(200).json({
      status: "success",
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports.editOnePost = async (req, res, next) => {
  try {
    const { postId } = req.params;

    const post = await homeModel.postModel.findByIdAndUpdate(
      postId,
      { ...req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "success",
      data: { post },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports.deleteOnePost = async (req, res, next) => {
  try {
    const { postId } = req.params;

    await homeModel.postModel.findByIdAndDelete(postId);
    res.status(200).json({
      status: "success",
      message: "Post has been deleted",
    });
  } catch (error) {
    return next(error);
  }
};
