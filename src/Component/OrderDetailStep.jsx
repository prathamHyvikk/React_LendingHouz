import React from "react";
import { Link } from "react-router-dom";

const OrderDetailStep = () => {
  return (
    <>
      <div className="col-span-5">
        
       

        <div className="bg-[#5F65C3] rounded-2xl shadow-2xl p-6 text-white">
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
              <span className="ml-1 sora-normal text-blue-200">08/05/2025</span>
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
            <button className="w-full cursor-pointer bg-gray-900 hover:bg-gray-800 text-white py-3 text-sm rounded-xl sora-normal flex items-center justify-between px-6 transition-colors">
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
    </>
  );
};

export default OrderDetailStep;
