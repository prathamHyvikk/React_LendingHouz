import React, { useEffect, useState } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import ViewModal from "./ViewModal";

const AllApplicationStatus = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [applications, setApplications] = useState([]);
  const [showView, setShowView] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState();
  const LoginToken = localStorage.getItem("LoginToken");
  const userId = useSelector((state) => state.person.id);

  useEffect(() => {
    if (isOpen) {
      fetchApplications();
    }
  }, [isOpen]);

  const fetchApplications = async () => {
    setLoading(true);
    console.log(LoginToken);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/all-application`,
        {
          params: {
            user_id: userId,
          },

          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );

      setApplications(response?.data?.data || []);
    } catch (error) {
      console.log(error);
      const apiError = error?.response?.data?.message;

      if (typeof apiError === "object") {
        Object.entries(apiError).forEach(([_, messages]) => {
          messages.forEach((msg) => toast.error(msg));
        });
      } else {
        toast.error(apiError || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const handleView = (e, app) => {
    console.log(app);
    e.preventDefault();
    setSelectedApplication(app);
    setShowView(true);
  };

  return (
    <div className="fixed inset-0 z-200 bg-black/40 flex justify-center items-start pt-10">
      <div className="bg-white w-[95%] max-w-5xl rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl sora-semibold text-gray-700">
            Customer Finance
          </h2>
          <button onClick={onClose}>
            <RxCross2 className="text-2xl text-gray-500 hover:text-red-500" />
          </button>
        </div>

        {/* Title Section */}
        <div className="p-5  flex justify-between items-center">
          <h3 className="text-lg sora-semibold text-gray-600">
            Approve Finance Application
          </h3>
          {/* <button className="bg-[#002e6d] text-white px-5 py-2 rounded-lg shadow hover:bg-[#002e6d] transition">
            CREATE NEW APPLICATION
          </button> */}
        </div>

        {/* Body */}
        <div className="p-5 space-y-5">
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          ) : applications.length === 0 ? (
            <div className="text-center text-gray-500">
              No applications found
            </div>
          ) : (
            applications.map((app) => (
              <div
                key={app.id}
                className="bg-gray-50 border rounded-xl p-5 shadow-sm flex flex-col lg:flex-row justify-between gap-6"
              >
                {/* Left Section */}
                <div>
                  <p className="sora-semibold text-gray-700">
                    Application Number: #{app.application_id}
                  </p>

                  <p className="mt-2">
                    <span className="sora-medium">Status:</span>{" "}
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {app.application_status?.toUpperCase()}
                    </span>
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Submitted on:{" "}
                    {new Date(app.created_at).toLocaleDateString()}
                  </p>
                </div>

                {/* Middle Section */}
                <div>
                  <p className="sora-semibold text-gray-700 uppercase">
                    {app.first_name
                      ? `${app.first_name} ${app.last_name || ""}`
                      : "N/A"}
                  </p>
                  <p className="text-gray-500 text-base my-2 ">{app.email}</p>
                  <p className="text-gray-500 text-base my-2 ">{app.mobile}</p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col items-start lg:items-end gap-2">
                  <p className="text-gray-600">
                    Approved: ${app.approvalAmount || 0}
                  </p>
                  <p className="text-gray-600">
                    Funded: ${app.fundedAmount || 0}
                  </p>

                  <div className="flex gap-3 mt-2">
                    <button className="bg-[#002e6d] text-white px-4 py-2 rounded-lg shadow hover:bg-[#002e6d] cursor-pointer transition">
                      SELECT
                    </button>
                    <button
                      onClick={(e) => handleView(e, app)}
                      className="bg-[#002e6d] text-white px-4 py-2 rounded-lg shadow hover:bg-[#002e6d] cursor-pointer transition"
                    >
                      VIEW
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showView && <ViewModal data={selectedApplication} onClose={() => setShowView(false)} />}
    </div>
  );
};

export default AllApplicationStatus;
