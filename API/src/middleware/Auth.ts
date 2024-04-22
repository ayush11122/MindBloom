import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { user } from "../DB/DB";

require("dotenv").config();
const secret: any = process.env.SECRET_KEY;

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization || "";

  if (!authHeader) return res.status(404).send("token not validate");
  if (!authHeader.startsWith("Bearer")) res.status(404).send("token not validate");

  const token = authHeader.split(" ")[1];
  
  try {
    const decoded: any = verify(token, secret);
    if (decoded) {
      const email = decoded.email;
      const User = await user.findUnique({
        where: {
          email,
        },
      });
      req.user = User;
      next();
    }
    else{
      res.status(404).json("token invalid")
    }
  } catch (err: any) {
    res.status(404).json(err);
  }
};
