import React, { useState } from "react";

const VerifyContact = ({ setActiveStep, setVerifyContact }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [check, setCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("mobile", phone);
    formData.append("address_1", address);
    formData.append("address_2", address2);
    formData.append("zipcode", zip);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("chk_correct", check);

      setVerifyContact(formData);
       setActiveStep((s) => s + 1)

    // formData.forEach((value, key) => {
    //   console.log(`${key}: ${value}`);
    // });
  };

  return (
    <>
      <div className="max-w-2xl mx-auto lg:mt-14">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-(--primary-color) text-white py-4 px-6">
            <h2 className="text-xl font-bold">Form</h2>
          </div>
          <form
            onSubmit={handleSubmit} // Attach the submit handler here
            className="sm:p-6 p-3"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Phone <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  id="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone "
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address 2
              </label>
              <input
                type="text"
                id="address2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                placeholder="Enter your address2"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zip Code <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  id="dateInput"
                  required
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="Enter Zip"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  placeholder="city"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="state"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="state"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="mb-6">
              <p className="text-base font-bold text-(--primary-color) mb-3">
                Check if your information is correct
              </p>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  id="confirm"
                  required
                  value={check}
                  onChange={() => setCheck(!check)}
                  className="w-4 h-4 text-(--primary-color) border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Looks good!</span>
              </label>
            </div>
            <button
            //   onClick={}
              className="w-full bg-(--primary-color) cursor-pointer hover:bg-blue-950 text-white py-2 rounded-md font-semibold transition-colors"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyContact;
