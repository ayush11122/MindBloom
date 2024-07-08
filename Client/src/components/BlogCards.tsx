import { Link } from "react-router-dom";

interface BlogCardProps {
  id : string;
  authName: string;
  title : string;
  content : string;
  publishedDate? : string;
}

const BlogCards= ({id, authName, title, content, publishedDate} :BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="border-b-3 border-slate-200 p-4">
    <div className="flex items-center">  <Avatar name={authName}/>
    <div className="font-thin pl-2"> {authName} .</div><div className="pl-2 text-slate-500"> {publishedDate}</div></div>
    <div><p>{title}</p></div>
    <div>{content.slice(0,100) + "..."}</div>
    <div>{`${Math.ceil(content.length/100)} minutes`}</div>
    <div className="bg-slate-200 h-1 w-full"></div>
    </div>
    </Link>
  )
}



export function Avatar ({name}: {name : string}){

  return <div className=" mt-1 relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
  <span className="font-extralight text-xs text-gray-600 dark:text-gray-300"> {name[0]} </span>
</div>

}









export default BlogCards ;