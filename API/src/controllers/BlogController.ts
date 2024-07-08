import { Request, Response } from "express";
import { blog } from "../DB/DB";
import { UpdateBlogSchema, CreateBlogSchema } from "@ayush11122/common";

export const GetMyBlog = async (req: Request, res: Response) => {
  const { id } = req.user;
  try {
    const userBlog = await blog.findMany({
      where: {
        authorId: id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        authorId: true,
      },
    });
    res.json(userBlog);
  } catch (err) {
    res.status(404).json(err);
  }
};

export const GetAllBlog = async (req: Request, res: Response) => {
  try {
    const AllBlog = await blog.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        author :{
          select: {
            name: true
          }
        }
      },
    });
    res.status(200).json(AllBlog);
  } catch (err) {
    res.status(404).json(err);
  }
};

export const GetOneBlog = async (req: Request, res: Response) => {
  const BlogId = req.params.BlogId;
  try {
    const OneBlog = await blog.findUnique({
      where: {
        id: BlogId,
      },
      select: {
        id: true,
        title: true,
        content: true,
        author :{
          select: {
            name: true
          }
        }
      },
    });
    res.status(200).json(OneBlog);
  } catch (err) {
    res.status(404).json(err);
  }
};

export const PostBlog = async (req: Request, res: Response) => {
  const { success } = CreateBlogSchema.safeParse(req.body);
  if (!success) {
    return res.status(404).json("Invalid Inputs");
  }

  const { id } = req.user;
  const { title, content } = req.body;

  try {
    const AddBlog = await blog.create({
      data: {
        authorId: id,
        title,
        content,
      },
      select: {
        id: true,
      },
    });
    res.status(200).json(AddBlog);
  } catch (err) {
    res.status(404).json(err);
  }
};

export const UpdateBlog = async (req: Request, res: Response) => {
  const { success } = UpdateBlogSchema.safeParse(req.body);
  if (!success) {
    return res.status(404).json("Invalid Inputs");
  }

  const { id, title, content } = req.body;
  const { id: authorId } = req.user;
  
  try {
    const UpdateBlog = await blog.update({
      where: {
        authorId,
        id,
      },
      data: {
        title,
        content,
      },
    });
    res.status(200).json(UpdateBlog);
  } catch (err) {
    res.status(404).json(err);
  }
};
