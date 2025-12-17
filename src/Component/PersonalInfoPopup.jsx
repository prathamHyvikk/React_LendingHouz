import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";

const PersonalInfoPopup = ({
  email,
  password,
  phone,
  address,
  communication,
  setEmail,
  setPassword,
  setPhone,
  setAddress,
  setCommunication,
  setShowPersonal,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const [localEmail, setLocalEmail] = useState(email);
  const [localPassword, setLocalPassword] = useState(password);
  const [localPhone, setLocalPhone] = useState(phone);
  const [localAddress, setLocalAddress] = useState(address);
  const [localCommunication, setLocalCommunication] = useState(communication);

  const handleChangeValue = (e) => {
    e.preventDefault();
    setEmail(localEmail);
    setPassword(localPassword);
    setPhone(localPhone);
    setAddress(localAddress);
    setCommunication(localCommunication);
    setShowPersonal(false);
  };
  return (
    <>
      <ModalWrapper>
        <div className=" w-md max-w-md ">
          <div className="bg-white rounded-lg shadow-lg p-6 relative">
            <h3 className="text-lg sora-bold text-gray-800 mb-4">
              Edit Personal Information
            </h3>
            <form
              id="personalForm"
              onSubmit={handleChangeValue}
              className="space-y-3"
            >
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="modalEmail"
                  value={localEmail}
                  onChange={(e) => setLocalEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="relative">
                <label className="block text-gray-700 mb-1">Password</label>
                <input
                  type="text"
                  value={showPassword ? localPassword : "********"}
                  onChange={(e) => setLocalPassword(e.target.value)}
                  id="modalPassword"
                  className="w-full px-3 py-2 border rounded-md pr-10"
                />
                <span
                  id="togglePassword"
                  className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                >
                  <i
                    className={`fa-solid ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                </span>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Phone</label>
                <input
                  type="text"
                  id="modalPhone"
                  value={localPhone}
                  onChange={(e) => setLocalPhone(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  id="modalAddress"
                  value={localAddress}
                  onChange={(e) => setLocalAddress(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Preferred Communication
                </label>
                <input
                  type="text"
                  id="modalCommunication"
                  value={localCommunication}
                  onChange={(e) => setLocalCommunication(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  id="closeModal"
                  onClick={() => setShowPersonal(false)}
                  className="px-4 py-2 cursor-pointer  rounded-md bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 cursor-pointer  rounded-md bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default PersonalInfoPopup;
