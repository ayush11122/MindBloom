import BlogCards from "../components/BlogCards";
import { Appbar } from "../components/Appbar";
import { useBlogs } from "../hooks";

export interface BlogType {
    "id": string;
    "title": string;
    "content": string;
    "author": {
        "name": string;
    }

}

const  Blogs = () => {
    const {loading , blogs} = useBlogs();
    if(loading){
        return <div>loading...</div>
    }
  return (
    <div>
        <Appbar />
    <div className="flex justify-center">
    <div className=" max-w-xl">
         {blogs.map(blog => (
                <div>
                    <BlogCards 
                            id={blog.id}
                            authName={blog.author.name || "Anonymous"}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={"2nd Feb 2024"}
                    />
                 </div>))}
    </div></div></div>
  )
}

export default Blogs