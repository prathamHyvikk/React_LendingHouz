import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import useMeta from "../useMeta";

function Form() {

  useMeta(
    "Become a Partner | Lending Houz",
    "Join Lending Houz as a partner and grow your business. Fill out the form to get started and connect with our team for flexible financing solutions."
  );


  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    website: "",
  });

  // Helper to format US phone number as (XXX) XXX-XXXX
  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").substring(0, 10); // max 10 digits
    const part1 = digits.substring(0, 3);
    const part2 = digits.substring(3, 6);
    const part3 = digits.substring(6, 10);

    if (digits.length <= 3) return part1;
    if (digits.length <= 6) return `(${part1}) ${part2}`;
    return `(${part1}) ${part2}-${part3}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // City & State: letters and spaces only
    if (name === "city" || name === "state") {
      const sanitized = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData({ ...formData, [name]: sanitized });
      return;
    }

    // Zip: only numbers, max 5 digits
    if (name === "zip") {
      const sanitized = value.replace(/\D/g, "").substring(0, 5);
      setFormData({ ...formData, [name]: sanitized });
      return;
    }

    // Phone: format as US number
    if (name === "phone") {
      const formatted = formatPhone(value);
      setFormData({ ...formData, [name]: formatted });
      return;
    }

    // Default: set value as is
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    console.log(formData);
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
              <div>
                <label className="block font-medium mb-2 text-gray-700">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Enter your business name"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none border-gray-300"
                />
              </div>

              <div>
                <label className="block font-medium mb-2 text-gray-700">Owner Name</label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  placeholder="Enter owner's name"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none border-gray-300"
                />
              </div>

              <div>
                <label className="block font-medium mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none border-gray-300"
                />
              </div>

              <div>
                <label className="block font-medium mb-2 text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(XXX) XXX-XXXX"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none border-gray-300"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-medium mb-2 text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none border-gray-300"
                />
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label className="block font-medium mb-2 text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none border-gray-300"
                  />
                </div>

                <div className="flex-1">
                  <label className="block font-medium mb-2 text-gray-700">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter your state"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none border-gray-300"
                  />
                </div>

                <div className="flex-1">
                  <label className="block font-medium mb-2 text-gray-700">Zip</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="Enter 5-digit zip"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none border-gray-300"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block font-medium mb-2 text-gray-700">Business Website</label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Enter your website URL"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none border-gray-300"
                />
              </div>
            </div>

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
