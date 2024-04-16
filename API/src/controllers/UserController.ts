import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { user, blog, userType } from "../DB/DB";
import { string } from "zod";
require("dotenv").config();

const secret: any = process.env.SECRET_KEY;

export const SignUp = async (req: Request, res: Response) => {
  const { email, password, name }: userType = req.body;

  try {
    const response = await user.create({
      data: {
        email,
        password,
        name
      },
    });

    if (!response) {
      res.status(401).send("Invalid credentials");
    }

    let token = jwt.sign({ email: email, password: password }, secret);
    res.status(200).send({
      token,
      name,
    });
  } catch {
    res.status(401).send("Error while SignUp");
  }
};

export const SignIn = async (req: Request, res: Response) => {
  const { email, password }  = req.body;

  try {
    const response = await user.findUnique({
      where: {
        email,
        password,
      },
      select: {
        name :true
      }
    });

    const name = response?.name
    if (!response) {
      res.status(401).send("Invalid credentials");
    }

    let token = jwt.sign({ email: email, password: password }, secret);
    res.status(200).send({
        token,
        name
    });
  } catch (error) {
    res.status(401).send("Error while SignIn");
  }
};