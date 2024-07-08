import { Request, Response } from "express";
export declare const SignUp: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const SignIn: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
