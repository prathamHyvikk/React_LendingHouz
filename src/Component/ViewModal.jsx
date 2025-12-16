import React from "react";
import ModalWrapper from "./ModalWrapper";

const ViewModal = ({ onClose }) => {
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
                      <span className="sora-semibold">Name:</span> Jean Paul
                      Trujillo
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="sora-semibold">Phone:</span> 3055053389
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="sora-semibold">Email:</span>{" "}
                      jeanpaultru@gmail.com
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="sora-semibold">Address:</span> 3778 SW 127th
                      AVE
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="sora-semibold">City:</span> Miami
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="sora-semibold">State:</span> FL
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="sora-semibold">Zip:</span> 33175
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="sora-semibold">SSN:</span> 628325819
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="sora-semibold">DOB:</span> 1978-12-20
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
                      <span className="sora-semibold">Application ID:</span> 985170
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="sora-semibold">Status:</span> NoLender
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="sora-semibold">Submitted On:</span>{" "}
                      2025-08-05 14:24:02
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="sora-semibold">Product Info:</span>{" "}
                      Electronics
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
                      <span className="sora-semibold">Gross Income:</span> $120000
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="sora-semibold">Pay Frequency:</span> Monthly
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="sora-semibold">Last Pay Day:</span>{" "}
                      2025-08-01
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="sora-semibold">Next Pay Day:</span>{" "}
                      2025-08-15
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
                      <span className="sora-semibold">Best Estimate:</span> $2900
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="sora-semibold">Approval Amount:</span> $N/A
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span className="sora-semibold">Funded Amount:</span> $N/A
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg sora-bold text-gray-800 border-l-4 border-blue-600 pl-3">
                    Invoice Details
                  </h2>
                  <button className="text-blue-600 hover:text-blue-800 sora-semibold text-xs">
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
