import React, { useState } from "react";
import bgImage from "/assets/Images/background-image.png";
import logoImg from "/assets/Images/logo.png";
import { Link } from "react-router-dom";
import ConfirmEmailPopup from "../Component/ConfirmEmailPopup";
import axios from "axios";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const response = await axios.post(
       `${import.meta.env.VITE_BASE_URL}/forgot-password`,
        { email }
      );

      if (response.data.success == true) {
        setShowConfirmPopup(true);
      }
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data.message);
        const errors = error.response.data.errors;

        Object.entries(errors).forEach(([field, messages]) => {
          messages.forEach((msg) => {
            // toast.error(`${field}: ${msg}`);
            toast.error(` ${msg}`);
          });
        });
      } else {
        toast.error("Network Error:", error.message);
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
                Forgot Password?
              </h2>
              <div className="h-1 bg-(--primary-color) w-full"></div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 px-4 sm:px-6 pt-12 pb-8 overflow-hidden"
            >
              <div>
                <label className="block text-gray-600 text-sm">
                  Please Enter Your Email Address
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Dosamarvís@test.com"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-(--primary-color) focus:outline-none py-2 text-black placeholder-gray-700 transition"
                />
              </div>

              <button
                disabled={loading}
                className={`w-full bg-(--primary-color) ${
                  loading ? "opacity-50  cursor-not-allowed" : "cursor-pointer"
                }   text-white sora-bold py-2 rounded-lg hover:bg-blue-800 transition duration-200`}
              >
                Reset Password
              </button>

              <div>
                <p className="text-center text-gray-700">
                  Already Registered?{" "}
                  <Link
                    to="/app/signin"
                    className="sora-bold text-gray-900 hover:text-blue-900 transition"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showConfirmPopup && (
        <ConfirmEmailPopup
          setShowConfirmPopup={setShowConfirmPopup}
          email={email}
        />
      )}
    </>
  );
};

export default ForgotPassword;
