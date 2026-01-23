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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderTable from "../Component/HeaderTable";
import { AiOutlinePrinter } from "react-icons/ai";

const AdminApplicationsDashboard = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [showView, setShowView] = useState(false);
  const [applications, setApplications] = useState();
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const role = useSelector((state) => state.person.value);
  const LoginToken = localStorage.getItem("LoginToken");
  // const userId = useSelector((state) => state.person.id);
  const marketplace = false;

  const navigate = useNavigate();
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

  const fetchCategories = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/categories`,
      {
        headers: {
          Authorization: `Bearer ${LoginToken}`,
        },
      },
    );

    setCategories(response?.data?.categories);
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
            <HeaderTable
              setShowAddProduct={setShowAddProduct}
              setSelectedCategory={setSelectedCategory}
              setApplications={setApplications}
              search={search}
              setSearch={setSearch}
              headingContent="List of Applications"
              navigationLink="/admin/dashboard/applications/new-application"
              fetchProductFromCategory={"no"}
            />
            <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm min-h-30 max-h-90">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 text-gray-700 sticky top-0">
                  <tr>
                    <Th>{role == "admin" ? "Application" : "Product"}</Th>
                    <Th>Application Status</Th>

                    <Th>{role == "admin" ? "Lender" : "Payment Provider"}</Th>
                    <Th>Application Number</Th>
                    {/* <Th>Amount</Th> */}
                    {/* <Th className="text-center">
                      {role == "admin" ? "Date" : "Date of Application"}
                    </Th> */}
                    <Th>Approved Amount</Th>
                    <Th>Applied On </Th>
                    <Th> Print Invoice</Th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <>
                      <tr className="flex justify-center items-center w-full">
                        <td className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></td>
                      </tr>
                    </>
                  ) : selectedCategory == "" ? (
                    <>
                      {applications?.map((item, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <Td>
                            <div className="flex items-center gap-2">
                              <img
                                className="shrink-0 w-12 h-12 "
                                src={item.img || "/assets/Images/product.png"}
                                alt="image"
                              />
                              {item.product_type}
                            </div>
                          </Td>
                          <Td center={"yes"}>{item.application_status}</Td>
                          <Td>{item.lender}</Td>

                          <Td center={"yes"}>{item.application_id}</Td>
                          <Td center={"yes"}>{item.approvalAmount == null ? "-" : item.approvalAmount}</Td>
                          <Td className="" center={""}>
                            {item.created_at
                              .split("T")[0]
                              .split("-")
                              .reverse()
                              .join("/")}
                          </Td>

                          <Td center>
                            <IconBtn
                              icon={<AiOutlinePrinter />}
                              onClick={showDropdown}
                            />
                          </Td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <>
                      {applications?.filter(
                        (item) => item.product_type == selectedCategory,
                      ).length == 0 ? (
                        <Td
                          center={"yes"}
                          className="col-span-7 text-nowrap text-red-500 font-bold text-sm text-start"
                        >
                          No Application Found
                        </Td>
                      ) : search == "" ? (
                        applications
                          ?.filter(
                            (item) => item.product_type == selectedCategory,
                          )
                          .map((item, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                              <Td>
                                <div className="flex items-center gap-2">
                                  <img
                                    className="shrink-0 w-12 h-12 "
                                    src={
                                      item.img || "/assets/Images/product.png"
                                    }
                                    alt="image"
                                  />
                                  {item.product_type}
                                </div>
                              </Td>
                              <Td center={"yes"}>{item.status}</Td>
                              <Td>{item.lender}</Td>

                              <Td center={"yes"}>{item.applicationNo}</Td>
                              <Td center={"yes"}>{item.requested_income}</Td>
                              <Td className="" center={""}>
                                {item.created_at
                                  .split("T")[0]
                                  .split("-")
                                  .reverse()
                                  .join("/")}
                              </Td>

                              <Td center>
                                <IconBtn
                                  icon={<AiOutlinePrinter />}
                                  onClick={showDropdown}
                                />
                              </Td>
                            </tr>
                          ))
                      ) : (
                        // search functionality mate
                        applications
                          ?.filter((item) => item.product_type == search)
                          .map((item, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                              <Td>
                                <div className="flex items-center gap-2">
                                  <img
                                    className="shrink-0 w-12 h-12 "
                                    src={
                                      item.img || "/assets/Images/product.png"
                                    }
                                    alt="image"
                                  />
                                  {item.product_type}
                                </div>
                              </Td>
                              <Td center={"yes"}>{item.status}</Td>
                              <Td>{item.lender}</Td>

                              <Td center={"yes"}>{item.application_id}</Td>
                              <Td center={"yes"}>{item.requested_income}</Td>
                              <Td className="" center={""}>
                                {item.created_at
                                  .split("T")[0]
                                  .split("-")
                                  .reverse()
                                  .join("/")}
                              </Td>

                              <Td center>
                                <IconBtn
                                  icon={<AiOutlinePrinter />}
                                  onClick={showDropdown}
                                />
                              </Td>
                            </tr>
                          ))
                      )}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {showInvoice && (
            <>
              <InvoiceModal onClose={() => setShowInvoice(false)} />
            </>
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

export default AdminApplicationsDashboard;
