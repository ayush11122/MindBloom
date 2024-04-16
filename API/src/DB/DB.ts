import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const user = prisma.user
export const blog = prisma.blog

export interface userType {
    name : string,
    email : string,
    password : string
}