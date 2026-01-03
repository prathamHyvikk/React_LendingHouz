import React, { useEffect, useState } from "react";
import logoImg from "/assets/Images/logo.png";
import bgImage from "/assets/Images/background-image.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPersonRole } from "../features/personRole";
import axios from "axios";
import toast from "react-hot-toast";
import { setAuthenticate } from "../features/authenticate";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const { pathname } = useLocation();

  if (pathname.includes("/app")) {
    dispatch(setPersonRole("app"));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/register`,
        {
          name,
          email,
          phone,
          dob,
          password,
          c_password: confirmPassword,
          user_type: "C",
        }
      );

      toast.success(response.data.message);
      navigate("/");
      dispatch(setAuthenticate(true));
    } catch (error) {
      if (error.response) {
        const errors = error.response.data.errors;

        Object.entries(errors).forEach(([field, messages]) => {
          messages.forEach((msg) => {
            toast.error(` ${msg}`);
          });
        });
      } else {
        toast.error(error?.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center h-[1000px] flex items-center justify-center p-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute w-full h-[1000px] bg-white/90 top-0 left-0 z-1"></div>
        <div className="w-full max-w-md relative z-10">
          <div className=" rounded-3xl shadow-2xl  bg-[#F2F2F2]">
            <div className="text-center bg-white pt-10 px-6 rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-center mb-2">
                <img src={logoImg} className="w-64" alt="logo" />
              </div>
              {/* Sign Up Heading  */}
              <h2 className="text-2xl sora-bold text-center text-(--primary-color) mb-2">
                Sign Up
              </h2>
              <div className="h-1 bg-(--primary-color) w-full "></div>
            </div>

            <form className="space-y-6 bg-[#F2F2F2] px-4 sm:px-6 pt-12 pb-8 overflow-hidden">
              <div>
                <label className="block text-gray-600 text-sm">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-(--primary-color) focus:outline-none py-2 text-black placeholder-gray-400 transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm">
                  Email Address
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-(--primary-color) focus:outline-none py-2 text-black placeholder-gray-400 transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm">Phone</label>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone "
                  className="w-full bg-transparent border-b border-gray-600 focus:border-(--primary-color) focus:outline-none py-2 text-black placeholder-gray-400 transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  max={new Date().toISOString().split("T")[0]}
                  placeholder="12/05/2025"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-(--primary-color) focus:outline-none py-2 text-black placeholder-gray-400 transition"
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
                  placeholder="Enter your password"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-(--primary-color) focus:outline-none py-2 text-black placeholder-gray-400 transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm">
                  Confirm Your Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder=" Enter Confirm Password"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-(--primary-color) focus:outline-none py-2 text-black placeholder-gray-400 transition"
                />
              </div>

              <button
                onClick={handleSubmit}
                className={`w-full ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                } bg-(--primary-color) text-white sora-bold py-2 rounded-lg mt-2 hover:bg-blue-800 transition duration-200 cursor-pointer`}
              >
                Sign Up
              </button>

              <p className="text-center text-gray-700 ">
                Already Registered?{" "}
                <Link
                  to="/app/signin"
                  className="sora-bold text-gray-900 hover:text-blue-900 transition"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
