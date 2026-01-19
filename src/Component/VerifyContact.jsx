import React, { useState } from "react";
import toast from "react-hot-toast";

const VerifyContact = ({ setActiveStep, verifyContact, setVerifyContact }) => {
  // const [first_name, setFirstName] = useState("");
  // const [last_name, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobile, setmobile] = useState("");
  // const [address, setAddress] = useState("");
  // const [address2, setAddress2] = useState("");
  // const [zipcode, setzipcode] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [chk_correct, setchk_correct] = useState(false);
  // const [errors, setErrors] = useState();

  const handleChange = (field) => (e) => {
    let value;

    if (field === "chk_correct") {
      value = e.target.checked ? 1 : 0;
    } else {
      value = e.target.value;
    }

    setVerifyContact((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      first_name,
      last_name,
      email,
      mobile,
      address_1,
      address_2,
      zipcode,
      city,
      state,
      chk_correct,
    } = verifyContact;

    if (!first_name) return toast.error("First name is required");
    if (!last_name) return toast.error("Last name is required");
    if (!email) return toast.error("Email is required");
    if (!mobile) return toast.error("mobile number is required");
    if (!address_1) return toast.error("Address is required");
    if (!zipcode) return toast.error("zipcode code is required");
    if (!city) return toast.error("City is required");
    if (!state) return toast.error("State is required");
    if (!chk_correct) return toast.error("Please chk_correct the box");

    setActiveStep((s) => s + 1);

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
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="fName"
                  value={verifyContact.first_name}
                  onChange={handleChange("first_name")}
                  placeholder="Enter your first name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="lName"
                  value={verifyContact.last_name}
                  onChange={handleChange("last_name")}
                  placeholder="Enter your last name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={verifyContact.email}
                  onChange={handleChange("email")}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile mobile <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  id="mobile"
                  value={verifyContact.mobile}
                  onChange={handleChange("mobile")}
                  placeholder="Enter your mobile "
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
                id="address_1"
                value={verifyContact.address_1}
                onChange={handleChange("address_1")}
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
                value={verifyContact.address_2}
                onChange={handleChange("address_2")}
                placeholder="Enter your address2"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  zipcode Code <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  id="dateInput"
                  value={verifyContact.zipcode}
                  onChange={handleChange("zipcode")}
                  placeholder="Enter zipcode"
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
                  value={verifyContact.city}
                  onChange={handleChange("city")}
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
                  value={verifyContact.state}
                  onChange={handleChange("state")}
                  placeholder="state"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="mb-6">
              <p className="text-base font-bold text-(--primary-color) mb-3">
                check if your information is correct
              </p>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  id="confirm"
                  checked={verifyContact.chk_correct}
                  onChange={handleChange("chk_correct")}
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

export default VerifyContact;
