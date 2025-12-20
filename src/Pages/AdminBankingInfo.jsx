import React, { useState } from "react";
import AdminLayout from "../Component/AdminLayout";

const AdminBankingInfo = () => {
  const [routing, setRouting] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountType, setAccountType] = useState("checking");
  const [accountNumber, setAccountNumber] = useState("");
  const [confirmAccountNo, setConfirmAccountNo] = useState("");

  return (
    <>
      <AdminLayout>
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
              <h1 className="text-2xl sora-bold text-(--primary-color)">
                Banking Information
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

                <div className="flex-1 h-1 bg-gray-300"></div>

                <div className="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center sora-semibold">
                  3
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-6 px-4">
              <h2 className="text-white text-xl sora-medium mb-6">
                Bank information*
              </h2>

              <form
                action="/dashboard/cart/order-details"
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    id="routingNo"
                    value={routing}
                    onChange={(e) => setRouting(e.target.value)}
                    placeholder="Routing no"
                    className="w-full bg-blue-500 bg-opacity-30 border border-blue-400 border-opacity-50 text-white placeholder-blue-200 px-4 py-3 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-opacity-40 transition-all"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="bankName"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    placeholder="Bank Name"
                    className="w-full bg-blue-500 bg-opacity-30 text-sm border border-blue-400 border-opacity-50 text-white placeholder-blue-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-opacity-40 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm sora-normal mb-2">
                    Account Type
                  </label>
                  <div className="flex gap-0 bg-white rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setAccountType("checking")}
                      id="checkingBtn"
                      className={`flex-1 py-2 sora-medium ${
                        accountType === "checking"
                          ? "text-gray-800 bg-white"
                          : "text-gray-500 bg-gray-200"
                      } transition-colors`}
                    >
                      Checking
                    </button>
                    <button
                      type="button"
                      onClick={() => setAccountType("saving")}
                      id="savingBtn"
                      className={`flex-1 py-2 sora-medium ${
                        accountType === "saving"
                          ? "text-gray-800 bg-white"
                          : "text-gray-500 bg-gray-200"
                      } transition-colors`}
                    >
                      Saving
                    </button>
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    id="accountNo"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    placeholder="Account no"
                    className="w-full bg-blue-500 text-sm bg-opacity-30 border border-blue-400 border-opacity-50 text-white placeholder-blue-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-opacity-40 transition-all"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="confirmAccountNo"
                    value={confirmAccountNo}
                    onChange={(e) => setConfirmAccountNo(e.target.value)}
                    placeholder="Confirm Account no"
                    className="w-full bg-blue-500 text-sm bg-opacity-30 border border-blue-400 border-opacity-50 text-white placeholder-blue-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-opacity-40 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl sora-semibold mt-6 flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Continue</span>
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
              </form>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminBankingInfo;
