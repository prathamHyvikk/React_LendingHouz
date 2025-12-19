import React, { useState } from "react";
import logoImg from "/assets/Images/logo.png";
import bgImage from "/assets/Images/background-image.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPersonRole } from "../features/personRole";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

    const dispatch = useDispatch();

  const { pathname } = useLocation();
  

  if (pathname.includes("/app")) {
    dispatch(setPersonRole("app"));
  }

  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center h-screen flex items-center justify-center p-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute w-full h-full bg-white/90 top-0 left-0 z-1"></div>
        <div className="w-full max-w-md relative z-10">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-[#F2F2F2]">
            <div className="text-center bg-white pt-10 px-6 rounded-3xl overflow-hidden shadow-xl">
              <div className="flex items-center justify-center mb-2">
                <img src={logoImg} className="w-64" alt="" />
              </div>

              <h2 className="text-2xl sora-bold text-center text-(--primary-color) mb-2">
                Sign In
              </h2>
              <div className="h-1 bg-(--primary-color) w-full"></div>
            </div>

            <form
              action="/dashboard"
              className="space-y-6 px-4 sm:px-6 pt-12 pb-8 overflow-hidden"
            >
              <div>
                <label className="block text-gray-600 text-sm">
                  Email Address
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Dosamarvís@test.com"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-(--primary-color) focus:outline-none py-2 text-black placeholder-gray-700 transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm">
                  Create New Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="12345678"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-(--primary-color) focus:outline-none py-2 text-black placeholder-gray-700 transition"
                />
              </div>

              <div className="-mt-4">
                <input type="checkbox" />
                <span className="text-gray-500"> Remember for 30 Days</span>
              </div>

              <Link to="/app/dashboard">
                <button
                  // type="submit"
                  className="w-full bg-(--primary-color) cursor-pointer text-white sora-bold py-2 rounded-lg mb-6 hover:bg-blue-800 transition duration-200"
                >
                  Sign In
                </button>
              </Link>

              <div>
                <Link to="/app/forgot-password">
                  <p className="text-red-500 sora-semibold text-center">
                    Forget Password
                  </p>
                </Link>

                <p className="text-center text-gray-700 pt-4">
                  Dont Have an Account?{" "}
                  <Link
                    to="/app/signup"
                    className="sora-bold text-gray-900 hover:text-blue-900 transition"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
