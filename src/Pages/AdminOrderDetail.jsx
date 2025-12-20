import React from "react";
import AdminLayout from "../Component/AdminLayout";
import { Link } from "react-router-dom";

const AdminOrderDetail = () => {
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
                    <span className="sora-bold text-gray-800 text-sm">$10,000</span>
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
                <h1 className="text-2xl sora-bold text-(--primary-color)">
                  Orders Details
                </h1>
              </div>
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center gap-2 w-full">
                  <div className="w-10 h-10 bg-(--primary-color) text-white rounded-full flex items-center justify-center sora-semibold">
                    1
                  </div>

                  <div className="flex-1 h-1 bg-(--primary-color)"></div>

                  <div className="w-10 h-10 bg-(--primary-color) text-white rounded-full flex items-center justify-center sora-semibold">
                    2
                  </div>

                  <div className="flex-1 h-1 bg-(--primary-color)"></div>

                  <div className="w-10 h-10 bg-(--primary-color) text-white rounded-full flex items-center justify-center sora-semibold">
                    3
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-xl sora-medium">Order Details</h1>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                    alt="Profile"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>

                <div className="mb-6">
                  <h2 className="text-sm sora-medium mb-1">Carlos sorae</h2>
                  <p className="text-xs">3778 SW 127 AVENUE</p>
                  <p className="text-xs">MIAMI FL 33175</p>
                  <p className="text-xs mt-1">(786) 484-8484</p>
                </div>

                <div className="mb-6 space-y-1">
                  <p className="text-xs">
                    <span className="sora-medium">Status:</span>
                    <span className="ml-1 sora-normal text-blue-200">
                      Pending Invoice
                    </span>
                  </p>
                  <p className="text-xs">
                    <span className="sora-medium">Submitted on</span>
                    <span className="ml-1 sora-normal text-blue-200">
                      08/05/2025
                    </span>
                  </p>
                  <p className="text-xs">
                    <span className="sora-medium">Application Number:</span>
                    <span className="ml-1 sora-normal text-blue-200">#985170</span>
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="">Approval Amount:</span>
                    <span className="sora-semibold">$3,000.00</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="">Order Amount:</span>
                    <span className="sora-medium">$5000</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="">Deposit:</span>
                    <span className="sora-medium">---</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="">Tax:</span>
                    <span className="sora-medium">$150</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="">Finance Subtotal:</span>
                    <span className="sora-medium">$3000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm pt-2 border-t border-blue-400">
                    <span className="sora-medium">Total Amount Due:</span>
                    <span className="sora-bold">$2,150</span>
                  </div>
                </div>

                <Link to="/admin/dashboard/cart/checkout">
                  <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-sm rounded-xl sora-normal flex items-center justify-between px-6 transition-colors">
                    <span className="">$2,150</span>
                    <div className="flex items-center gap-2">
                      <span>Checkout</span>
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
                    </div>
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

export default AdminOrderDetail;
