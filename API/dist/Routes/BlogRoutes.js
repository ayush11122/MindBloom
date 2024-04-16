"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BlogController_1 = require("../controllers/BlogController");
const Auth_1 = require("../middleware/Auth");
const router = (0, express_1.Router)();
router.get('/', Auth_1.Auth, BlogController_1.GetAllBlog);
router.get('/myblog', Auth_1.Auth, BlogController_1.GetMyBlog);
router.get('/:BlogId', Auth_1.Auth, BlogController_1.GetOneBlog);
router.post('/', Auth_1.Auth, BlogController_1.PostBlog);
router.put('/', Auth_1.Auth, BlogController_1.UpdateBlog);
exports.default = router;