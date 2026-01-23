import React, { useState } from "react";
import AdminLayout from "../Component/AdminLayout";
import { Link } from "react-router-dom";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CartSteper from "../Component/CartSteper";

const AdminSelectOffer = () => {
  const [offerType, setOfferType] = useState("weekly");

  return (
    <>
      <AdminLayout>
        <div className="max-w-6xl mx-auto mt-6 lg:mt-14">
          <div className="w-full max-lg:max-w-xl max-lg:mx-auto max-lg:space-y-12 lg:grid lg:grid-cols-12 gap-8">
            <div className="col-span-7">
              <div className="mb-8 border-b-2 border-gray-200 pb-6">
                <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className="sora-medium">Continue</span>
                </button>
              </div>
              <div className="mt-4">
                <h2 className="text-lg sora-semibold text-gray-800 mb-1">
                  Financing cart
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  You have 1 item in your cart
                </p>

                <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=100&h=80&fit=crop"
                    alt="House"
                    className="w-20 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="sora-semibold text-gray-800 text-sm">
                      Home Financing
                    </h3>
                    <p className="text-[12px] text-gray-500">Order ID #32</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="sora-bold text-gray-800 text-sm">
                      $10,000
                    </span>
                    <button className="text-gray-400 hover:text-red-500">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-5 mt-10">
              <CartSteper />
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminSelectOffer;
