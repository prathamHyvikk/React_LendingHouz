import React, { useState } from "react";
import AdminLayout from "../Component/AdminLayout";
import { Link } from "react-router-dom";
import ThankyouPopup from "../Component/ThankyouPopup";

const AdminCheckOut = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [lender, setLender] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const [thanksPopup, setThanksPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setThanksPopup(true);
  };

  return (
    <>
      <AdminLayout>
        <div className="max-w-6xl mx-auto mt-6 lg:mt-14">
          <div className="flex flex-col lg:flex-row min-h-screen rounded-xl shadow overflow-hidden">
            <div className="w-full lg:w-2/5 bg-[#3F3F3F] text-white p-4 lg:p-8">
              <div className="mb-14">
                <img
                  src="/assets/Images/logo.png"
                  className="w-33"
                  alt="logo"
                />
              </div>

              <div className="mb-12">
                <h2 className="text-xl sora-semibold mb-6">Order summary</h2>

                <div className="flex gap-4 mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=120&h=120&fit=crop"
                    alt="House"
                    className="w-22 h-22 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="sora-medium mb-2">Colorful racing shoes</h3>
                    <div className="text-sm text-gray-300 space-y-1">
                      <div className="flex justify-between">
                        <span>---</span>
                        <span>---</span>
                      </div>
                      <div className="flex justify-between">
                        <span>----</span>
                        <span>--</span>
                      </div>
                      <div className="flex justify-between">
                        <span>----</span>
                        <span>---</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-lg sora-semibold pt-6 border-t border-gray-600">
                  <span>Total bill</span>
                  <span>$10,000</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-3/5 bg-white p-8 lg:p-12">
              <h1 className="text-2xl sora-semibold text-gray-900 mb-8">
                Complete your order
              </h1>

              <form className="space-y-8">
                <div>
                  <h2 className="text-xl sora-semibold text-blue-600 mb-6">
                    Personal Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm sora-medium text-gray-700 mb-2">
                        First name
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter Your First Name..."
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm sora-medium text-gray-700 mb-2">
                        Last name
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter Your Last Name..."
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm sora-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email..."
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm sora-medium text-gray-700 mb-2">
                        Phone number
                      </label>
                      <input
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter Your Phone Number..."
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sora-semibold text-blue-600 mb-6">
                    Finance Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm sora-medium text-gray-700 mb-2">
                        Amount of Financing
                      </label>
                      <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Amount Of Financing"
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm sora-medium text-gray-700 mb-2">
                        Lender
                      </label>
                      <input
                        type="text"
                        value={lender}
                        onChange={(e) => setLender(e.target.value)}
                        placeholder="Lender"
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sora-semibold text-blue-600 mb-6">
                    Shipping Address
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm sora-medium text-gray-700 mb-2">
                        Address 1
                      </label>
                      <input
                        type="text"
                        value={address1}
                        onChange={(e) => setAddress1(e.target.value)}
                        placeholder="Address 1"
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm sora-medium text-gray-700 mb-2">
                        Address 2
                      </label>
                      <input
                        type="text"
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}
                        placeholder="Address 2"
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm sora-medium text-gray-700 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Your City..."
                          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm sora-medium text-gray-700 mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          placeholder="Your State..."
                          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm sora-medium text-gray-700 mb-2">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                          placeholder="ZIP Code"
                          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 pt-6">
                  <Link
                    to={"/admin/dashboard"}
                    className="flex-1 text-center px-6 py-2 text-sm border-2 border-gray-300 text-gray-700 sora-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </Link>
                  <button
                    onClick={(e) => handleSubmit(e)}
                    className="flex-1 px-6 py-2 text-sm bg-blue-600 text-white sora-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Complete Purchase
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* popup */}
        {thanksPopup && <ThankyouPopup />}
      </AdminLayout>
    </>
  );
};

export default AdminCheckOut;
