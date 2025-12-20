import React, { useState } from "react";
import logoImg from "/assets/Images/logo.png";
import bgImage from "/assets/Images/background-image.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPersonRole } from "../features/personRole";

const AdminSignup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPersonRole("admin"));
    navigate("/admin/dashboard");
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
                  placeholder="Dosamarvís"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-(--primary-color) focus:outline-none py-2 text-black placeholder-gray-700 transition"
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
                  placeholder="Dosamarvís@test.com"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-(--primary-color) focus:outline-none py-2 text-black placeholder-gray-700 transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="1234124512"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-(--primary-color) focus:outline-none py-2 text-black placeholder-gray-700 transition"
                />
              </div>

              <div>
                <label className="block text-gray-600 text-sm">
                  Date of Birth
                </label>
                <input
                  type="text"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  placeholder="12/05/2025"
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

              <div>
                <label className="block text-gray-600 text-sm">
                  Confirm Your Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="*******"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-(--primary-color) focus:outline-none py-2 text-black placeholder-gray-700 transition"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-(--primary-color) text-white sora-bold py-2 rounded-lg mt-2 hover:bg-blue-800 transition duration-200 cursor-pointer"
              >
                Sign Up
              </button>

              <p className="text-center text-gray-700 ">
                Already Registered?{" "}
                <Link
                  to="/admin/signin"
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

export default AdminSignup;
