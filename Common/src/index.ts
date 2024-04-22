import zod from "zod";

export const SignUpSchema = zod.object({
    name : zod.string().min(2),
    email : zod.string().email(),
    password : zod.string().min(4)
})

export const SignInSchema = zod.object({
    email : zod.string().email(),
    password : zod.string().min(6)
})

export const CreateBlogSchema = zod.object({
    title : zod.string(),
    content : zod.string()
})
 
export const UpdateBlogSchema = zod.object({
    id : zod.string(),
    title : zod.string(),
    content : zod.string()
})
 
export type SignInTypeSchema = zod.infer<typeof SignUpSchema>
export type SignUpTypeSchema = zod.infer<typeof SignUpSchema>
export type CreateBlogTypeSchema = zod.infer<typeof CreateBlogSchema>
export type UpdateBlogTypeSchema = zod.infer<typeof UpdateBlogSchema>