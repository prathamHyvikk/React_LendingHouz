import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const InvoiceModal = ({ open, onClose, data }) => {
  if (!open) return null;

  const { order_id, user, items = [], grand_total } = data || {};

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  const printInvoice = () => {
    const printContent = document.querySelector(".invoice-print-area");
    const original = document.body.innerHTML;

    document.body.innerHTML = printContent.innerHTML;
    window.print();
    document.body.innerHTML = original;
    window.location.reload();
  };

  return (
    <div className="invoice-print-area ">
      <div className="fixed  inset-0 z-[999] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/60 no-print"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative mx-2 noScrollbar z-50 w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 no-print"
          >
            <IoClose size={26} />
          </button>

          <div
            className="
  rounded-t-2xl
  bg-gradient-to-r from-[#2E3192] to-[#1B1F6B]
  print:bg-[#2E3192]
  p-6 text-white
"
          >
            <div className="flex justify-between items-center">
              <img
                src="/assets/Images/logo.png"
                alt="Logo"
                className="h-10 bg-white rounded px-2 py-1"
              />

              <div className="text-right">
                <h1 className="text-3xl font-bold tracking-wide">Invoice</h1>
                <p className="text-sm opacity-90">Order #{order_id}</p>
                <p className="text-sm opacity-90">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                  Billed To
                </h3>
                <p className="text-lg font-semibold text-gray-800">
                  {user?.name}
                </p>
                <p className="text-sm text-gray-600">{user?.email}</p>
                <p className="text-sm text-gray-600">{user?.phone}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 flex flex-col justify-center">
                <p className="text-sm text-gray-500">Invoice Total</p>
                <p className="text-3xl font-bold text-[#2E3192]">
                  ${grand_total}
                </p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="py-3 px-4 text-left">Product</th>
                    <th className="py-3 px-4 text-center">Qty</th>
                    <th className="py-3 px-4 text-right">Price</th>
                    <th className="py-3 px-4 text-right">Total</th>
                  </tr>
                </thead>

                <tbody>
                  {items.map((item, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="py-3 px-4 font-medium text-gray-800">
                        {item.product_name}
                      </td>
                      <td className="py-3 px-4 text-center">{item.quantity}</td>
                      <td className="py-3 px-4 text-right">${item.price}</td>
                      <td className="py-3 px-4 text-right font-semibold">
                        ${item.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex justify-end">
              <div className="w-full sm:w-1/3 bg-[#F4F5FF] rounded-xl p-5">
                <div className="flex justify-between text-lg font-bold text-[#2E3192]">
                  <span>Grand Total</span>
                  <span>${grand_total}</span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                Thank you for your purchase 💙
              </p>
              <button
                onClick={printInvoice}
                className="px-6 py-2 cursor-pointer rounded-lg bg-[#002e6d] text-white no-print"
              >
                Print Invoice
              </button>
            </div>
            <div className="flex justify-center mt-5">
              <button
                onClick={() => navigate("/app/dashboard")}
                className="px-6 sora-semibold cursor-pointer py-2 rounded-lg border-2 border-[#002e6d] text-[#002e6d] hover:bg-[#002e6d] hover:text-white no-print"
              >
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
