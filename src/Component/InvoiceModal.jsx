import React, { useEffect, useRef, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import logoImage from "/assets/Images/logo.png";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const InvoiceModal = ({ onClose, invoice }) => {
  const printRef = useRef();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const LoginToken = useSelector((state) => state.auth.token);

  const fetchInvoice = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://cpanel.lendinghouz.com/api/get-invoice-product`,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
          params: {
            id: invoice.id,
          },
        },
      );

      setData(response?.data);
    } catch (error) {
      toast.error(error?.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (invoice?.id) {
      fetchInvoice();
    }
  }, [invoice]);

  const { order, user, items, grand_total, application, tfc_invoice } =
    data || {};
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount || 0);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <ModalWrapper onClose={onClose}>
      {/* Tailwind Note: Added 'print-content' style logic.
        The @media print CSS below handles hiding everything except this modal.
      */}
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            #printable-invoice, #printable-invoice * {
              visibility: visible;
            }
            #printable-invoice {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              margin: 0;
              padding: 20px;
              box-shadow: none;
            }
            .no-print {
              display: none !important;
            }
          }
        `}
      </style>

      <div
        id="printable-invoice"
        className="bg-white rounded-2xl shadow-2xl w-[95vw] max-w-4xl overflow-y-auto max-h-[95vh] border border-gray-100 mx-auto"
      >
        {/* Header Section */}
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 sm:px-6 py-4 flex items-center justify-between no-print">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-(--primary-color) rounded-full"></div>
            <h2 className="text-lg sm:text-xl sora-bold text-gray-900">
              Invoice Detail
            </h2>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-red-50 text-gray-400 hover:text-red-500 transition-all p-2 rounded-full cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-[60vh] w-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : !data ? (
          <div className="w-[90vw] max-w-md p-10 text-center">
            <p className="text-red-500 text-sm">No data found</p>
          </div>
        ) : (
          <div className="p-4 sm:p-10">
            {/* Brand & Meta Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pb-8 border-b border-gray-100">
              <div className="space-y-4">
                <img
                  src={logoImage}
                  className="h-10 sm:h-12 w-auto object-contain"
                  alt="Logo"
                />
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-gray-500">
                    Date Issued
                  </p>
                  <p className="sora-semibold text-gray-900 text-sm sm:text-base">
                    {formatDate(order?.created_at)}
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right space-y-2 w-full sm:w-auto">
                <p className="text-xs sm:text-sm   sora-bold text-gray-900">
                  Invoice #-{tfc_invoice?.InvoiceNumber}
                </p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sora-bold uppercase tracking-wider bg-blue-50 text-(--primary-color) border border-blue-100">
                  {order?.method} Payment
                </span>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                <h4 className="text-[10px] sora-bold text-gray-400 uppercase tracking-widest mb-3">
                  Bill To
                </h4>
                <p className="sora-bold text-gray-900">
                  {application?.first_name} {application?.first_name}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Customer ID: {application?.user_id}
                </p>

                <div>
                  <p className="text-xs mt-1  text-gray-600">
                    {application?.address_1}, <br /> {application?.city}{" "}
                    {application?.state} , {application?.zipcode}
                  </p>
                </div>
                <div className="mt-3 space-y-1 text-xs sm:text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <span>📩</span> {application?.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📞</span> {application?.mobile}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                <h4 className="text-[10px] sora-bold text-gray-400 uppercase tracking-widest mb-3">
                  Business Info
                </h4>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Gross Income:</span>
                    <span className="sora-medium text-gray-900">
                      {application?.gross_income || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Pay Frequency:</span>
                    <span className="sora-medium text-orange-500">
                      {application?.payment_frequency || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">SSN:</span>
                    <span className="sora-medium text-gray-900">
                      {application?.ssn || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">DOB:</span>
                    <span className="sora-medium text-gray-900">
                      {application?.dob || "N/A"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                <h4 className="text-[10px] sora-bold text-gray-400 uppercase tracking-widest mb-3">
                  Order Details
                </h4>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Application ID:</span>
                    <span className="sora-medium text-gray-900">
                      {application?.application_id || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status:</span>
                    <span className="text-green-600 sora-bold">Paid</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Items Table - Responsive Scroll for mobile */}
            <div className="mb-8 overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-left min-w-[500px]">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-4 py-3 text-[10px] sora-bold uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-4 py-3 text-[10px] sora-bold uppercase tracking-wider text-center">
                      Qty
                    </th>
                    <th className="px-4 py-3 text-[10px] sora-bold uppercase tracking-wider text-right">
                      Price
                    </th>
                    <th className="px-4 py-3 text-[10px] sora-bold uppercase tracking-wider text-right">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {items?.map((item, index) => (
                    <tr key={index} className="text-sm">
                      <td className="px-4 py-4 sora-medium text-gray-900">
                        {item.product_name}
                      </td>
                      <td className="px-4 py-4 text-center text-gray-600">
                        {item.quantity}
                      </td>
                      <td className="px-4 py-4 text-right text-gray-600">
                        {formatCurrency(item.price)}
                      </td>
                      <td className="px-4 py-4 text-right sora-bold text-gray-900">
                        {formatCurrency(item.total)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Calculation */}
            <div className="flex justify-end mb-8">
              <div className="w-full sm:w-64 space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Subtotal</span>
                  <span>{formatCurrency(grand_total)}</span>
                </div>
                <div className="h-px bg-gray-100 my-2"></div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sora-bold text-gray-900">
                    Grand Total
                  </span>
                  <span className="text-xl sora-bold text-(--primary-color)">
                    {formatCurrency(grand_total)}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center no-print">
              <button
                onClick={handlePrint}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-3 bg-(--primary-color) text-white rounded-xl hover:opacity-90 transition-all sora-bold text-sm cursor-pointer shadow-lg shadow-blue-100"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
                Print & Save as PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </ModalWrapper>
  );
};

export default InvoiceModal;
