import React from "react";
import Sidebar from "./Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="bg-gray-50 sora">
        <div className="flex h-screen relative overflow-hidden ">
          <Sidebar />

          <div className="p-4 lg:p-8 w-full overflow-auto">
            <div className="hidden lg:flex mx-auto flex-col items-end mb-6 ">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search User"
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0080C6]"
                />
                <a
                  href="/dashboard/notifications"
                  className="relative inline-block"
                >
                  <button
                    id="notify"
                    className="p-2 rounded-full hover:bg-gray-100 transition relative"
                    aria-label="Notifications"
                  >
                    <i className="fas fa-bell text-gray-700 text-xl"></i>

                    <span className="absolute -top-1 right-0 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                      3
                    </span>
                  </button>
                </a>
              </div>
            </div>

            <div className="content-area  flex-1 overflow-visible lg:ml-0 pt-16 lg:pt-0">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
