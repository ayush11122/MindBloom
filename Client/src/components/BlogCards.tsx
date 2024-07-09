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
   <div className="border-b-3 border-slate-200 p-6 space-y-4">
      {/* Header with Avatar and Author Info */}
      <div className="flex items-center">
        <Avatar name={authName} />
        <div className="ml-4">
          <div className="font-thin">{authName}</div>
          <div className="text-slate-500 text-sm">{publishedDate}</div>
        </div>
      </div>
      
      {/* Title */}
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      
      {/* Content Preview */}
      <div className="text-gray-700">
        {content.slice(0, 300) + "..."}
      </div>
      
      {/* Reading Time */}
      <div className="text-sm text-gray-500">
        {`${Math.ceil(content.length / 1000)} minutes read`}
      </div>
      
      {/* Divider */}
      <div className="bg-slate-200 h-1 w-full"></div>
    </div>
    </Link>
  )
}



export function Avatar ({name}: {name : string}){

  return <div className=" mt-1 relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
  <span className="font-extralight text-xs text-gray-600 dark:text-gray-300"> {name[0]} </span>
</div>

}









export default BlogCards ;