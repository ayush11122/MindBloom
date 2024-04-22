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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignIn = exports.SignUp = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const DB_1 = require("../DB/DB");
const common_1 = require("@ayush11122/common");
require("dotenv").config();
const secret = process.env.SECRET_KEY;
const SignUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { success } = common_1.SignUpSchema.safeParse(req.body);
    if (!success) {
        return res.status(404).json({ message: "Invalid Input" });
    }
    const { email, password, name } = req.body;
    try {
        const response = yield DB_1.user.create({
            data: {
                email,
                password,
                name,
            },
        });
        if (!response) {
            res.status(401).json("Invalid credentials");
        }
        let token = jsonwebtoken_1.default.sign({ email: email, password: password }, secret);
        res.status(200).json({
            token,
            name,
        });
    }
    catch (_a) {
        res.status(401).json("Error while SignUp");
    }
});
exports.SignUp = SignUp;
const SignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { success } = common_1.SignInSchema.safeParse(req.body);
    if (!success) {
        return res.status(404).json({ message: "Invalid Input" });
    }
    const { email, password } = req.body;
    try {
        const response = yield DB_1.user.findUnique({
            where: {
                email,
                password,
            },
            select: {
                name: true,
            },
        });
        const name = response === null || response === void 0 ? void 0 : response.name;
        if (!response) {
            res.status(401).send("Invalid credentials");
        }
        let token = jsonwebtoken_1.default.sign({ email: email, password: password }, secret);
        res.status(200).send({
            token,
            name,
        });
    }
    catch (error) {
        res.status(401).send("Error while SignIn");
    }
});
exports.SignIn = SignIn;
