const homeModel = require("../models/home.model");
const postModel = require("../models/Post.model");
const homeController = require("./home.controller");
module.exports.createOnePost = async (req, res, next) => {
  try {
    const { userId } = req.user;

    const post = await postModel.create({ ...req.body, author: userId });
    await post.populate("author", "name");
    const result = await postModel
      .findById(post._id)
      .populate("author", "name");
    // console.log("tao thanh cong bai post" + post);
    res.status(200).json({
      status: "sucess",
      data: { post: result },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports.getAllPost = async (req, res, next) => {
  try {
    const posts = await postModel
      .find()
      .populate("author", "name")
      // .limit(5)
      .sort({ _id: -1 });
    // or .populate({path: "author", select:["name createdAt updatedAt"]});
    // or .populate('author','name').select('name createdAt') lấy ra trong tên của author và lấy ra tên và thời gian tạo của posts

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

    const post = await homeModel.postModel
      .findByIdAndUpdate(
        postId,
        { ...req.body },
        { new: true, runValidators: true }
      )
      .populate("author", "name");
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
