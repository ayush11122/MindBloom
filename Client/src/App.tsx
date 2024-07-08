import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import { Publish } from "./pages/Publish";
import { Defended, Protected } from "./pages/Protected";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Routes>
      
        <Route path="/" element ={<h1 className="text-3xl font-bold underline">Hello world!</h1>} />
        <Route element= {<Defended />}>
        <Route path="/signup" element = {<SignUp/>}/>
        <Route path="/signin" element = {<SignIn/>}/>
        </Route>
        <Route element= {<Protected />}>
        <Route path="/blogs" element = {<Blogs/>}/>
        <Route path="/blog/:id" element = {<Blog/>}/>
        <Route path="/publish" element = {<Publish />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
