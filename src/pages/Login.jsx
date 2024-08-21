import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const [passwordShow, setPasswordShow] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>
        <form onSubmit={loginUser}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                type={passwordShow ? "text" : "password"}
                id="password"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-600"
              >
                {passwordShow ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="mt-3 w-full py-2 px-4 font-semibold rounded-md bg-black text-white hover:opacity-70 transition ease"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
