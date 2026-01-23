import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ConfirmFinance = ({
  setActiveStep,
  confirmFinance,
  setConfirmFinance,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [categories, setCategories] = useState([]);

  const LoginToken = localStorage.getItem("LoginToken");

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/categories`,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );
      setCategories(response.data);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Error fetching categories",
      );
    }
  };

  useEffect(() => {
    localStorage.removeItem("confirmFinance");
    fetchCategories();

    // restore persisted value
    const saved = localStorage.getItem("confirmFinance");
    if (saved) {
      setConfirmFinance(saved);
    }
  }, []);

  const handleContinue = (e) => {
    e.preventDefault();

    if (!confirmFinance) {
      toast.error("Please select product type");
      return;
    }

    setActiveStep((s) => s + 1);
  };

  return (
    <div className="content-area flex-1 ">
      <div className="page p-4 lg:p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg ">
            <div className="bg-(--primary-color) text-white py-4 px-6">
              <h2 className="text-xl font-bold">Form</h2>
            </div>

            <form className="p-4 sm:p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Choose what you are financing{" "}
                <span className="text-red-600">*</span>
              </label>

              <div className="relative">
                <div
                  onClick={() => setShowOptions(!showOptions)}
                  className="w-full px-4 py-2 border rounded-md cursor-pointer flex justify-between items-center"
                >
                  <span className="text-gray-700">
                    {confirmFinance || "Select Product Type"}
                  </span>
                  <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {showOptions && (
                  <div className="absolute mt-1 w-full bg-white border rounded-md shadow-lg z-50 h-40 overflow-y-auto">
                    {categories.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setConfirmFinance(item);
                          localStorage.setItem("confirmFinance", item); // persist
                          setShowOptions(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={handleContinue}
                className="mt-6 w-full cursor-pointer bg-(--primary-color) text-white py-2 rounded-md font-semibold"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmFinance;
