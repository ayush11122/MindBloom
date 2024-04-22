"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlog = exports.PostBlog = exports.GetOneBlog = exports.GetAllBlog = exports.GetMyBlog = void 0;
const DB_1 = require("../DB/DB");
const common_1 = require("@ayush11122/common");
const GetMyBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    try {
        const userBlog = yield DB_1.blog.findMany({
            where: {
                authorId: id,
            },
            select: {
                id: true,
                title: true,
                content: true,
                published: true,
                authorId: true,
            },
        });
        res.json(userBlog);
    }
    catch (err) {
        res.status(404).json(err);
    }
});
exports.GetMyBlog = GetMyBlog;
const GetAllBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const AllBlog = yield DB_1.blog.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                published: true,
                authorId: true,
            },
        });
        res.status(200).json(AllBlog);
    }
    catch (err) {
        res.status(404).json(err);
    }
});
exports.GetAllBlog = GetAllBlog;
const GetOneBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const BlogId = req.params.BlogId;
    try {
        const OneBlog = yield DB_1.blog.findUnique({
            where: {
                id: BlogId,
            },
            select: {
                id: true,
                title: true,
                content: true,
                published: true,
                authorId: true,
            },
        });
        res.status(200).json(OneBlog);
    }
    catch (err) {
        res.status(404).json(err);
    }
});
exports.GetOneBlog = GetOneBlog;
const PostBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { success } = common_1.CreateBlogSchema.safeParse(req.body);
    if (!success) {
        return res.status(404).json("Invalid Inputs");
    }
    const { id } = req.user;
    const { title, content } = req.body;
    try {
        const AddBlog = yield DB_1.blog.create({
            data: {
                authorId: id,
                title,
                content,
            },
            select: {
                id: true,
            },
        });
        res.status(200).json(AddBlog);
    }
    catch (err) {
        res.status(404).json(err);
    }
});
exports.PostBlog = PostBlog;
const UpdateBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { success } = common_1.UpdateBlogSchema.safeParse(req.body);
    if (!success) {
        return res.status(404).json("Invalid Inputs");
    }
    const { id, title, content } = req.body;
    const { id: authorId } = req.user;
    try {
        const UpdateBlog = yield DB_1.blog.update({
            where: {
                authorId,
                id,
            },
            data: {
                title,
                content,
            },
        });
        res.status(200).json(UpdateBlog);
    }
    catch (err) {
        res.status(404).json(err);
    }
});
exports.UpdateBlog = UpdateBlog;
