import React from "react";
import { useState, useEffect } from "react";
import { IconBtn, StatCard, Td, Th } from "../Component/StatCard";
import AdminLayout from "../Component/AdminLayout";
import shopIcon from "/assets/Images/shop-icon.png";
import attachIcon from "/assets/Images/attach-icon.png";
import eyeIcon from "/assets/Images/eye-icon.png";
import AddNewProduct from "../Component/AddNewProduct";

import InvoiceModal from "../Component/InvoiceModal";
import ViewModal from "../Component/ViewModal";

import { clients } from "../data/userDashboard.json";
import { recentData } from "../data/userDashboard.json";
import HeaderTable from "../Component/HeaderTable";
import { useSelector } from "react-redux";
import { IoEyeOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { ImAttachment } from "react-icons/im";
import SmallCard from "../Component/SmallCard";
import axios from "axios";

const DashBoardUser = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [recentProducts, setRecentProducts] = useState([]);
  const [showView, setShowView] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [applications, setApplications] = useState();
  const [loading, setLoading] = useState(false);

  const role = useSelector((state) => state.person.value);
  const LoginToken = localStorage.getItem("LoginToken");
  const userId = useSelector((state) => state.person.id);

  useEffect(() => {
    document.body.style.overflow = showInvoice || showView ? "hidden" : "auto";
  }, [showInvoice, showView]);

  const recentProduct = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/recent-product`,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );

      setRecentProducts(response?.data.data);
    } catch (error) {
      toast.error(error?.response.data.message);
    }
  };

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/categories`,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );

      setCategories(response?.data?.categories);
    } catch (error) {
      toast.error(error?.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://cpanel.lendinghouz.com/api/show-application`,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
          params: {
            user_id: userId,
          },
        },
      );

      setApplications(response?.data?.applications);
    } catch (error) {
      toast.error(error?.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
    fetchCategories();
  }, []);

  useEffect(() => {
    recentProduct();
  }, []);

  console.log(applications, categories);

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
              setSelectedCategory={setSelectedCategory}
              headingContent="List of Clients"
              marketplace={false}
            />
            <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <Th>Application Number</Th>
                    <Th>{role == "admin" ? "Customer Name" : "Lender"}</Th>
                    {role == "admin" && <Th>Business Name</Th>}
                    <Th>Status</Th>
                    <Th>Amount</Th>
                    <Th className="text-center">
                      {role == "admin" ? "Date" : "Date of Application"}
                    </Th>
                    <Th>Shop Now! </Th>
                    <Th>Attach Invoice</Th>
                    <Th>View Details</Th>
                  </tr>
                </thead>

                <tbody>
                  {loading && (
                    <div className="my-15 flex justify-center items-center">
                      <div className="animate-spin rounded-full h-13 w-13 border-b-3 border-gray-900"></div>
                    </div>
                  )}
                  {applications?.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <Td>#{item.application_id}</Td>
                      <Td>{item.lender_name || "N/A"}</Td>
                      {role == "admin" && <Td>{item.business}</Td>}
                      <Td>{item.application_status}</Td>
                      <Td className="sora-semibold">{item.requested_income}</Td>
                      <Td className="" center={""}>
                        {item.created_at.split("T")[0]}
                      </Td>

                      <Td center={"yes"} className="flex justify-center">
                        <IconBtn
                          href={`/${role}/dashboard/marketplace`}
                          icon={<CiShop />}
                        />
                      </Td>

                      <Td center={"yes"}>
                        <IconBtn
                          icon={<ImAttachment />}
                          onClick={() => setShowInvoice(true)}
                        />
                      </Td>

                      <Td center>
                        <IconBtn
                          icon={<IoEyeOutline />}
                          onClick={() => setShowView(true)}
                        />
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <h2 className="!text-2xl sora-medium">Recent</h2>
              <div className="grid md:grid-cols-3 items-center gap-6 w-full mt-8">
                {recentProducts.map((item, index) => (
                  <SmallCard key={index} data={item} imageUrl={"yes"} />
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
