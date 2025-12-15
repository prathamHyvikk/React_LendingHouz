import React from "react";

const Pagination = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-6">
        <div className="hidden sm:flex items-center space-x-1">
          <button className="size-9 border rounded-full hover:bg-gray-100">
            «
          </button>
          <button className="size-9 border rounded-full hover:bg-gray-100">
            ‹
          </button>

          <button className="size-9 border rounded-full bg-[#0080C6] text-white">
            1
          </button>
          <button className="size-9 border rounded-full hover:bg-gray-100">
            2
          </button>
          <button className="size-9 border rounded-full hover:bg-gray-100">
            3
          </button>

          <span className="px-2">...</span>

          <button className="size-9 border rounded-full hover:bg-gray-100">
            10
          </button>

          <button className="size-9 border rounded-full hover:bg-gray-100">
            ›
          </button>
          <button className="size-9 border rounded-full hover:bg-gray-100">
            »
          </button>
        </div>

        <div className="flex sm:hidden items-center space-x-2">
          <button className="px-3 py-1 border rounded-lg hover:bg-gray-100 text-sm">
            Prev
          </button>

          <span className="px-3 py-1 bg-[#0080C6] text-white rounded-lg text-sm">
            1
          </span>

          <button className="px-3 py-1 border rounded-lg hover:bg-gray-100 text-sm">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
