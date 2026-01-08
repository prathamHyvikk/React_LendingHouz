import React from "react";
import ModalWrapper from "./ModalWrapper";

const EditCardPopup = ({ setShowCardPopup }) => {
  console.log("hello");
  return (
    <>
      <ModalWrapper>
        <div className="relative max-w-[400px] mx-auto bg-white rounded-xl shadow-2xl p-6 md:p-6">
          <button
            onClick={() => setShowCardPopup(false)}
            className="absolute top-2 right-2 px-2 py-1 rounded-md cursor-pointer"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <h1 className="text-2xl sora-bold mb-4">
            Add / Edit <span className="text-(--primary-color)">Card</span>
          </h1>

          <div className="flex justify-between items-center space-x-2 mb-4">
            <div className="w-12 flex justify-center items-center">
              <svg viewBox="0 0 100 65" className="w-full h-auto">
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="65"
                  rx="10"
                  fill="#21579B"
                ></rect>
                <text
                  x="50"
                  y="32"
                  fontFamily="Verdana"
                  fontSize="20"
                  fontWeight="bold"
                  fill="white"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  VISA
                </text>
              </svg>
            </div>
            <div className="w-12 flex justify-center items-center">
              <svg viewBox="0 0 100 65" className="w-full h-auto">
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="65"
                  rx="10"
                  fill="#E80018"
                ></rect>
                <circle cx="35" cy="32.5" r="15" fill="#FF5F00"></circle>
                <circle cx="65" cy="32.5" r="15" fill="#EB001B"></circle>
              </svg>
            </div>
            <div className="w-12 flex justify-center items-center">
              <svg viewBox="0 0 100 65" className="w-full h-auto">
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="65"
                  rx="10"
                  fill="#00358C"
                ></rect>
                <text
                  x="50"
                  y="45"
                  fontFamily="Verdana"
                  fontSize="16"
                  fontWeight="bold"
                  fill="white"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  UnionPay
                </text>
              </svg>
            </div>
            <div className="w-12 flex justify-center items-center">
              <svg viewBox="0 0 100 65" className="w-full h-auto">
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="65"
                  rx="10"
                  fill="#007BC1"
                ></rect>
                <text
                  x="50"
                  y="35"
                  fontFamily="Verdana"
                  fontSize="12"
                  fontWeight="bold"
                  fill="white"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  AMERICAN EXPRESS
                </text>
              </svg>
            </div>
            <div className="w-12 flex justify-center items-center">
              <svg viewBox="0 0 100 65" className="w-full h-auto">
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="65"
                  rx="10"
                  fill="#FFFFFF"
                  stroke="#CCCCCC"
                  strokeWidth="1"
                ></rect>
                <text
                  x="50"
                  y="35"
                  fontFamily="Verdana"
                  fontSize="20"
                  fontWeight="bold"
                  fill="#00358C"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  JCB
                </text>
              </svg>
            </div>
          </div>

          <form className="space-y-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="">
                Name on Card
              </label>
              <input
                type="text"
                name="name"
                placeholder="Michael"
                className="w-full px-4 py-2 bg-gray-100 rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="card-number" className="">
                Card Number
              </label>
              <input
                type="text"
                name="card-number"
                placeholder="1111-1111--1111"
                className="w-full px-4 py-2 bg-gray-100 rounded-lg"
              />
            </div>

            <div className="flex justify-between gap-4">
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="exp-date" className="">
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="exp-date"
                  name="exp-date"
                  placeholder="12/5/202"
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg"
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="cvv" className="">
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  placeholder="221"
                  className="w-full px-4 py-2 bg-gray-100 rounded-lg"
                />
              </div>
            </div>

            <div className="text-sm text-gray-500">
              <h3 className="font-bold text-gray-800 mb-1">
                Learn More About Security
              </h3>
              <p>
                Stripe has been audited by a PCI-certified auditor and is
                certified to PCI Service Provider level 1.
              </p>
              <button
                type="button"
                className="mt-4 px-4 py-2 text-red-500 border border-red-500 rounded-lg font-semibold hover:bg-[#FDEDED] transition-colors"
              >
                Powered by Stripe
              </button>
            </div>

            <div className="">
              <button
                type="submit"
                className="w-full bg-(--primary-color) text-white py-2 text-sm rounded-full shadow-lg"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </ModalWrapper>
    </>
  );
};

export default EditCardPopup;
