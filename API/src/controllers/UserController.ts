import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { user, userType } from "../DB/DB";
import { SignInSchema, SignUpSchema } from "@ayush11122/common";
require("dotenv").config();

const secret: any = process.env.SECRET_KEY;

export const SignUp = async (req: Request, res: Response) => {
  console.log(req.body);
  const { success } = SignUpSchema.safeParse(req.body);
  if (!success) {
    console.log("2", success);
    return res.status(404).json({ message: "Invalid Input" });
    
  }
  console.log("3");
  const { email, password, name }: userType = req.body;
  // try {
    console.log("check1", email, password);
    const response = await user.create({
      data: {
        email,
        password,
        name,
      },
    });
    console.log("check")
    if (!response) {
      res.status(401).json("Invalid credentials");
    }
    let token = jwt.sign({ email: email, password: password }, secret);
    res.status(200).json({
      token,
      name,
    });
  // } catch {
  //   res.status(401).json("Error while SignUp");
  // }
};

export const SignIn = async (req: Request, res: Response) => {
  const { success } = SignInSchema.safeParse(req.body);
  if (!success) {
    return res.status(404).json({ message: "Invalid Input" });
  }

  const { email, password } = req.body;

  try {
    const response = await user.findUnique({
      where: {
        email,
        password,
      },
      select: {
        name: true,
      },
    });

    const name = response?.name;
    if (!response) {
      res.status(401).send("Invalid credentials");
    }

    let token = jwt.sign({ email: email, password: password }, secret);
    res.status(200).send({
      token,
      name,
    });
  } catch (error) {
    res.status(401).send("Error while SignIn");
  }
};