import React from "react";
import ModalWrapper from "./ModalWrapper";

const EditCardPopup = ({onClose}) => {
  console.log("hello");
  return (
    <>
      <ModalWrapper onClose={onClose}>
        <div class="relative max-w-[400px] mx-auto bg-white rounded-xl shadow-2xl p-6 md:p-6">
          <button
            onclick="closePopup(event, 'add-card')"
            class="absolute top-2 right-2 px-2 py-1 rounded-md cursor-pointer"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>

          <h1 class="text-2xl font-bold mb-4">
            Add / Edit <span class="text-(--primary-color)">Card</span>
          </h1>

          <div class="flex justify-between items-center space-x-2 mb-4">
            <div class="w-12 flex justify-center items-center">
              <svg viewBox="0 0 100 65" class="w-full h-auto">
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
                  font-family="Verdana"
                  font-size="20"
                  font-weight="bold"
                  fill="white"
                  text-anchor="middle"
                  alignment-baseline="middle"
                >
                  VISA
                </text>
              </svg>
            </div>
            <div class="w-12 flex justify-center items-center">
              <svg viewBox="0 0 100 65" class="w-full h-auto">
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
            <div class="w-12 flex justify-center items-center">
              <svg viewBox="0 0 100 65" class="w-full h-auto">
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
                  font-family="Verdana"
                  font-size="16"
                  font-weight="bold"
                  fill="white"
                  text-anchor="middle"
                  alignment-baseline="middle"
                >
                  UnionPay
                </text>
              </svg>
            </div>
            <div class="w-12 flex justify-center items-center">
              <svg viewBox="0 0 100 65" class="w-full h-auto">
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
                  font-family="Verdana"
                  font-size="12"
                  font-weight="bold"
                  fill="white"
                  text-anchor="middle"
                  alignment-baseline="middle"
                >
                  AMERICAN EXPRESS
                </text>
              </svg>
            </div>
            <div class="w-12 flex justify-center items-center">
              <svg viewBox="0 0 100 65" class="w-full h-auto">
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="65"
                  rx="10"
                  fill="#FFFFFF"
                  stroke="#CCCCCC"
                  stroke-width="1"
                ></rect>
                <text
                  x="50"
                  y="35"
                  font-family="Verdana"
                  font-size="20"
                  font-weight="bold"
                  fill="#00358C"
                  text-anchor="middle"
                  alignment-baseline="middle"
                >
                  JCB
                </text>
              </svg>
            </div>
          </div>

          <form class="space-y-2">
            <div class="flex flex-col gap-2">
              <label for="name" class="">
                Name on Card
              </label>
              <input
                type="text"
                name="name"
                placeholder="Michael"
                class="w-full px-4 py-2 bg-gray-100 rounded-lg"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="card-number" class="">
                Card Number
              </label>
              <input
                type="text"
                name="card-number"
                placeholder="1111-1111--1111"
                class="w-full px-4 py-2 bg-gray-100 rounded-lg"
              />
            </div>

            <div class="flex justify-between gap-4">
              <div class="w-full flex flex-col gap-2">
                <label for="exp-date" class="">
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="exp-date"
                  name="exp-date"
                  placeholder="12/5/202"
                  class="w-full px-4 py-2 bg-gray-100 rounded-lg"
                />
              </div>
              <div class="w-full flex flex-col gap-3">
                <label for="cvv" class="">
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  placeholder="221"
                  class="w-full px-4 py-2 bg-gray-100 rounded-lg"
                />
              </div>
            </div>

            <div class="text-sm text-gray-500">
              <h3 class="font-bold text-gray-800 mb-1">
                Learn More About Security
              </h3>
              <p>
                Stripe has been audited by a PCI-certified auditor and is
                certified to PCI Service Provider level 1.
              </p>
              <button
                type="button"
                class="mt-4 px-4 py-2 text-red-500 border border-red-500 rounded-lg font-semibold hover:bg-[#FDEDED] transition-colors"
              >
                Powered by Stripe
              </button>
            </div>

            <div class="">
              <button
                type="submit"
                class="w-full bg-(--primary-color) text-white py-2 text-sm rounded-full shadow-lg"
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
