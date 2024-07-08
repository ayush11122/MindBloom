import Auth from "../components/Auth"
import Quotes from "../components/Quotes"

const SignUp = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center">
      <div className="  w-full"><Auth type= "signup" /></div>
      <div className="h-screen text-center justify-items-stretch hidden lg:block"><Quotes /></div>

    </div>
  )
}

export default SignUp