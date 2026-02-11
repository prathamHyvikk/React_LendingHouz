import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

const Layout = () => {
  const { pathname } = useLocation();

  const totalQuantity = useSelector((state) => state.cart.quantity);

  const role = useSelector((state) => state.person.value);

  return (
    <div className="flex h-screen relative overflow-hidden ">
      <Sidebar />
      <div className="w-full bg-gray-50 overflow-auto">
        <div className=" p-4 lg:p-8  sora cursor-pointer max-lg:mt-22 flex mx-auto lg:flex-col justify-end items-end lg:mb-6 ">
          {pathname !== `/${role}/dashboard/notifications` && (
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search User"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0080C6]"
              />

              <div className="flex items-center space-x-4">
                {role === "app" && (
                  <Link
                    to={`/app/dashboard/cart/select-offer`}
                    className="relative cursor-pointer inline-block"
                  >
                    <FaShoppingCart className="text-[24px]" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-[10px] sora-bold rounded-full flex items-center justify-center border-2 border-white">
                      {totalQuantity}
                    </span>
                  </Link>
                )}

                <Link
                  to={`/${role}/dashboard/notifications`}
                  className="relative cursor-pointer inline-block"
                >
                  <IoMdNotifications className="text-3xl" />

                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] sora-bold rounded-full flex items-center justify-center border-2 border-white">
                    3
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 p-4 lg:p-8 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
