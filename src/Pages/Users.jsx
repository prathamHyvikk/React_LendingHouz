import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useState, useEffect } from "react";
import { IconBtn, StatCard, Td, Th } from "../Component/StatCard";
import AdminLayout from "../Component/AdminLayout";
import AddNewProduct from "../Component/AddNewProduct";

import InvoiceModal from "../Component/InvoiceModal";
import ViewModal from "../Component/ViewModal";

import HeaderTable from "../Component/HeaderTable";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Users = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [users, setUsers] = useState([]);

  const [totalApplications, setTotalApplications] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInActive, setTotalInActive] = useState(0);
  const [totalReferral, setTotalReferral] = useState(0);
  // const [selectedApplication, setSelectedApplication] = useState(null);
  const role = useSelector((state) => state.person.value);
  const LoginToken = localStorage.getItem("LoginToken");

  useEffect(() => {
    document.body.style.overflow = showInvoice || showView ? "hidden" : "auto";
  }, [showInvoice, showView]);

  const fetchTotal = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/application-info`,
        {
          user_id: "",
        },

        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );

      setTotalApplications(response?.data?.total_application);
      setTotalAmount(response?.data?.loan_amount);
      setTotalInActive(response?.data?.inactive_count);
    } catch (error) {
      toast.error(error?.response.data.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/user-delete`,
        {
          id,
        },

        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );
    } catch (error) {
      const apiError = error.response.data.errors;
      if (apiError) {
        Object.entries(apiError).forEach(([field, messages]) => {
          messages.forEach((msg) => {
            toast.error(` ${msg}`);
          });
        });
      } else {
        toast.error(error?.response.data.message);
      }
    }
  };

  const response = async () => {
    try {
      const response = await axios.get(
        "https://cpanel.lendinghouz.com/api/user/getall",
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );

      setUsers(response?.data?.data);
    } catch (error) {
      const apiError = error.response.data.errors;
      if (apiError) {
        Object.entries(apiError).forEach(([field, messages]) => {
          messages.forEach((msg) => {
            toast.error(` ${msg}`);
          });
        });
      } else {
        toast.error(error?.response.data.message);
      }
    }
  };

  useEffect(() => {
    fetchTotal();
    response();
  }, []);

  return (
    <>
      <AdminLayout>
        <div className="">
          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
            <StatCard
              title="Total Applications"
              value={totalApplications}
              bg="#E5ECF6"
            />
            <StatCard
              title="Loan Amount"
              value={`$${totalAmount}`}
              bg="#D0FFE0"
            />
            <StatCard
              title="Inactive Applications"
              value={totalInActive}
              bg="#E6E6E6"
            />
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
              <table className="w-full text-sm text-nowrap">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <Th>Customer Name</Th>
                    <Th>Phone</Th>
                    <Th>Email</Th>

                    <Th>Date Of Birth </Th>

                    <Th>Title </Th>

                    <Th>Edit</Th>
                    <Th>Delete</Th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <Td className="px-6 py-4 text-gray-700">{user.name}</Td>
                      <Td className="px-6 py-4 text-gray-700">{user.phone}</Td>
                      <Td className="px-6 py-4 text-gray-700">{user.email}</Td>

                      <Td className="px-6 py-4 text-gray-700">{user.dob}</Td>
                      <Td className="px-6 py-4 sora-semibold text-gray-700">
                        {user.title}
                      </Td>

                      <Td className="px-6 py-4 text-black">
                        <Link
                          to={`/admin/dashboard/users/view-user?uid=${user.id}`}
                        >
                          <i className="fa-solid fa-pen-to-square" />
                        </Link>
                      </Td>
                      <Td className="px-6 py-4  text-xl text-red-600">
                        <MdDeleteForever
                          className="cursor-pointer"
                          onClick={() => deleteUser(user.id)}
                        />
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

export default Users;
