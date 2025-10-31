import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

function Form() {
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.businessName.trim()) newErrors.businessName = "Business name is required";
    if (!formData.ownerName.trim()) newErrors.ownerName = "Owner name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zip.trim()) newErrors.zip = "Zip is required";
    if (!formData.file) newErrors.file = "Please upload a file";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <>
      <Header />

      <section className="flex justify-center py-6 px-4">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl">
          <h2 className="sm:text-4xl text-2xl font-bold text-center mb-8 text-gray-800">
            Become a Partner
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Business Name */}
              <div>
                <label className="block font-medium mb-2 text-gray-700">
                  Business Name*
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Enter your business name"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none ${
                    errors.businessName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.businessName && (
                  <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>
                )}
              </div>

              {/* Owner Name */}
              <div>
                <label className="block font-medium mb-2 text-gray-700">
                  Owner Name*
                </label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  placeholder="Enter owner's name"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none ${
                    errors.ownerName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.ownerName && (
                  <p className="text-red-500 text-sm mt-1">{errors.ownerName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium mb-2 text-gray-700">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block font-medium mb-2 text-gray-700">
                  Phone*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block font-medium mb-2 text-gray-700">
                  Address*
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className={`w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              {/* City, State, Zip */}
              <div className="md:col-span-2 flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label className="block font-medium mb-2 text-gray-700">
                    City*
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    className={`w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none ${
                      errors.city ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                  )}
                </div>

                <div className="flex-1">
                  <label className="block font-medium mb-2 text-gray-700">
                    State*
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter your state"
                    className={`w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none ${
                      errors.state ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.state && (
                    <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                  )}
                </div>

                <div className="flex-1">
                  <label className="block font-medium mb-2 text-gray-700">
                    Zip*
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="Enter your zip"
                    className={`w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none ${
                      errors.zip ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.zip && (
                    <p className="text-red-500 text-sm mt-1">{errors.zip}</p>
                  )}
                </div>
              </div>

              {/* Upload Documents */}
              <div className="w-60 relative">
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Choose File*
                </label>
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className={`w-full border rounded px-2 py-1 text-sm bg-gray-50 focus:ring-1 focus:outline-none file:opacity-0 file:absolute file:w-full file:h-full file:cursor-pointer ${
                    errors.file ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.file && (
                  <p className="text-red-500 text-sm mt-1">{errors.file}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="primary-bg hover:bg-black text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Form;
