import React from "react";
import{logo} from "../utils/constant,jsx"


const Login = () => {
  return (
    <div className="bg-black/50 p-6 rounded-xl shadow-md w-full max-w-md mx-auto mt-8 px-6 pt-8">
      
      <div className="sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src={logo}
          className="mx-auto h-15 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-100">
              Email address
            </label>
            <input
              type="email"
              required
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white outline outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-100">
              Password
            </label>
            <input
              type="password"
              required
              className="mt-2 block w-full rounded-md bg-white/5 px-3 py-1.5 text-white outline outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500"
            />
          </div>

          <button className="w-full rounded-md bg-indigo-500 py-1.5 text-white font-semibold hover:bg-indigo-400">
            Sign in
          </button>
        </form>
         <p className="mt-10 text-center text-sm/6 text-gray-400">
            Not User! Please signup
          </p>
      </div>

    </div>
  );
};

export default Login