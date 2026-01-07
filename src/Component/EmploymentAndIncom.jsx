import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EmploymentAndIncom = ({
  confirmFinance,
  verifyContact,
  setActiveStep,
  setEmploymentAndIncom,
}) => {
  const [grossIncome, setGrossIncome] = useState("");
  const [netIncome, setNetIncome] = useState("");
  const [requestedAmount, setRequestedAmount] = useState("");
  const [lastPayDate, setLastPayDate] = useState("");
  const [nextPayDate, setNextPayDate] = useState("");
  const [paymentFrequency, setPaymentFrequency] = useState("");
  const [check, setCheck] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const LoginToken = localStorage.getItem("LoginToken");
  const personId = useSelector((state) => state.person.id);
  const navigate = useNavigate();
  console.log(personId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("gross_income", grossIncome);
    formData.append("net_income", netIncome);
    formData.append("requested_income", requestedAmount);
    formData.append("last_pay_date", lastPayDate);
    formData.append("next_pay_date", nextPayDate);
    formData.append("payment_frequency", paymentFrequency);
    formData.append("consent", check);

    setEmploymentAndIncom(formData);

    try {
      const form = new FormData();

      form.append("user_id", personId);
      form.append("product_type", confirmFinance);

      verifyContact.forEach((value, key) => {
        form.append(key, value);
      });

      formData.forEach((value, key) => {
        form.append(key, value);
      });

      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/create-application`,
        form,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(response.data.message);
      navigate("/app/dashboard");
    } catch (error) {
      setLoading(false);
      if (error.response) {
        const apiError = error.response.data.errors;
        setError(apiError);

        const firstError = Object.values(apiError)?.[0];

        if (firstError) {
          toast.error(firstError);
        }
      }
      //   toast.error(error.message);
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto lg:mt-14">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-(--primary-color) text-white py-4 px-6">
            <h2 className="text-xl font-bold">Form</h2>
          </div>
          <form onSubmit={handleSubmit} className="sm:p-6 p-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gross Annual Income <span className="text-red-600">*</span>
                </label>
                <div className="flex items-center border border-gray-300 rounded-md bg-white">
                  <span className="px-3 py-2 text-gray-600 border-r border-gray-300 font-medium">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="xxxx"
                    value={grossIncome}
                    onChange={(e) => setGrossIncome(e.target.value)}
                    className="flex-1 px-2 py-2 outline-none bg-transparent text-gray-700 placeholder-gray-400"
                  />
                </div>
                {error?.gross_income && (
                  <p className="text-red-600 text-xs mt-1">
                    {error?.gross_income}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Net Annual Income <span className="text-red-600">*</span>
                </label>
                <div className="flex items-center border border-gray-300 rounded-md bg-white">
                  <span className="px-3 py-2 text-gray-600 border-r border-gray-300 font-medium">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="xxxx"
                    value={netIncome}
                    onChange={(e) => setNetIncome(e.target.value)}
                    className="flex-1 px-2 py-2 outline-none bg-transparent text-gray-700 placeholder-gray-400"
                  />
                </div>
                {error?.net_income && (
                  <p className="text-red-600 text-xs mt-1">
                    {error?.net_income}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Requested Amount <span className="text-red-600">*</span>
                </label>
                <div className="flex items-center border border-gray-300 rounded-md bg-white">
                  <span className="px-3 py-2 text-gray-600 border-r border-gray-300 font-medium">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="xxxx"
                    value={requestedAmount}
                    onChange={(e) => setRequestedAmount(e.target.value)}
                    className="flex-1 px-2 py-2 outline-none bg-transparent text-gray-700 placeholder-gray-400"
                  />
                </div>
                {error?.requested_income && (
                  <p className="text-red-600 text-xs mt-1">
                    {error?.requested_income}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Frequency <span className="text-red-600">*</span>
                </label>
                <select
                  value={paymentFrequency}
                  onChange={(e) => setPaymentFrequency(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-400 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                  id="frequency-select"
                >
                  <option className="text-gray-400">Select Frequency</option>
                  <option className="text-gray-700" value="daily">
                    Daily
                  </option>
                  <option className="text-gray-700" value="weekly">
                    Weekly
                  </option>
                  <option className="text-gray-700" value="monthly">
                    Monthly
                  </option>
                  <option className="text-gray-700" value="yearly">
                    Yearly
                  </option>
                </select>
                {error?.payment_frequency && (
                  <p className="text-red-600 text-xs mt-1">
                    {error?.payment_frequency}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Pay Date <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  value={lastPayDate}
                  onChange={(e) => setLastPayDate(e.target.value)}
                  //   max={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md
     focus:outline-none focus:ring-2 focus:ring-blue-500
     focus:border-transparent placeholder:text-gray-400"
                />
                {
                  error?.last_pay_date && (
                    <p className="text-red-600 text-xs mt-1">
                      {error?.last_pay_date}
                    </p>
                  )
                }
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Next Pay Date <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  value={nextPayDate}
                  onChange={(e) => setNextPayDate(e.target.value)}
                  //   max={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md
     focus:outline-none focus:ring-2 focus:ring-blue-500
     focus:border-transparent placeholder:text-gray-400"
                />
                {
                  error?.next_pay_date && (
                    <p className="text-red-600 text-xs mt-1">
                      {error?.next_pay_date}
                    </p>
                  )
                }
              </div>
            </div>
            <div className="mb-6">
              <p className="text-base font-bold text-(--primary-color) mb-3">
                Consent
              </p>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  id="confirm"
                  value={check}
                  onChange={() => setCheck(!check)}
                  className="w-4 h-4 text-(--primary-color) border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  I agree to the terms and conditions and authorize the lender
                  to obtain and verify my credit and personal information for
                  this application.
                </span>
              </label>
              {error?.consent && (
                <p className="text-red-600 text-xs mt-1">{error?.consent}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "pointer-events-none bg-gray-400 " : "cursor-pointer"
              }  bg-(--primary-color) hover:bg-blue-950 text-white py-2 rounded-md font-semibold transition-colors`}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmploymentAndIncom;
