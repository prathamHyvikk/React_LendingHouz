import React from "react";
import { useState, useEffect } from "react";
import { IconBtn, StatCard, Td, Th } from "../Component/StatCard";
import AdminLayout from "../Component/AdminLayout";
import shopIcon from "/assets/Images/shop-icon.png";
import attachIcon from "/assets/Images/attach-icon.png";
import eyeIcon from "/assets/Images/eye-icon.png";
import AddNewProduct from "../Component/AddNewProduct";
import Pagination from "../Component/Pagination";
import RecentCards from "../Component/RecentCards";
import InvoiceModal from "../Component/InvoiceModal";
import ViewModal from "../Component/ViewModal";

import { users } from "../data/userDashboard.json";
import { recentData } from "../data/userDashboard.json";
import HeaderTable from "../Component/HeaderTable";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Users = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);

   const role = useSelector((state) => state.person.value);

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
          <div className="bg-white rounded-lg shadow-sm p-3">
            <HeaderTable
              setShowAddProduct={setShowAddProduct}
              headingContent="List of Clients"
              marketplace={false}
            />
            <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <Th>Customer Name</Th>
                    <Th>Account ID</Th>

                    <Th>Total Loan</Th>
                    <Th>Total Return </Th>

                    <Th>Status </Th>
                    <Th>Risk Tier</Th>
                    <Th>Next Payment</Th>
                    <Th>Edit</Th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <Td className="px-6 py-4 text-gray-700">{user.name}</Td>
                      <Td className="px-6 py-4 text-gray-700">
                        {user.accountId}
                      </Td>
                      <Td className="px-6 py-4 text-gray-700">
                        {user.totalLoan}
                      </Td>
                      <Td className="px-6 py-4 text-gray-700">
                        {user.totalReturn}
                      </Td>
                      <Td className="px-6 py-4 sora-semibold text-gray-700">
                        {user.status}
                      </Td>
                      <Td className="px-6 py-4 text-gray-700">
                        {user.riskTier}
                      </Td>
                      <Td className="px-6 py-4 text-gray-700">
                        {user.nextPayment}
                      </Td>
                      <Td className="px-6 py-4 text-black">
                        <Link to={`/dashboard/users/view-user?uid=1234`}>
                          <i className="fa-solid fa-pen-to-square" />
                        </Link>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Pagination />
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

export default Users;
