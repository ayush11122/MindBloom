import { Avatar } from "./BlogCards";
import { Link, useNavigate } from "react-router-dom";

export const Appbar = () => {

    const navigate = useNavigate();
    const LogOut = () => {
        sessionStorage.clear();
        navigate("/signin");
      };
      const name = sessionStorage.getItem("name");
  return (

    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto justify-between items-center flex">
        <h1 className="text-3xl font-bold">
          <Link to={"/blogs"}>MindBloom</Link>
        </h1>
        <nav className="flex">
          <div className="text-white mx-2">
            {" "}
            <Link to={`/publish`}>
              <button
                type="button"
                className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                New
              </button>
            </Link>
          </div>
          <div className="text-white mx-2">
            
             <button onClick={LogOut}>  <Avatar name={name || "anonymous"} /></button>
             
          </div>
        </nav>
      </div>
    </header>
  );
};