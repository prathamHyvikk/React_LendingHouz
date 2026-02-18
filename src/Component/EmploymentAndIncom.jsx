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
  employmentAndIncom,
}) => {
  // const [grossIncome, setGrossIncome] = useState("");
  // const [netIncome, setNetIncome] = useState("");
  // const [requestedAmount, setRequestedAmount] = useState("");
  // const [lastPayDate, setLastPayDate] = useState("");
  // const [nextPayDate, setNextPayDate] = useState("");
  // const [paymentFrequency, setPaymentFrequency] = useState("");
  // const [dob, setDob] = useState("");
  // const [ssn, setSsn] = useState("");
  // const [check, setCheck] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const LoginToken = localStorage.getItem("LoginToken");

  const personId = useSelector((state) => state.person.id);
  const navigate = useNavigate();

  const handleChange = (field) => (e) => {
    const value = field === "check" ? e.target.checked : e.target.value;

    setEmploymentAndIncom((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const formatSSN = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 9);

    if (digits.length <= 3) return digits;
    if (digits.length <= 5) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("gross_income", employmentAndIncom.grossIncome);
    formData.append("net_income", employmentAndIncom.netIncome);
    formData.append("requested_income", employmentAndIncom.requestedAmount);
    formData.append("dob", employmentAndIncom.dob);
    formData.append("ssn", (employmentAndIncom.ssn || "").replaceAll("-", ""));

    formData.append("last_pay_date", employmentAndIncom.lastPayDate);
    formData.append("next_pay_date", employmentAndIncom.nextPayDate);
    formData.append("payment_frequency", employmentAndIncom.paymentFrequency);
    formData.append("consent", employmentAndIncom.check);

    try {
      const form = new FormData();

      form.append("user_id", personId);
      form.append("product_type", confirmFinance.replace("_", " "));

      // verifyContact.forEach((value, key) => {
      //    console.log("now")
      //   form.append(key, value);
      // });
      Object.entries(verifyContact).forEach(([key, value]) => {
        form.append(key, value);
      });

      formData.forEach((value, key) => {
        form.append(key, value);
      });

      setLoading(true);

      // form.forEach((value, key) => {
      //   console.log(`${key}: ${value}`); 
      // });

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/create-application`,
        form,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      toast.success(response.data.message);
      navigate("/app/dashboard/applications");
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data) {
        const apiErrors = error.response.data.errors; 
        setError(apiErrors);

      
        if (typeof apiErrors === "object" && apiErrors !== null) {
        
          const firstKey = Object.keys(apiErrors)[0];
          const message = apiErrors[firstKey];

          if (Array.isArray(message)) {
            toast.error(message[0]); 
          } else {
            toast.error(String(message));
          }
        } else {
          toast.error(error.response.data.message || "Validation Error");
        }
      } else {
        toast.error("Something went wrong. Please try again.");
      }
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
                    value={employmentAndIncom.grossIncome}
                    required
                    onChange={handleChange("grossIncome")}
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
                    value={employmentAndIncom.netIncome}
                    required
                    onChange={handleChange("netIncome")}
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
                    value={employmentAndIncom.requestedAmount}
                    required
                    onChange={handleChange("requestedAmount")}
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
                  value={employmentAndIncom.paymentFrequency}
                  required
                  onChange={handleChange("paymentFrequency")}
                  className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-400 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                  id="frequency-select"
                >
                  <option className="text-gray-400">Select Frequency</option>
                  <option className="text-gray-700" value="Daily">
                    Daily
                  </option>
                  <option className="text-gray-700" value="Weekly">
                    Weekly
                  </option>
                  <option className="text-gray-700" value="Monthly">
                    Monthly
                  </option>
                  <option className="text-gray-700" value="Yearly">
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
                  Date of Birth (MM/DD/YYYY){" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  value={employmentAndIncom.dob}
                  required
                  onChange={handleChange("dob")}
                  max={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md
     focus:outline-none focus:ring-2 focus:ring-blue-500
     focus:border-transparent placeholder:text-gray-400"
                />
                {error?.dob && (
                  <p className="text-red-600 text-xs mt-1">{error?.dob}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SSN/TIN (XXX-XX-XXXX) *{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={employmentAndIncom.ssn}
                  maxLength={11}
                  onChange={(e) =>
                    setEmploymentAndIncom((prev) => ({
                      ...prev,
                      ssn: formatSSN(e.target.value),
                    }))
                  }
                  placeholder="xxx-xx-xxxx"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md
    focus:outline-none focus:ring-2 focus:ring-blue-500
    focus:border-transparent placeholder:text-gray-400"
                />

                {error?.ssn && (
                  <p className="text-red-600 text-xs mt-1">{error?.ssn}</p>
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
                  value={employmentAndIncom.lastPayDate}
                  required
                  onChange={handleChange("lastPayDate")}
                  //   max={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md
     focus:outline-none focus:ring-2 focus:ring-blue-500
     focus:border-transparent placeholder:text-gray-400"
                />
                {error?.last_pay_date && (
                  <p className="text-red-600 text-xs mt-1">
                    {error?.last_pay_date}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Next Pay Date <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  value={employmentAndIncom.nextPayDate}
                  required
                  onChange={handleChange("nextPayDate")}
                  //   max={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md
     focus:outline-none focus:ring-2 focus:ring-blue-500
     focus:border-transparent placeholder:text-gray-400"
                />
                {error?.next_pay_date && (
                  <p className="text-red-600 text-xs mt-1">
                    {error?.next_pay_date}
                  </p>
                )}
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
                  required
                  checked={employmentAndIncom.check}
                  onChange={handleChange("check")}
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

        <div
          onClick={() => setActiveStep((s) => s - 1)}
          className=" w-fit bg-(--primary-color) cursor-pointer hover:bg-blue-950 text-white px-4 py-2 rounded-md font-semibold transition-colors mt-2"
        >
          Back
        </div>
      </div>
    </>
  );
};

export default EmploymentAndIncom;
