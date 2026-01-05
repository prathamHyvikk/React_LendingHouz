import React from "react";
import { useState, useEffect } from "react";
import { IconBtn, StatCard, Td, Th } from "../Component/StatCard";
import AdminLayout from "../Component/AdminLayout";

import printIcon from "/assets/Images/print-icon.png";
import AddNewProduct from "../Component/AddNewProduct";

import { applicationData } from "../data/userDashboard.json";
import ViewModal from "../Component/ViewModal";
import PrintPopup from "../Component/PrintPopup";
import { useSelector } from "react-redux";

const ApplicationsDashboard = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [showView, setShowView] = useState(false);

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const role = useSelector((state) => state.person.value);
  const marketplace = false;

  const showDropdown = (e) => {
    e.stopPropagation();

    setPosition({
      x: e.clientX - 120,
      y: e.clientY,
    });

    setShowView(true);
  };

  useEffect(() => {
    document.body.style.overflow = showInvoice || showView ? "hidden" : "auto";
  }, [showInvoice, showView]);

  return (
    <>
      <AdminLayout>
        <div className="">
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
              <h2 className="text-lg sora-semibold ">List of Applications</h2>

              <div className="flex items-center gap-3">
                {marketplace ? (
                  role == "admin" ? (
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
                    <Th>{role == "admin" ? "Application" : "Product"}</Th>
                    <Th>Application Status</Th>

                    <Th>{role == "admin" ? "Lender" : "Payment Provider"}</Th>
                    <Th>Application Number</Th>
                    {/* <Th>Amount</Th> */}
                    {/* <Th className="text-center">
                      {role == "admin" ? "Date" : "Date of Application"}
                    </Th> */}
                    <Th>
                      {role == "admin"
                        ? "Application Number"
                        : "Requested Amount"}
                    </Th>
                    <Th>Applied On </Th>
                    <Th> Print Invoice</Th>
                  </tr>
                </thead>

                <tbody>
                  {applicationData.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <Td>
                        <div className="flex items-center gap-2">
                          <img
                            className="shrink-0 w-12 h-12 "
                            src={item.img}
                            alt="image"
                          />
                          {item.name}
                        </div>
                      </Td>
                      <Td center={"yes"}>{item.status}</Td>
                      <Td>{item.lender}</Td>

                      <Td center={"yes"}>{item.applicationNo}</Td>
                      <Td center={"yes"}>{item.applicationAmount}</Td>
                      <Td className="" center={""}>
                        {item.date}
                      </Td>

                      <Td center>
                        <IconBtn img={printIcon} onClick={showDropdown} />
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            //
          </div>

          {showInvoice && (
            <InvoiceModal onClose={() => setShowInvoice(false)} />
          )}
          {showView && (
            <PrintPopup
              position={position}
              onClose={() => setShowView(false)}
              setShowView={setShowView}
            />
          )}
        </div>

        {/* Popup */}
        {showAddProduct && (
          <AddNewProduct setShowAddProduct={setShowAddProduct} />
        )}
      </AdminLayout>
    </>
  );
};

export default ApplicationsDashboard;
