import React from "react";
import ModalWrapper from "./ModalWrapper";
import { useNavigate } from "react-router-dom";

const ViewModal = ({ onClose, data }) => {
const navigate = useNavigate()
  return (
    <>
      <ModalWrapper onClose={onClose}>
        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-gray-200 p-6">
            <h1 className="!text-xl sora-bold text-gray-800">
              Application Information
            </h1>
            <button
              onClick={onClose}
              className="text-gray-500 cursor-pointer hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-lg sora-bold text-gray-800 border-l-4 border-blue-600 pl-3 mb-4">
                Customer Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm pl-4">
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">Name:</span>{" "}
                    {data?.first_name} {data?.last_name}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">Phone:</span> {data?.mobile}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">Email:</span> {data?.email}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">Address:</span>{" "}
                    {data?.address_1}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">City:</span> {data?.city}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">State:</span> {data?.state}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">Zip:</span> {data?.zipcode}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">SSN:</span> {data?.ssn}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">DOB:</span> {data?.dob}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg sora-bold text-gray-800 border-l-4 border-blue-600 pl-3 mb-4">
                Application Details
              </h2>
              <div className="flex flex-wrap gap-x-14 gap-y-2 pl-4 text-sm">
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">Application ID:</span>{" "}
                    {data?.application_id}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">Status:</span>{" "}
                    {data?.application_status}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">Submitted On:</span>{" "}
                    {data?.created_at.split("T")[0]}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">Product Info:</span>{" "}
                    {data?.product_type}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg sora-bold text-gray-800 border-l-4 border-blue-600 pl-3 mb-4">
                Employment / Income Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm pl-4">
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">Gross Income:</span>{" "}
                    {data?.gross_income}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">Pay Frequency:</span>{" "}
                    {data?.payment_frequency}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">Last Pay Day:</span>{" "}
                    {data?.last_pay_date}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">Next Pay Day:</span>{" "}
                    {data?.next_pay_date}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg sora-bold text-gray-800 border-l-4 border-blue-600 pl-3 mb-4">
                Financial Info
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm pl-4">
                <div>
                  <p className="text-gray-700">
                    $<span className="sora-semibold">Best Estimate:</span>{" "}{data?.best_estimate || "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">Approval Amount:</span>{" "}
                    ${data?.approvalAmount || "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <span className="sora-semibold">Funded Amount:</span>{" "}
                    ${data?.fundedAmount || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg sora-bold text-gray-800 border-l-4 border-blue-600 pl-3">
                  Invoice Details
                </h2>
                <button onClick={()=>navigate("/app/dashboard/cart/select-offer")} className="text-blue-600 cursor-pointer hover:text-blue-800 sora-semibold text-xs">
                  + ADD/VIEW INVOICE
                </button>
              </div>
              <p className="text-gray-500 italic ml-4 text-sm">
                No invoices found.
              </p>
            </div>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ViewModal;
