import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

// Components
import { StatCard, Td, Th } from "../Component/StatCard";
import AdminLayout from "../Component/AdminLayout";
import AddNewProduct from "../Component/AddNewProduct";
import InvoiceModal from "../Component/InvoiceModal";
import ViewModal from "../Component/ViewModal";
import HeaderTable from "../Component/HeaderTable";
import BasicPagination from "../Component/BasicPagination";

const Users = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);

  // Data States
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalApplications, setTotalApplications] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInActive, setTotalInActive] = useState(0);
  const [lastPage, setLastPage] = useState();

  const LoginToken = localStorage.getItem("LoginToken");

  useEffect(() => {
    document.body.style.overflow =
      showInvoice || showView || showAddProduct ? "hidden" : "auto";
  }, [showInvoice, showView, showAddProduct]);

  // Error Handler
  const handleError = (error) => {
    const apiError = error.response?.data?.errors;
    if (apiError) {
      Object.entries(apiError).forEach(([field, messages]) => {
        messages.forEach((msg) => toast.error(msg));
      });
    } else {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      await Promise.all([fetchTotal(), fetchUser()]);
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTotal = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/application-info`,
        { user_id: "" },
        { headers: { Authorization: `Bearer ${LoginToken}` } },
      );
      setTotalApplications(response?.data?.total_application || 0);
      setTotalAmount(response?.data?.loan_amount || 0);
      setTotalInActive(response?.data?.inactive_count || 0);
    } catch (error) {
      handleError(error);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "https://cpanel.lendinghouz.com/api/user/getall",
        {
          headers: { Authorization: `Bearer ${LoginToken}` },
        },
      );
      setUsers(response?.data?.data || []);
      setLastPage(response?.data?.last_page);
    } catch (error) {
      handleError(error);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/user-delete`,
        { id },
        { headers: { Authorization: `Bearer ${LoginToken}` } },
      );

      toast.success(response?.data?.message || "User deleted");
      // Refresh data
      fetchData();
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AdminLayout>
      <div className="p-4 lg:p-6">
        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          <StatCard
            title="Total Applications"
            value={loading ? "..." : totalApplications}
            bg="#E5ECF6"
          />
          <StatCard
            title="Loan Amount"
            value={loading ? "..." : `$${totalAmount}`}
            bg="#D0FFE0"
          />
          <StatCard
            title="Inactive Applications"
            value={loading ? "..." : totalInActive}
            bg="#E6E6E6"
          />
          <StatCard title="Referrals" value="2" bg="#FFD0D1" />
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          {/* <HeaderTable
            setShowAddProduct={setShowAddProduct}
            headingContent="List of Clients"
            marketplace={false}
          /> */}

          <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm mt-4">
            <table className="w-full text-sm text-left text-nowrap">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <Th>Customer Name</Th>
                  <Th>Phone</Th>
                  <Th>Email</Th>
                  <Th>Date Of Birth</Th>
                  <Th>Title</Th>
                  <Th>Edit</Th>
                  <Th>Delete</Th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan="7" className="py-10 text-center">
                      <div className="w-full bg-white/40 flex justify-center items-center ">
                        <div className="animate-spin rounded-full h-15 w-15 border-b-2 border-gray-900"></div>
                      </div>
                    </td>
                  </tr>
                ) : users.length > 0 ? (
                  users.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <Td className="px-6 py-4">{user.name}</Td>
                      <Td className="px-6 py-4">{user.phone}</Td>
                      <Td className="px-6 py-4">{user.email}</Td>
                      <Td className="px-6 py-4">{user.dob}</Td>
                      <Td className="px-6 py-4 font-semibold">{user.title}</Td>
                      <Td className="px-6 py-4">
                        <Link
                          to={`/admin/dashboard/users/view-user?uid=${user.id}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <i className="fa-solid fa-pen-to-square text-lg" />
                        </Link>
                      </Td>
                      <Td className="px-6 py-4">
                        <MdDeleteForever
                          className="cursor-pointer text-2xl text-red-600 hover:text-red-800"
                          onClick={() => deleteUser(user.id)}
                        />
                      </Td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="py-10 text-center text-gray-500">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-8 mx-auto flex justify-center w-full">
            <BasicPagination
              lastPage={lastPage}
              url="user/getall"
              setProducts={setUsers}
            />
          </div>
        </div>

        {/* Modals */}
        {showInvoice && <InvoiceModal onClose={() => setShowInvoice(false)} />}
        {showView && <ViewModal onClose={() => setShowView(false)} />}
        {showAddProduct && (
          <AddNewProduct setShowAddProduct={setShowAddProduct} />
        )}
      </div>
    </AdminLayout>
  );
};

export default Users;
