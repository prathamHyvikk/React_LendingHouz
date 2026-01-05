import React, { useState } from "react";
import bgImage from "/assets/Images/background-image.png";
import logoImg from "/assets/Images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ConfirmEmailPopup from "../Component/ConfirmEmailPopup";
import axios from "axios";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
       `${import.meta.env.VITE_BASE_URL}/reset-password`,
        { email, token, password, password_confirmation: confirmPassword }
      );

      // setShowConfirmPopup(true);
      toast.success(response.data.message || "success");
      navigate("/app/signin");
    } catch (error) {
      if (error.response) {
        const apiErrors = error.response.data.errors;
        setError(apiErrors);
        if (apiErrors) {
          Object.entries(apiErrors).forEach(([field, messages]) => {
            messages.forEach((msg) => {
              toast.error(` ${msg}`);
            });
          });
        } else {
          console.log("elsePart");
          toast.error(error?.response.data.message);
        }
      }
    } finally {
      setLoading(false);
    }
  };

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
                Reset Password
              </h2>
              <div className="h-1 bg-(--primary-color) w-full"></div>
            </div>

            <form className="space-y-6 px-4 sm:px-6 pt-12 pb-8 overflow-hidden">
              <div>
                <label className="block text-gray-600 text-sm">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-(--primary-color) focus:outline-none py-2 text-black placeholder-gray-700 transition"
                />
                {
                  error?.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {error?.password[0]}
                    </p>
                  )
                }
              </div>

              <div>
                <label className="block text-gray-600 text-sm">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-(--primary-color) focus:outline-none py-2 text-black placeholder-gray-700 transition"
                />
                {
                  error?.password_confirmation && (
                    <p className="text-red-500 text-xs mt-1">
                      {error?.password_confirmation[0]}
                    </p>
                  )
                }
              </div>

              <button
                onClick={(e) => handleSubmit(e)}
                className={`w-full bg-(--primary-color) ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                } cursor-pointer text-white sora-bold py-2 rounded-lg hover:bg-blue-800 transition duration-200`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
