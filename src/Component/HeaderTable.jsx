import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { IoReloadOutline } from "react-icons/io5"; // Import a clean reset icon

const HeaderTable = ({
  setShowAddProduct,
  headingContent,
  marketplace,
  setProducts = [],
  setLastPage,
  setSelectedCategory,
  navigationLink,
  fetchProductFromCategory,
  setApplications,
  search,
  setSearch,
  filter,
  searchFilter,
  setLoading,
}) => {
  const role = useSelector((state) => state.person.value);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [categories, setCategories] = useState([]);
  const LoginToken = localStorage.getItem("LoginToken");
  const categoryRef = useRef();

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/categories`,
        {
          headers: { Authorization: `Bearer ${LoginToken}` },
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
    fetchCategories();
  }, []);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSelection = async (item) => {
    setSelectedOption(item);
    setSelectedCategory(item);
    setShowOptions(false);

    if (fetchProductFromCategory === "no") return;

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/get-category-search`,
        {
          params: { category: item },
          headers: { Authorization: `Bearer ${LoginToken}` },
        },
      );
      setProducts(response?.data?.products);
      setLastPage(response?.data?.last_page);
    } catch (error) {
      toast.error("Error filtering products");
    }
  };

  //  Reset
  const handleReset = async () => {
    setSelectedOption("");
    setSelectedCategory("");

    if (setSearch) setSearch("");

    if (marketplace) {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/products`,
          {
            headers: { Authorization: `Bearer ${LoginToken}` },
          },
        );
        setProducts(response?.data?.products);
        setLastPage(response?.data?.last_page);
      } catch (error) {
        toast.error("Error resetting data");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <div
      className={`flex ${marketplace ? "flex-col" : "flex-col "} sm:flex-row  justify-between flex-wrap mb-6 gap-3`}
    >
      <h2 className="text-lg sora-semibold ">{headingContent}</h2>

      <div className="flex items-center  flex-wrap gap-3">
        {/* Add Product / New Application Button Logic */}
        {marketplace ? (
          role === "admin" && (
            <button
              onClick={() => setShowAddProduct(true)}
              className="bg-[#0080C6] text-white px-4 py-2 rounded-md hover:bg-[#006ba1] transition text-sm"
            >
              + Add Product
            </button>
          )
        ) : (
          <Link to={navigationLink || "#"}>
            <button
              onClick={() => !navigationLink && setShowAddProduct(true)}
              className="bg-[#0080C6] text-sm text-white px-4 py-2 rounded-md hover:bg-[#006ba1] transition"
            >
              + New Application
            </button>
          </Link>
        )}

        {/* Search Input */}
        {searchFilter && !marketplace && (
          <input
            type="text"
            placeholder="Search User"
            value={search}
            onChange={handleSearch}
            className="hidden sm:block border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-[#0080C6] outline-none"
          />
        )}

        {/* Filter & Reset Section */}
        {filter && (
          <div className="flex items-center gap-2">
            <div ref={categoryRef} className="relative">
              <button
                onClick={() => setShowOptions(!showOptions)}
                className="min-w-[239px] flex items-center justify-between gap-1 border border-gray-300 px-3 py-2 rounded-md text-sm hover:bg-gray-100 transition"
              >
                <span>
                  {selectedOption ||
                    (marketplace ? "All Categories" : "Filter")}
                </span>
                <svg
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
                  />
                </svg>
              </button>

              {showOptions && (
                <div className="absolute z-50 right-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden">
                  <div className="max-h-60 overflow-y-auto">
                    {categories.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => handleSelection(item)}
                        className="px-4 py-2.5 hover:bg-blue-50 hover:text-[#0080C6] cursor-pointer text-sm transition-colors"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/*  Reset button  */}
            {filter && (
              <button
                onClick={handleReset}
                title="Reset Filters"
                className="sm:p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-all duration-300"
              >
                <IoReloadOutline
                  size={20}
                  className="hover:rotate-180 transition-transform duration-500"
                />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderTable;
