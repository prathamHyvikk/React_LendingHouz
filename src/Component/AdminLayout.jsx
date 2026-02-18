import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { useCart } from "react-use-cart";
const AdminLayout = ({ children }) => {
  const { pathname } = useLocation();

  const role = useSelector((state) => state.person.value);
  const { totalItems, items } = useCart();


  const totalQuantity = useSelector((state) => state.cart.quantity);

  return (
    <>
      {/* <div className="bg-gray-50 sora">
        <div className="flex h-screen relative overflow-hidden ">
          <Sidebar />

          <div className="">
         

            <div className="content-area  flex-1 overflow-visible lg:ml-0 pt-5 lg:pt-0"> */}
              {children}
            {/* </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AdminLayout;
