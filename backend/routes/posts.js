const express = require("express");
const PostController = require("../controller/posts");

const checkToken = require("../middleware/check-auth");

const extractFile = require("../middleware/file");

const router = express.Router();




router.post('',checkToken, extractFile, PostController.createPost );

router.put("/:id", checkToken,extractFile, PostController.updatePost );

router.get('', PostController.getPosts);


router.get("/:id", PostController.getPost );


router.delete("/:id", checkToken, PostController.deletePost);


module.exports = router;