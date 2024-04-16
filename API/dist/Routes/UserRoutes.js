"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const UserController_1 = require("../controllers/UserController");
router.post('/signup', UserController_1.SignUp);
router.post('/signin', UserController_1.SignIn);
exports.default = router;
