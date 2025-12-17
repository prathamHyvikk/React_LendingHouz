import React, { useState } from "react";
import AdminLayout from "../Component/AdminLayout";
import PersonalInfoPopup from "../Component/PersonalInfoPopup";
import EditCardPopup from "../Component/EditCardPopup";

const ViewUser = () => {
  const [showpersonal, setShowPersonal] = useState(false);
  const [showCardPopup, setShowCardPopup] = useState(false);

  const [profileImage, setProfileImage] = useState();
  const [email, setEmail] = useState(" johndoe@email.com");
  const [password, setPassword] = useState("34646464");
  const [phone, setPhone] = useState("+1 202-555-0147");
  const [address, setAddress] = useState(
    "1234 Financial Avenue, New York, USA"
  );
  const [communication, setCommunication] = useState("Email / SMS Alerts");

  const [nameOnCard, setNameOnCard] = useState("John Doe");
  const [cardNumber, setCardNumber] = useState("1234 5678 9012 3456");
  const [expiryDate, setExpiryDate] = useState("12/25");
  const [cvv, setCVV] = useState("123");

  return (
    <>
      <AdminLayout>
        <div>
          <div className="">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col items-center">
                <div className="relative group overflow-hidden">
                  <img
                    id="profileImage"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition w-full h-full cursor-pointer">
                    <span className="text-white text-sm font-semibold">
                      Edit
                    </span>
                  </div>

                  <input
                    type="file"
                    id="imageUploader"
                    accept="image/*"
                    onChange={(e) => setProfileImage(e.target.files[0])}
                    className=" absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>

                <h1 className="text-xl font-bold text-gray-800 mt-4">
                  Khusan Akhmedov
                </h1>
                <p className="text-sm text-gray-500">Uzbekistan, Tashkent</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Account Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">Name:</span>
                  <span className="text-gray-600 ml-1">John Doe</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    Account ID:
                  </span>
                  <span className="text-gray-600 ml-1">FN-45892</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    Member Since:
                  </span>
                  <span className="text-gray-600 ml-1">January 2023</span>
                </div>
                <div className="md:col-span-3">
                  <span className="font-semibold text-gray-700">
                    Account Status:
                  </span>
                  <span className="text-green-600 ml-1 font-medium">
                    Active
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Financial Snapshot
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex flex-wrap justify-between">
                  <span className="font-semibold text-gray-700">
                    Total Financing Approved:
                  </span>
                  <span className="text-gray-800 font-medium">$150,000</span>
                </div>
                <div className="flex flex-wrap justify-between">
                  <span className="font-semibold text-gray-700">
                    Active Financing Plans:
                  </span>
                  <span className="text-gray-800 font-medium">3</span>
                </div>
                <div className="flex flex-wrap justify-between">
                  <span className="font-semibold text-gray-700">
                    Pending Applications:
                  </span>
                  <span className="text-gray-800 font-medium">1</span>
                </div>
                <div className="flex flex-wrap justify-between pt-2 border-t border-gray-300">
                  <span className="font-semibold text-gray-700">
                    Next Payment Due:
                  </span>
                  <span className="text-gray-800 font-medium">
                    $1,250 on 15 Nov 2025
                  </span>
                </div>
              </div>
            </div>

            <div
              id="personalInfoSection"
              className="bg-white rounded-lg shadow-md p-6 mb-6 relative"
            >
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Personal Information
              </h2>

              <button
                id="editPersonalBtn"
                onClick={() => setShowPersonal(true)}
                className="absolute cursor-pointer top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Edit
              </button>

              <div className="space-y-3 text-sm">
                <div className="flex flex-wrap">
                  <span className="font-semibold text-gray-700 w-full md:w-auto">
                    Email:
                  </span>
                  <span className="text-gray-600 md:ml-2" id="infoEmail">
                    {email}
                  </span>
                </div>
                <div className="flex flex-wrap">
                  <span className="font-semibold text-gray-700 w-full md:w-auto">
                    Password:
                  </span>
                  <span className="text-gray-600 md:ml-2" id="infoEmail">
                    ********
                  </span>
                </div>
                <div className="flex flex-wrap">
                  <span className="font-semibold text-gray-700 w-full md:w-auto">
                    Phone:
                  </span>
                  <span className="text-gray-600 md:ml-2" id="infoPhone">
                    {phone}
                  </span>
                </div>
                <div className="flex flex-wrap">
                  <span className="font-semibold text-gray-700 w-full md:w-auto">
                    Address:
                  </span>
                  <span className="text-gray-600 md:ml-2" id="infoAddress">
                    {address}
                  </span>
                </div>
                <div className="flex flex-wrap">
                  <span className="font-semibold text-gray-700 w-full md:w-auto">
                    Preferred Communication:
                  </span>
                  <span
                    className="text-gray-600 md:ml-2"
                    id="infoCommunication"
                  >
                    {communication}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6 relative">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Bank & Payment Details
              </h2>

              <button
                id="editBankBtn"
                onClick={() => setShowCardPopup(true)}
                className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Edit
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">
                    Primary Bank:
                  </span>
                  <span className="text-gray-600 ml-1">Bank of America</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    IBAN / Account Number:
                  </span>
                  <span className="text-gray-600 ml-1">****1234</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    Auto-Pay Enabled:
                  </span>
                  <span className="text-green-600 ml-1 font-medium">Yes</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Documents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">
                    Government ID:
                  </span>
                  <span className="text-blue-600 ml-1">Uploaded</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    Proof of Income:
                  </span>
                  <span className="text-green-600 ml-1">Approved</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    Address Verification:
                  </span>
                  <span className="text-yellow-600 ml-1">Pending Update</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* popups */}
        {showpersonal && (
          <PersonalInfoPopup
            setShowPersonal={setShowPersonal}
            email={email}
            password={password}
            phone={phone}
            address={address}
            communication={communication}
            setEmail={setEmail}
            setPassword={setPassword}
            setPhone={setPhone}
            setAddress={setAddress}
            setCommunication={setCommunication}
          />
        )}

        {showCardPopup && (
          <EditCardPopup onClose={() => setShowCardPopup(false)} />
        )}
      </AdminLayout>
    </>
  );
};

export default ViewUser;
