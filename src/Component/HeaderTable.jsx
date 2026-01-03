import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { filterOptions } from "../data/userDashboard.json";
import axios from "axios";
import toast from "react-hot-toast";

const HeaderTable = ({ setShowAddProduct, headingContent, marketplace }) => {
  const role = useSelector((state) => state.person.value);

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [optionValue, setOptionValue] = useState("");
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

  const categoryRef = useRef();

  window.addEventListener("click", (event) => {
    if (categoryRef.current && !categoryRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  });

  const handleSelection = (item) => {
    setSelectedOption(item.lable);
    setOptionValue(item.value);
    setShowOptions(false);
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-3">
        <h2 className="text-lg sora-semibold ">{headingContent}</h2>

        <div className="flex items-center gap-3">
          {marketplace ? (
            role == "admin" ? (
              <button
                onClick={() => setShowAddProduct(true)}
                className="open-popup bg-[#0080C6] text-white cursor-pointer px-4 py-2 rounded-md hover:bg-[#006ba1] transition text-sm"
              >
                + Add Product
              </button>
            ) : null
          ) : (
            // <a href="/dashboard/applications/confirm-your-financing">
            <button
              onClick={() => setShowAddProduct(true)}
              className="open-popup cursor-pointer bg-[#0080C6] lg:text-base text-sm text-white lg:px-4 px-3 py-2 rounded-md hover:bg-[#006ba1] transition"
            >
              + New Application
            </button>
            // </a>
          )}

          {/* search */}
          {!marketplace ? (
            <>
              <input
                type="text"
                placeholder="Search User"
                className="hidden sm:block border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0080C6]"
              />

              <button className="sm:hidden p-2 border border-gray-300 rounded-md hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m2.1-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                  ></path>
                </svg>
              </button>
            </>
          ) : (
            ""
          )}

          {/* filter */}
          <div ref={categoryRef} className="relative">
            <button
              onClick={() => setShowOptions(!showOptions)}
              className={
                marketplace
                  ? "productlistBtn flex items-center gap-1 cursor-pointer border border-gray-300 px-3 py-2 rounded-md text-sm hover:bg-gray-100"
                  : "flex items-center gap-1 border cursor-pointer border-gray-300 px-3 py-2 rounded-md text-sm hover:bg-gray-100"
              }
            >
              <span className="max-sm:hidden">
                {marketplace
                  ? selectedOption
                    ? selectedOption
                    : "Filter by Product & Services"
                  : selectedOption
                  ? selectedOption
                  : "Filter"}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 max-sm:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                ></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-4.586L3.293 6.707A1 1 0 013 6V4z"
                ></path>
              </svg>
            </button>

            {showOptions && (
              <div>
                <div className="dropdownproductlist text-gray-700 mt-2 w-45 bg-white shadow-lg rounded-md p-2 absolute z-10 right-0 top-10 text-[12px] h-70 overflow-y-scroll">
                  {categories.map((item, i) => (
                    <p
                      key={i}
                      onClick={() => handleSelection(item)}
                      className="p-2 hover:bg-gray-100 w-full cursor-pointer block "
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTable;
