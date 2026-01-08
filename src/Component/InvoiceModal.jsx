import React from "react";
import ModalWrapper from "./ModalWrapper";
import logoImage from "/assets/Images/logo.png";

const InvoiceModal = ({ onClose  }) => {
  return (
    <>
      <ModalWrapper onClose={onClose}>
        <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl overflow-y-auto max-h-[90vh]">
          <div className="sticky top-0 bg-linear-to-r from-blue-50 to-white border-b border-gray-100 px-8 py-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg sm:text-2xl sora-bold text-(--primary-color)">
                Invoice Details
              </h2>
              <p className="sm:text-sm text-xs text-gray-600 mt-1">
                Loan Application & Service Invoice
              </p>
            </div>
            <button
              id="closeModal"
              onClick={onClose}
              className="text-gray-500 cursor-pointer transition-colors p-2 -mt-10 -mr-7  rounded-lg"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="md:px-8 px-4 md:py-0">
            <div className="mb-4 pb-8 border-b border-gray-200">
              <div className="flex justify-center sm:justify-between items-center">
                <div>
                  <div className="flex  items-center gap-3 mb-4">
                    <div>
                      <img src={logoImage} className="md:w-44" alt="" />
                    </div>
                  </div>
                  <div className="mt-4 space-y-1 text-sm text-gray-600">
                    <p>
                      <span className="sora-semibold text-black">
                        Invoice #:
                      </span>{" "}
                      INV-2025-001247
                    </p>
                    <p>
                      <span className="sora-semibold text-black">Date:</span>{" "}
                      December 11, 2025
                    </p>
                    <p>
                      <span className="sora-semibold text-black">
                        Due Date:
                      </span>{" "}
                      January 10, 2026
                    </p>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="mb-3">
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-xl text-sm sora-semibold inline-block">
                      Approved
                    </span>
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>
                      <span className="sora-semibold">Approved Amount:</span>{" "}
                      $5,000.00
                    </p>
                    <p>
                      <span className="sora-semibold">Loan Term:</span> 12
                      Months
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <h4 className="text-xs sora-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Bill To
                </h4>
                <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
                  <p className="sora-semibold text-gray-900 mb-1">
                    Jean Paul Trujillo
                  </p>
                  <p className="text-[12px] text-gray-600 mb-3">
                    Customer ID: CUST-45829
                  </p>
                  <div className="space-y-1 text-[12px] text-gray-600">
                    <p>3778 SW 127th AVE</p>
                    <p>Miami, FL 33175</p>
                    <p className="mt-2">📞 3055053389</p>
                    <p>📧 jeanpaultru@gmail.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs sora-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Application
                </h4>
                <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
                  <p className="sora-semibold text-gray-900 mb-3">
                    Loan Application
                  </p>
                  <div className="space-y-2 text-[12px] text-gray-600">
                    <div className="flex justify-between">
                      <span>App ID:</span>
                      <span className="sora-medium text-gray-900">985170</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="sora-medium text-green-600">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Submitted:</span>
                      <span className="sora-medium text-gray-900">
                        2025-08-05
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Product:</span>
                      <span className="sora-medium text-gray-900">
                        Electronics
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs sora-semibold text-gray-500 uppercase tracking-wide mb-3">
                  Business Info
                </h4>
                <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
                  <p className="sora-semibold text-gray-900 mb-3">
                    Quick Details
                  </p>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>Gross Income:</span>
                      <span className="sora-medium text-gray-900">
                        $120,000
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pay Frequency:</span>
                      <span className="sora-medium text-gray-900">Monthly</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SSN:</span>
                      <span className="sora-medium text-gray-900">
                        628325819
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>DOB:</span>
                      <span className="sora-medium text-gray-900">
                        1978-12-20
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-sm sora-semibold text-gray-900 uppercase tracking-wide mb-4">
                  Payment Terms
                </h4>
                <div className="border border-gray-100 rounded-lg p-4 bg-gray-50/50 space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Payment:</span>
                    <span className="sora-semibold text-gray-900">$450.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest Rate (APR):</span>
                    <span className="sora-semibold text-gray-900">18.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Remaining Balance:</span>
                    <span className="sora-semibold text-gray-900">
                      $5,250.00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Payment Due:</span>
                    <span className="sora-semibold text-gray-900">
                      Jan 15, 2026
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm sora-semibold text-gray-900 uppercase tracking-wide mb-4">
                  Amount Summary
                </h4>
                <div className="border border-gray-100 rounded-lg p-4 bg-linear-to-br from-blue-50 to-blue-50/50 space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal:</span>
                    <span>$525.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Tax (10%):</span>
                    <span>$52.50</span>
                  </div>
                  <div className="h-px bg-linear-to-r from-blue-200 to-transparent my-2"></div>
                  <div className="flex justify-between text-lg sora-bold text-(--primary-color) pt-2">
                    <span>Total Due:</span>
                    <span>$577.50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center md:justify-end py-6 border-t border-gray-100">
              <button className="md:px-6 px-3 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all cursor-pointer sora-medium text-sm">
                Download PDF
              </button>
              <button className="md:px-6 px-3 py-2 bg-(--primary-color)  text-white rounded-lg transition-all sora-medium text-sm cursor-pointer">
                Print Invoice
              </button>
            </div>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default InvoiceModal;
