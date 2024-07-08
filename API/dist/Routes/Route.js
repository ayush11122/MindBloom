"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const BlogRoutes_1 = __importDefault(require("./BlogRoutes"));
const router = (0, express_1.Router)();
router.use('/user', UserRoutes_1.default);
router.use('/blog', BlogRoutes_1.default);
exports.default = router;
