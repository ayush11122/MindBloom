import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import { BlogType } from "../pages/Blogs";

export const useBlogs = () => {
    const token = 'Bearer ' + sessionStorage.getItem("token");
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<BlogType[]>([]);

    useEffect(() =>{
        const fetchBlog = async () =>{
     await axios.get(`${BACKEND_URL}/blog/`, {
    headers:{
        'Authorization': token
    }   
    }).then(response => {
        setBlogs(response.data);
        setLoading(false);
    }).catch(error => console.log(error));
}
fetchBlog();
},[]);

return {loading, blogs}
}

export const useBlog = (id :any) => {
    console.log(id)
    const token = 'Bearer ' + sessionStorage.getItem("token");
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<BlogType>();

    useEffect(() =>{
        const fetchBlog = async () =>{
     await axios.get(`${BACKEND_URL}/blog/${id}`, {
    headers:{
        'Authorization': token
    }   
    }).then(response => {
        console.log(`${BACKEND_URL}/blog/${id}`)
        setBlog(response.data);
        setLoading(false);
    }).catch(error => console.log(error));
}
fetchBlog();
},[id]);

return {loading, blog}
}
