import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ConfirmFinance = ({ setActiveStep, setConfirmFinance }) => {
  const [selectOption, setSelectOption] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [categories, setCategories] = useState();

  const LoginToken = localStorage.getItem("LoginToken");
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/categories`,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        }
      );

      setCategories(response.data);
    } catch (error) {
      toast.error("Network Error:", error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleContinue = (e) => {
    e.preventDefault();
    if (selectOption == "") {
      toast.error("Please select product type");
    } else {
      setConfirmFinance(selectOption);
      setActiveStep((s) => s + 1);
    }
  };

  return (
    <>
      <div className="content-area flex-1 overflow-auto lg:ml-0  ">
        {" "}
        <div id="applications" className="page p-4 lg:p-8">
          {" "}
          <div className="max-w-2xl mx-auto ">
            {" "}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {" "}
              <div className="bg-(--primary-color) text-white py-4 px-6">
                {" "}
                <h2 className="text-xl font-bold">Form</h2>{" "}
              </div>{" "}
              <form
                // action="/dashboard/applications/verify-contact-info"
                className={`sm:p-6 p-3 ${
                  showOptions ? "h-60 min-[400px]:h-70" : "h-fit"
                }`}
              >
                {" "}
                <div className="mb-4">
                  {" "}
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Chose what you are financing{" "}
                    <span className="text-red-600">*</span>{" "}
                  </label>{" "}
                  <div className="relative w-full">
                    {" "}
                    <div
                      onClick={() => setShowOptions(!showOptions)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer flex justify-between items-center"
                    >
                      {" "}
                      <span id="selectedText" className="text-gray-700">
                        {selectOption == ""
                          ? "Select Product Type"
                          : selectOption}
                      </span>{" "}
                      <svg
                        className="w-4 h-4 ml-2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>{" "}
                      </svg>{" "}
                    </div>{" "}
                    {showOptions && (
                      <div
                        id="dropdownMenu"
                        className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg  z-90 h-40 overflow-y-auto"
                      >
                        {categories?.map((item, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setShowOptions(false);
                              setSelectOption(item);
                            }}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>{" "}
                </div>
                <button
                  onClick={handleContinue}
                  className="w-full cursor-pointer bg-(--primary-color) hover:bg-blue-950 text-white py-2 rounded-md font-semibold transition-colors"
                >
                  Continue
                </button>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default ConfirmFinance;
