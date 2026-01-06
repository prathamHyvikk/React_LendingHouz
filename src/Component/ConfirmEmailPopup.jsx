import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ConfirmEmailPopup = ({ setShowConfirmPopup, email }) => {
  const role = useSelector((state) => state.person.value);
  return (
    <>
      <div
        id="reset-password-popup"
        className="fixed inset-0 bg-black/50  flex items-center justify-center z-70"
      >
        <div className="sm:w-98 w-72 flex gap-2 justify-center items-center flex-col bg-white p-3 sm:p-4 sm:pb-4 rounded-xl shadow-2xl">
          <div className="flex gap-2 items-center text-sm sm:text-2xl mt-2">
            <h4 className="sm:text-[28px] text-[22px] text-black sora-bold text-center mb-4">
              Reset Your Password
            </h4>
          </div>
          <p className="text-center sm:text-[14px] text-[12px] pb-2 px-2 sm:px-6">
            We’ve sent an email with reset password instructions to
            <span className="font-semibold"> {email}</span>
          </p>
          <div className="flex flex-col items-center gap-1">
            <span className="text-[12px] sm:text-[14px]">
              Didn’t receive an email?
            </span>
            <p className=" sora-semibold text-[12px] sm:text-sm">
              Contact at:{" "}
              <span className="underline sora-medium">Info@LendingHouz.com</span>
            </p>
          </div>

          <Link to={`/${role}/signin`} className="text-center mt-4">
            <button
              onClick={() => setShowConfirmPopup(false)}
              id="cancel-reset-popup"
              className="sm:px-12 px-8 py-2 bg-(--primary-color) hover:bg-blue-900 transition-colors duration-300 text-white cursor-pointer text-sm rounded-lg"
            >
              Close
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ConfirmEmailPopup;
