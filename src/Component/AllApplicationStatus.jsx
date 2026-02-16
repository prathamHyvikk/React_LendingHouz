import React, { useEffect, useState } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { IoArrowBack } from "react-icons/io5"; // Added for the back button
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import ViewModal from "./ViewModal";

const AllApplicationStatus = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [applications, setApplications] = useState([]);
  const [showView, setShowView] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState();

  const [selectedForInvoice, setSelectedForInvoice] = useState(null);
  const [downPayment, setDownPayment] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  const LoginToken = localStorage.getItem("LoginToken");
  const userId = useSelector((state) => state.person.id);

  useEffect(() => {
    if (isOpen) {
      fetchApplications();
    }
  }, [isOpen]);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/all-application`,
        {
          params: { user_id: userId },
          headers: { Authorization: `Bearer ${LoginToken}` },
        },
      );
      setApplications(response?.data?.data || []);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const handleSelect = (app) => {
    setSelectedForInvoice(app);
  };

  const handleBack = () => {
    setSelectedForInvoice(null);
    setDownPayment("");
  };

  return (
    <div className="fixed inset-0 z-200 bg-black/40 flex justify-center items-start pt-10">
      <div className="bg-gray-100 w-[95%] max-w-5xl rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl sora-semibold text-gray-700">
            Customer finance
          </h2>
          <button onClick={onClose}>
            <RxCross2 className="text-2xl text-gray-500 hover:text-red-500" />
          </button>
        </div>

        <div className="p-5">
          {!selectedForInvoice ? (
            <>
              {/* List View */}
              <h3 className="text-lg sora-semibold text-gray-600 mb-5">
                Approve Finance Application
              </h3>
              <div className="space-y-5">
                {loading ? (
                  <div className="flex justify-center py-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                  </div>
                ) : (
                  applications.map((app) => (
                    <div
                      key={app.id}
                      className="bg-white border rounded-xl p-5 shadow-sm flex flex-col lg:flex-row justify-between gap-6"
                    >
                      <div>
                        <p className="sora-semibold text-gray-700">
                          Application Number: #{app.application_id}
                        </p>
                        <p className="mt-2">
                          <span className="sora-medium">Status:</span>{" "}
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm uppercase">
                            {app.application_status}
                          </span>
                        </p>
                        <p className="mt-2 text-sm text-gray-500">
                          Submitted on:{" "}
                          {new Date(app.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p className="sora-semibold text-gray-700 uppercase">
                          {app.first_name} {app.last_name}
                        </p>
                        <p className="text-gray-500 text-base">{app.email}</p>
                        <p className="text-gray-500 text-base">{app.mobile}</p>
                      </div>
                      <div className="flex flex-col items-start lg:items-end gap-2">
                        <p className="text-gray-600">
                          Approved: ${app.approvalAmount || 0}
                        </p>
                        <p className="text-gray-600">
                          Funded: ${app.fundedAmount || 0}
                        </p>
                        <div className="flex gap-3 mt-2">
                          <button
                            onClick={() => handleSelect(app)}
                            className="bg-[#002e6d] text-white px-6 py-2 rounded-lg font-medium"
                          >
                            SELECT
                          </button>
                          <button
                            onClick={(e) => {
                              setSelectedApplication(app);
                              setShowView(true);
                            }}
                            className="bg-[#002e6d] text-white px-6 py-2 rounded-lg font-medium"
                          >
                            VIEW
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </>
          ) : (
            /* Selected Application / Invoice View */
            <div className="animate-in fade-in duration-300">
              <button
                onClick={handleBack}
                className="flex items-center cursor-pointer text-gray-500 hover:text-gray-700 mb-4"
              >
                <IoArrowBack className="mr-1" /> Back
              </button>
              <h3 className="text-xl font-bold text-[#2d3a50] mb-6">
                Add Invoice of Application
              </h3>

              <div className="flex flex-col md:flex-row gap-4 mb-6">
                {/* Details Card */}
                <div className="flex-1 bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex justify-between">
                  <div className="space-y-2">
                    <p className="text-gray-600 font-bold">
                      Application Number:{" "}
                      <span className="text-gray-500 font-normal">
                        #{selectedForInvoice.application_id}
                      </span>
                    </p>
                    <p className="flex items-center gap-2 font-bold text-gray-600">
                      Status:{" "}
                      <span className="bg-green-100 text-green-700 px-3 py-0.5 rounded text-xs uppercase font-bold">
                        {selectedForInvoice.application_status}
                      </span>
                    </p>
                    <p className="text-gray-500 text-sm">
                      Submitted on:{" "}
                      {new Date(
                        selectedForInvoice.created_at,
                      ).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-gray-500 font-bold">
                      Approved:{" "}
                      <span className="text-gray-400 font-normal">
                        ${selectedForInvoice.approvalAmount || 0}
                      </span>
                    </p>
                    <p className="text-gray-500 font-bold">
                      Funded:{" "}
                      <span className="text-gray-400 font-normal">
                        ${selectedForInvoice.fundedAmount || 0}
                      </span>
                    </p>
                  </div>
                </div>

                {/* User Card */}
                <div className="w-full md:w-1/3 border border-gray-100 rounded-xl p-6 shadow-sm bg-white">
                  <h4 className="text-[#ff9201] sora-bold uppercase">
                    {selectedForInvoice.first_name}{" "}
                    {selectedForInvoice.last_name}
                  </h4>
                  <p className="text-gray-400 text-sm my-1">
                    {selectedForInvoice.email}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {selectedForInvoice.mobile}
                  </p>
                </div>
              </div>

              {/* Conditional Footer Section */}
              {selectedForInvoice.application_status?.toLowerCase() ===
              "approved" ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative border rounded-lg p-2 focus-within:border-[#002e6d]">
                      <label className="absolute -top-2.5 left-2 bg-white px-1 text-xs text-[#002e6d]">
                        Delivery Date
                      </label>
                      <input
                        type="date"
                        className="w-full outline-none p-1"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                      />
                    </div>
                    <div className="border rounded-lg p-2 focus-within:border-[#002e6d]">
                      <input
                        type="number"
                        placeholder="Down payment ($)"
                        className="w-full outline-none p-1"
                        value={downPayment}
                        onChange={(e) => setDownPayment(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-[#4caf50] text-white px-8 py-2.5 rounded-lg font-bold hover:bg-green-600 uppercase tracking-wide">
                      Add to Invoice
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <p className="text-gray-400">
                    You are unable to submit the order and invoice under finance
                    because the application status is not marked as "fulfilled".
                  </p>
                  <p className="text-gray-400 mt-2">
                    Your application Status is{" "}
                    <span className="font-semibold">
                      {selectedForInvoice.application_status}
                    </span>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {showView && (
        <ViewModal
          data={selectedApplication}
          onClose={() => setShowView(false)}
        />
      )}
    </div>
  );
};

export default AllApplicationStatus;
