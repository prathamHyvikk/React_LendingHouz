import React from "react";
import { useState, useEffect } from "react";
import { IconBtn, StatCard, Td, Th } from "../Component/StatCard";
import AdminLayout from "../Component/AdminLayout";
import shopIcon from "../assets/Images/shop-icon.png";
import attachIcon from "../assets/Images/attach-icon.png";
import eyeIcon from "../assets/Images/eye-icon.png";
import AddNewProduct from "../Component/AddNewProduct";
import Pagination from "../Component/Pagination";
import RecentCards from "../Component/RecentCards";

import { clients } from "../data/userDashboard.json";
import { recentData } from "../data/userDashboard.json";

const DashBoardUser = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);

  const admin = true;
  const marketplace = false;

  useEffect(() => {
    document.body.style.overflow = showInvoice || showView ? "hidden" : "auto";
  }, [showInvoice, showView]);

  return (
    <>
      <AdminLayout>
        <div className="p-4 lg:p-8 w-full">
          <div className="hidden lg:flex mx-auto flex-col items-end mb-6">
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
          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            <StatCard title="Total Applications" value="230" bg="#E5ECF6" />
            <StatCard title="Loan Amount" value="$2,230.00" bg="#D0FFE0" />
            <StatCard title="Inactive Applications" value="10" bg="#E6E6E6" />
            <StatCard title="Referrals" value="2" bg="#FFD0D1" />
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-3">
              <h2 className="text-xl sora-semibold mb-4">List of Clients</h2>

              <div className="flex items-center gap-3">
                {marketplace ? (
                  admin ? (
                    <button className="open-popup bg-[#0080C6] text-white px-4 py-2 rounded-md hover:bg-[#006ba1] transition text-sm">
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
                <button
                  className={
                    marketplace
                      ? "productlistBtn flex items-center gap-1 border border-gray-300 px-3 py-2 rounded-md text-sm hover:bg-gray-100"
                      : "flex items-center gap-1 border border-gray-300 px-3 py-2 rounded-md text-sm hover:bg-gray-100"
                  }
                >
                  <span className="max-sm:hidden">
                    {marketplace ? "Filter by Product & Services" : "Filter"}
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
              </div>
            </div>
            <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <Th>Application Number</Th>
                    <Th>{admin ? "Customer Name" : "Lender"}</Th>
                    {admin && <Th>Business Name</Th>}
                    <Th>Status</Th>
                    <Th>Amount</Th>
                    <Th className="text-center">
                      {admin ? "Date" : "Date of Application"}
                    </Th>
                    <Th>Shop</Th>
                    <Th>Invoice</Th>
                    <Th>View</Th>
                  </tr>
                </thead>

                <tbody>
                  {clients.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <Td>{item.appNo}</Td>
                      <Td>{item.name}</Td>
                      {admin && <Td>{item.business}</Td>}
                      <Td>{item.status}</Td>
                      <Td className="sora-semibold">{item.amount}</Td>
                      <Td className="" center={""}>
                        {item.date}
                      </Td>

                      <Td center>
                        <IconBtn href="/dashboard/marketplace" img={shopIcon} />
                      </Td>

                      <Td center>
                        <IconBtn
                          img={attachIcon}
                          onClick={() => setShowInvoice(true)}
                        />
                      </Td>

                      <Td center>
                        <IconBtn
                          img={eyeIcon}
                          onClick={() => setShowView(true)}
                        />
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Pagination />

            <div className="mt-8">
              <h2 className="text-2xl font-medium">Recent</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 w-full mt-8">
                {recentData.map((item, i) => (
                  <RecentCards key={i} data={item} />
                ))}
              </div>
            </div>
          </div>

          {showInvoice && (
            <InvoiceModal onClose={() => setShowInvoice(false)} />
          )}
          {showView && <ViewModal onClose={() => setShowView(false)} />}
        </div>

        {/* Popup */}
        {showAddProduct && (
          <AddNewProduct setShowAddProduct={setShowAddProduct} />
        )}
      </AdminLayout>
    </>
  );
};

export default DashBoardUser;
