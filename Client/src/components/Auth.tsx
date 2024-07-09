import { ChangeEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SignUpTypeSchema } from "@ayush11122/common/src/dist";
import axios from "axios";
import { BACKEND_URL } from "../config";
const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignUpTypeSchema>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/user/${type === "signup" ? "signup":"signin"}`,{
        ...postInputs
      })
        const token = response.data.token;
        const name = response.data.name;
        console.log(name, token, response);
        sessionStorage.setItem("token", token)
        sessionStorage.setItem("name", name)
        navigate("/blogs")
    } catch(e) {
        console.log("error")
        alert("error in request")
    }
  }

  return (
    <div className=" text-slate-700 justify-center h-screen flex flex-col items-center">
      <div className="text-2xl font-bold">
        {type === "signup" ? "Create an account" : "Login to your account"}
        </div>
      <div className="flex mb-3">
        <div className="">
          { type ==="signup" ? "Already have an account?" : "Don't have an account?"}
          </div>{" "}
        <div className="underline px-2">
          <Link to={type === "signup" ? "/signin" : "/signup"}>
          {type === "signup"? "Sign In" : "Sign Up"}
          </Link>
        </div>
      </div>
      {type === "signup" ? 
      <LabelledInput
        label="Name"
        placeholder="Ayush Srivastava"
        onChange={(e) => {
          setPostInputs((postInputs) => ({
            ...postInputs,
            name: e.target.value,
          }));
        }}
      /> : null}
      <LabelledInput
        label="Email"
        placeholder="ayush@gmail.com"
        onChange={(e) => {
          setPostInputs((postInputs) => ({
            ...postInputs,
            email: e.target.value,
          }));
        }}
      />
      <LabelledInput
        label="Password"
        placeholder="123456"
        type="password"
        onChange={(e) => {
          setPostInputs((postInputs) => ({
            ...postInputs,
            password: e.target.value,
          }));
        }}
      />
      <button
        onClick={sendRequest}
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
         focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800
          dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
        {type === "signup"  ?  "Sign Up": "Sign In"}
      </button>
    </div>
  );
};
export default Auth;

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({label, placeholder, onChange, type}: LabelledInputType) {
  return (
    <div className="my-2 flex flex-row items-center">
      <label className="block text-gray-700 text-sm font-bold mb-2 pt-2 px-2">
        {label}
      </label>
      <input
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type={type || "text"}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
