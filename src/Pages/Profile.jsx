import React, { useState } from "react";
import AdminLayout from "../Component/AdminLayout";

const Profile = () => {
  const [uploadFile, setUploadFile] = useState(null);
  const [userName, setUserName] = useState("ryan");
  const [email, setEmail] = useState("ryan@example.com");
  const [password, setPassword] = useState("21554542");
  const [fullName, setFullName] = useState("John Doe");
  const [Title, setTitle] = useState("Administrator");
  const [language, setLanguage] = useState("English");

  const [showPassword, setShowPassword] = useState(false);
  const [enableEdit, setEnableEdit] = useState(false);

  return (
    <>
      <AdminLayout>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-end mb-4">
            <button
              id="editBtn"
              type="button"
              onClick={() => setEnableEdit(!enableEdit)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              {enableEdit === true ? "Save" : "Edit"}
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <div className="shrink-0">
              <img
                id="profilePreview"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                alt="Profile"
                className="w-44 h-44 rounded-full object-cover border-4 border-gray-100"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-normal text-gray-800 mb-3">
                John Doe
              </h1>
              <p className="mb-3">
                <a
                  href="mailto:ryan@rockettheme.com"
                  className="text-blue-500 hover:text-blue-600"
                >
                  {email}
                </a>
                <span className="text-gray-500"> - Administrator</span>
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Avatar by <span className="text-gray-600">gravatar.com</span>.
                Or upload your own...
              </p>

              <div className="border-2 relative border-dashed border-gray-300 rounded-lg p-6 text-center">
                <label className="cursor-pointer">
                  <p className="text-gray-400 text-lg">
                    Drop your files here or{" "}
                    <span className="text-gray-500 font-medium">
                      click in this area
                    </span>
                  </p>
                  <input
                    type="file"
                    id="fileUpload"
                    onChange={(e) => setUploadFile(e.target.files[0])}
                    disabled={enableEdit === false ? true : false}
                    className="absolute top-0 left-0 opacity-0 cursor-pointer w-full h-full"
                    accept="image/*"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-normal text-gray-700 mb-8">Account</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <label className="text-gray-600">Username</label>
                <div className="md:col-span-3">
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    disabled={enableEdit === false ? true : false}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-gray-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <label className="text-gray-600">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="md:col-span-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={enableEdit === false ? true : false}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-gray-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <label className="text-gray-600">Password</label>
                <div className="md:col-span-3 relative">
                  <input
                    id="passwordField"
                    value={showPassword ? password : "********"}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={enableEdit === false ? true : false}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-gray-700"
                  />

                  <span
                    id="togglePassword"
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                  >
                    <i
                      className={`fa-solid ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                      }`}
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={enableEdit === false ? true : false}
                    ></i>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <label className="text-gray-600">
                  Full name <span className="text-red-500">*</span>
                </label>
                <div className="md:col-span-3">
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    disabled={enableEdit === false ? true : false}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-gray-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <label className="text-gray-600">Title</label>
                <div className="md:col-span-3">
                  <input
                    type="text"
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={enableEdit === false ? true : false}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-gray-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <label className="text-gray-600">Language</label>
                <div className="md:col-span-3">
                  <select
                    onChange={(e) => setLanguage(e.target.value)}
                    disabled={enableEdit === false ? true : false}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-gray-700 bg-white cursor-pointer"
                  >
                    <option defaultValue={"english"}>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default Profile;
