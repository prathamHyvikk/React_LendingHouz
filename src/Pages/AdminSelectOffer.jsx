import React, { useState } from "react";
import AdminLayout from "../Component/AdminLayout";
import { Link } from "react-router-dom";

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

            <div className="col-span-5">
              <div className="flex items-center justify-center mb-4">
                <h1 className="text-2xl sora-bold text-gray-800">
                  Select Offer
                </h1>
              </div>
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center gap-2 w-full">
                  <div className="w-10 h-10 bg-(--primary-color) text-white rounded-full flex items-center justify-center sora-semibold">
                    1
                  </div>

                  <div className="flex-1 h-1 bg-gray-300"></div>

                  <div className="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center sora-semibold">
                    2
                  </div>

                  <div className="flex-1 h-1 bg-gray-300"></div>

                  <div className="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center sora-semibold">
                    3
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-6 text-white">
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setOfferType("weekly")}
                    id="weeklyBtn"
                    className={`flex-1 ${
                      offerType === "weekly"
                        ? " bg-blue-500 hover:bg-blue-400 "
                        : "bg-blue-700 hover:bg-blue-600"
                    } py-2 px-4 cursor-pointer text-sm rounded-lg sora-medium transition-colors`}
                  >
                    Bi Weekly
                  </button>
                  <button
                    onClick={() => setOfferType("monthly")}
                    id="monthlyBtn"
                    className={`flex-1 ${
                      offerType === "monthly"
                        ? " bg-blue-500 hover:bg-blue-400 "
                        : "bg-blue-700 hover:bg-blue-600"
                    } py-2 px-4 cursor-pointer text-sm rounded-lg sora-medium transition-colors`}
                  >
                    Monthly
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-blue-400">
                    <div>
                      <p className="text-sm text-blue-200 mb-1">Frequency</p>
                      <p className="sora-semibold" id="frequencyText">
                        Bi Weekly
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-blue-200 mb-1">Due today</p>
                      <p className="text-base sora-semibold" id="dueToday">
                        $200
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-blue-400">
                    <p className="text-blue-100">Number of payments</p>
                    <p className="sora-semibold" id="numPayments">
                      {offerType === "weekly" ? "08" : "25"}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-blue-400">
                    <p className="text-blue-100">Payment amount</p>
                    <p className="sora-semibold" id="paymentAmount">
                      {offerType === "weekly" ? "$3000" : "$10,000"}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-blue-100">Total Payment amount</p>
                    <p className="text-lg sora-semibold" id="totalAmount">
                      $10,000
                    </p>
                  </div>
                </div>

                <Link to="/admin/dashboard/cart/banking-info">
                  <button className="w-full cursor-pointer bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold mt-6 flex items-center justify-center gap-2 transition-colors text-sm">
                    <span>Select Offer</span>
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminSelectOffer;
