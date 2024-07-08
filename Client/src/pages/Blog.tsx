import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";

const Blog = () => {
  const { id } = useParams();
  const {blog, loading} = useBlog(id);
  if(loading){
    return <div>loading...</div>
  }
  if (!blog) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <FullBlog  blog ={blog }/>
    </div>
  )
}

export default Blog