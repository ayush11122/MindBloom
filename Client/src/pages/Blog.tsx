import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { Appbar } from "../components/Appbar";
import { Spinner } from "../components/Spinner";

const Blog = () => {
  const { id } = useParams();
  const {blog, loading} = useBlog(id);
  if(loading){
    return(
      <div>
      <Appbar /> 
         <div className="h-screen flex flex-col justify-center">
          
         <div className="flex justify-center"><Spinner /></div>
         </div></div>
        )
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