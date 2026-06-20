import React ,{ useContext } from "react";
import { useState } from "react";
import axios from "axios"
import {AuthDataContext} from "../Context/AuthContext"
import { useNavigate } from "react-router-dom";

const Login = () =>{

const navigate = useNavigate();
  
      const {ServerUrl}  = useContext(AuthDataContext)
  const[email,setemail] = useState("")
  const[password , setpassword] = useState("")

  const AdminLogin = async(e) =>{
      e.preventDefault()
    try {
      const result = await axios.post(ServerUrl + "/api/auth/adminlogin" , { email,password},
        {withCredentials : true})
        console.log(result);
          if (result.data) {
      navigate("/list");
    }
    } catch (error) {
       console.log(error);
    }
  }
    return (
        <>
        <div className="bg-black/50 p-6 rounded-xl shadow-md w-full max-w-md mx-auto mt-22 px-6 pt-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Logo"
            src="https://static.vecteezy.com/system/resources/thumbnails/026/956/862/small/shopping-cart-basket-png.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-2 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
          <h3 className="mt-2 text-center text-xl text-white">Welcome to Kart, For Admin Account</h3>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={AdminLogin}>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" onChange={(e) => setemail(e.target.value)} value = {email}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" onChange={(e) => setpassword(e.target.value)} value = {password}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}
        

export default Login 