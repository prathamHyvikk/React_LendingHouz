import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminLayout = ({ children }) => {
  const { pathname } = useLocation();

  const role = useSelector((state) => state.person.value);

  return (
    <>
      <div className="bg-gray-50 sora">
        <div className="flex h-screen relative overflow-hidden ">
          <Sidebar />

          <div className="p-4 lg:p-8 w-full overflow-auto">
            <div className=" cursor-pointer lg:flex mx-auto flex-col items-end mb-6 ">
              {pathname !== `/${role}/dashboard/notifications` && (
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    placeholder="Search User"
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0080C6]"
                  />

                  <Link
                    to={`/${role}/dashboard/notifications`}
                    className="relative cursor-pointer inline-block"
                  >
                    <button
                      id="notify"
                      className="p-2 rounded-full hover:bg-gray-100 transition relative"
                      aria-label="Notifications"
                    >
                      <i className="fas fa-bell text-gray-700 text-xl"></i>

                      <span className="absolute -top-1 right-0 w-5 h-5 bg-red-500 text-white text-[10px] sora-bold rounded-full flex items-center justify-center border-2 border-white">
                        3
                      </span>
                    </button>
                  </Link>
                </div>
              )}
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
