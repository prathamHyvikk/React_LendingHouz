import React, { useState } from "react";
import bgImage from "/assets/Images/background-image.png";
import logoImg from "/assets/Images/logo.png";
import { Link } from "react-router-dom";
import ConfirmEmailPopup from "../Component/ConfirmEmailPopup";
import axios from "axios";
import toast from "react-hot-toast";
import Input from "../Component/Input";

const ForgotPassword = () => {
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/forgot-password`,
        { email },
      );

      if (response.data.success == true) {
        setShowConfirmPopup(true);
      }
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data.message);
        const errors = error.response.data.errors;
        setErrors(errors);
        Object.entries(errors).forEach(([field, messages]) => {
          messages.forEach((msg) => {
            // toast.error(`${field}: ${msg}`);
            // toast.error(` ${msg}`);
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
        className="bg-no-repeat bg-cover bg-center h-screen flex items-center justify-center p-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute w-full h-full bg-white/90 top-0 left-0 z-1"></div>
        <div className="w-full max-w-md relative z-10">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-[#F2F2F2]">
            <div className="text-center px-8 pt-6 pb-4 border-b">
              <img src={logoImg} alt="logo" className="w-40 mx-auto mb-2" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Forgot Password
              </h2>
              <p className="text-sm text-gray-500"> change your password </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 px-4 sm:px-6 pt-12 pb-8 overflow-hidden"
            >
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />

              <button
                disabled={loading}
                className={`w-full bg-(--primary-color) ${
                  loading ? "opacity-50  cursor-not-allowed" : "cursor-pointer"
                }   text-white sora-bold py-2 rounded-lg hover:bg-blue-800 transition duration-200`}
              >
                {loading ? "Processing..." : "Reset Password"}
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
