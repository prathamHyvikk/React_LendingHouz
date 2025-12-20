import React from "react";
import ModalWrapper from "./ModalWrapper";
import { Link } from "react-router-dom";

const ThankyouPopup = () => {
  return (
    <>
      <ModalWrapper>
        <div className="bg-white rounded-xl w-full max-w-80 flex flex-col items-center justify-center shadow-lg p-6 relative">
          <div className="mb-3 flex justify-center ">
            <svg
              class="w-16 h-16 text-green-500"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              viewBox="0 0 24 24"
            >
              {" "}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              ></path>{" "}
            </svg>
          </div>

          <h2 className="text-xl sora-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-4 text-center">
            Your order has been successfully placed.
          </p>

          <Link
            to={"/admin/dashboard"}
            className="bg-blue-600 text-white cursor-pointer px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Continue
          </Link>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ThankyouPopup;
