"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Route_1 = __importDefault(require("./Routes/Route"));
const app = (0, express_1.default)();
require('dotenv').config();
const port = process.env.PORT || 3002;
app.use(express_1.default.json());
app.use('/api/v1', Route_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
