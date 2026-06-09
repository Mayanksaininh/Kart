import React , { useContext }  from "react";
import{logo} from "../utils/constant,jsx"
import { useNavigate } from "react-router-dom";
import { AuthDataContext } from "../context/AuthContext";
import { useState } from "react";
import axios from "axios"


const Login = () => {

  
      const {ServerUrl}  = useContext(AuthDataContext)
      const[email,setemail] = useState("")
      const[password , setpassword] = useState("")
      
      const handlelogin = async(e) =>{
      e.preventDefault()
      try {
        const result = await axios.post(ServerUrl + "/api/auth/login" , {
          email,password
        } , 
        {withCredentials : true})
        console.log(result.data);
      } 
      
      catch (error) {
        console.log(error);
      }
    }


  const navigate = useNavigate()
  return (
    <div className="bg-black/50 p-6 rounded-xl shadow-md w-full max-w-md mx-auto mt-8 px-6 pt-8">
      
      <div className="sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src={logo}
          className="mx-auto h-15 w-auto"
        />
        <h2 className="mt-4 text-center text-2xl font-bold tracking-tight text-white ">
          Sign in to your account
        </h2>
         <h4 className="mt-3 text-center  tracking-tight text-white">
          Welcome to Kart, Place your Order
        </h4>
      </div>

      <div className="mt-5 sm:w-full sm:max-w-sm">
        <form className="space-y-6"  onSubmit={handlelogin}>
          <div>
            <label className="block text-sm font-medium text-gray-100">
              Email address
            </label>
            <input
              type="email"
              required
              className="mt-1 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white outline outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500" onChange={(e) => setemail(e.target.value)} value = {email}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-100">
              Password
            </label>
            <input
              type="password"
              required
              className="mt-1 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white outline outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500" onChange={(e) => setpassword(e.target.value)} value = {password}
            />
          </div>

          <button className="w-full rounded-md bg-indigo-500 py-1.5 text-white font-semibold hover:bg-indigo-400 ">
            Sign in
          </button>
        </form>
        <p 
              className="mt-3 text-center text-sm/6 text-gray-400 cursor-pointer" 
              onClick={() => navigate("/signup")}>
              Not User! Please signup, Click here!
        </p>
          <br></br>
          <div>
            <button className="flex items-center justify-center gap-3 w-full bg-white text-gray-700 font-medium py-2.5 px-4 rounded-md shadow-sm border border-gray-200 hover:bg-gray-300 transition cursor-pointe">


                {/* Google Icon */}
            <svg className="w-5 h-5" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.36 1.53 7.82 2.82l5.76-5.76C34.64 3.14 29.74 1 24 1 14.64 1 6.64 6.88 2.94 15.28l6.84 5.32C11.74 13.14 17.34 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.5 24c0-1.64-.14-2.82-.44-4.04H24v7.64h12.94c-.26 1.9-1.66 4.76-4.76 6.7l7.32 5.68C44.9 35.64 46.5 30.4 46.5 24z"/>
            <path fill="#FBBC05" d="M9.78 28.6A14.5 14.5 0 0 1 9 24c0-1.6.28-3.14.78-4.6l-6.84-5.32A23.96 23.96 0 0 0 1 24c0 3.88.94 7.54 2.94 10.92l6.84-5.32z"/>
            <path fill="#34A853" d="M24 47c6.48 0 11.92-2.14 15.9-5.84l-7.32-5.68c-2.02 1.4-4.74 2.38-8.58 2.38-6.66 0-12.26-3.64-14.22-8.6l-6.84 5.32C6.64 41.12 14.64 47 24 47z"/>
           </svg>
            <span>Sign Up with Google</span>
            </button>
          </div>
      </div>

    </div>
  );
};

export default Login