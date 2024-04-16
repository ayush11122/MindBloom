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
exports.Auth = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const DB_1 = require("../DB/DB");
require("dotenv").config();
const secret = process.env.SECRET_KEY;
const Auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization || "";
    if (!authHeader)
        return res.status(404).send("token not validate");
    if (!authHeader.startsWith("Bearer"))
        res.status(404).send("token not validate");
    const token = authHeader.split(" ")[1];
    try {
        const decoded = (0, jsonwebtoken_1.verify)(token, secret);
        if (decoded) {
            const email = decoded.email;
            const User = yield DB_1.user.findUnique({
                where: {
                    email,
                },
            });
            req.user = User;
            console.log("hello");
            next();
        }
        else {
            res.status(404).json("token invalid");
        }
    }
    catch (err) {
        res.status(404).json(err);
    }
});
exports.Auth = Auth;
