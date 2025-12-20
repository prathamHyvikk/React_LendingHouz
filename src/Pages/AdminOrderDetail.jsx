import React from "react";
import AdminLayout from "../Component/AdminLayout";

const AdminOrderDetail = () => {
  return (
    <>
      <AdminLayout>
        <div class="max-w-6xl mx-auto mt-6 lg:mt-14">
          <div class="w-full max-lg:max-w-xl max-lg:mx-auto max-lg:space-y-12 lg:grid lg:grid-cols-12 gap-8">
            <div class="col-span-7">
              <div class="mb-8 border-b-2 border-gray-200 pb-6">
                <button class="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span class="font-medium">Continue</span>
                </button>
              </div>
              <div class="mt-4">
                <h2 class="text-lg font-semibold text-gray-800 mb-1">
                  Financing cart
                </h2>
                <p class="text-sm text-gray-500 mb-6">
                  You have 1 item in your cart
                </p>

                <div class="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=100&h=80&fit=crop"
                    alt="House"
                    class="w-20 h-16 object-cover rounded-lg"
                  />
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-800 text-sm">
                      Home Financing
                    </h3>
                    <p class="text-[12px] text-gray-500">Order ID #32</p>
                  </div>
                  <div class="flex items-center gap-4">
                    <span class="font-bold text-gray-800 text-sm">$10,000</span>
                    <button class="text-gray-400 hover:text-red-500">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-5">
              <div class="flex items-center justify-center mb-4">
                <h1 class="text-2xl font-bold text-(--primary-color)">
                  Orders Details
                </h1>
              </div>
              <div class="flex items-center justify-center mb-6">
                <div class="flex items-center gap-2 w-full">
                  <div class="w-10 h-10 bg-(--primary-color) text-white rounded-full flex items-center justify-center font-semibold">
                    1
                  </div>

                  <div class="flex-1 h-1 bg-(--primary-color)"></div>

                  <div class="w-10 h-10 bg-(--primary-color) text-white rounded-full flex items-center justify-center font-semibold">
                    2
                  </div>

                  <div class="flex-1 h-1 bg-(--primary-color)"></div>

                  <div class="w-10 h-10 bg-(--primary-color) text-white rounded-full flex items-center justify-center font-semibold">
                    3
                  </div>
                </div>
              </div>

              <div class="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-6 text-white">
                <div class="flex items-center justify-between mb-2">
                  <h1 class="text-xl font-medium">Order Details</h1>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                    alt="Profile"
                    class="w-12 h-12 rounded-lg object-cover"
                  />
                </div>

                <div class="mb-6">
                  <h2 class="text-sm font-medium mb-1">Carlos Fonte</h2>
                  <p class="text-xs">3778 SW 127 AVENUE</p>
                  <p class="text-xs">MIAMI FL 33175</p>
                  <p class="text-xs mt-1">(786) 484-8484</p>
                </div>

                <div class="mb-6 space-y-1">
                  <p class="text-xs">
                    <span class="font-medium">Status:</span>
                    <span class="ml-1 font-normal text-blue-200">
                      Pending Invoice
                    </span>
                  </p>
                  <p class="text-xs">
                    <span class="font-medium">Submitted on</span>
                    <span class="ml-1 font-normal text-blue-200">
                      08/05/2025
                    </span>
                  </p>
                  <p class="text-xs">
                    <span class="font-medium">Application Number:</span>
                    <span class="ml-1 font-normal text-blue-200">#985170</span>
                  </p>
                </div>

                <div class="space-y-2 mb-6">
                  <div class="flex items-center justify-between text-xs">
                    <span class="">Approval Amount:</span>
                    <span class="font-semibold">$3,000.00</span>
                  </div>
                  <div class="flex items-center justify-between text-xs">
                    <span class="">Order Amount:</span>
                    <span class="font-medium">$5000</span>
                  </div>
                  <div class="flex items-center justify-between text-xs">
                    <span class="">Deposit:</span>
                    <span class="font-medium">---</span>
                  </div>
                  <div class="flex items-center justify-between text-xs">
                    <span class="">Tax:</span>
                    <span class="font-medium">$150</span>
                  </div>
                  <div class="flex items-center justify-between text-xs">
                    <span class="">Finance Subtotal:</span>
                    <span class="font-medium">$3000</span>
                  </div>
                  <div class="flex items-center justify-between text-sm pt-2 border-t border-blue-400">
                    <span class="font-medium">Total Amount Due:</span>
                    <span class="font-bold">$2,150</span>
                  </div>
                </div>

                <a href="/dashboard/cart/checkout">
                  <button class="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-sm rounded-xl font-normal flex items-center justify-between px-6 transition-colors">
                    <span class="">$2,150</span>
                    <div class="flex items-center gap-2">
                      <span>Checkout</span>
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminOrderDetail;
