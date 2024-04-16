"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blog = exports.user = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.user = prisma.user;
exports.blog = prisma.blog;
