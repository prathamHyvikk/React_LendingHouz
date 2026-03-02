import React, { useEffect, useState } from "react";
import AdminLayout from "../Component/AdminLayout";
import axios from "axios";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";

const Profile = () => {
  const [uploadFile, setUploadFile] = useState(null);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [Title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("");

  const [language, setLanguage] = useState("English");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [enableEdit, setEnableEdit] = useState(false);
  const LoginToken = localStorage.getItem("LoginToken");
  const userId = useSelector((state) => state.person.id);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/single-user`,
        {
          user_id: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );

      const user = response?.data?.data;

      setUserName(user?.username ?? "");
      setEmail(user?.email ?? "");
      setFullName(user?.name ?? "");
      setTitle(user?.role ?? "");
      setImage(user?.image_url ?? "");
      setLanguage(user?.language ?? "English");
    } catch (error) {
      const errors = error.response?.data.errors;
      if (errors) {
        Object.entries(errors).forEach(([field, messages]) => {
          messages.forEach((msg) => {
            toast.error(` ${msg}`);
          });
        });
      } else {
        toast.error(error?.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEditToggle = async () => {
    setLoading(true);
    if (enableEdit) {
      try {
        const formData = new FormData();
        formData.append("id", userId);
        formData.append("username", userName);
        formData.append("email", email);
        formData.append("name", fullName);
        formData.append("title", Title);
        formData.append("language", language);
        if (password) formData.append("password", password);
        if (uploadFile) formData.append("image", uploadFile);

        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/user/update`,
          formData,
          { headers: { Authorization: `Bearer ${LoginToken}` } },
        );

        toast.success(response.data.message);
        setImage(response?.data?.data?.image_url ?? "");
        setEnableEdit(false);
        setPassword("");
      } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
          Object.entries(errors).forEach(([field, messages]) => {
            messages.forEach((msg) => {
              toast.error(` ${msg}`);
            });
          });
        } else {
          toast.error(error?.response.data.message);
        }
      } finally {
        setLoading(false);
      }
    } else {
      setEnableEdit(true);
    }
  };

  const handleSaveBtn = () => {
    setEnableEdit(true);
    if (enableEdit === true) {
      handleEditToggle();
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <AdminLayout>
        {loading && (
          <div className="fixed inset-0 z-50 bg-white/70 flex items-center justify-center">
            <div className="animate-spin rounded-full h-14 w-14 border-b-2 border-gray-900"></div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-end mb-4">
            <button
              id="editBtn"
              type="button"
              onClick={() => handleSaveBtn()}
              className="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-md"
            >
              {enableEdit === true ? "Save" : "Edit"}
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <div className="shrink-0">
              {image !== null ? (
                <img
                  id="profilePreview"
                  src={image}
                  alt="Profile"
                  className="w-44 h-44 rounded-full object-cover border-4 border-gray-100"
                />
              ) : (
                <div className="w-44 h-44 rounded-full object-cover border-4 border-gray-100 flex items-center justify-center">
                  <FaRegUser size={60} />
                </div>
              )}
            </div>

            <div className="flex-1">
              <h1 className="text-3xl sora-normal text-gray-800 mb-3">
                {fullName}
              </h1>
              <p className="mb-3">
                <a
                  href={`mailto:${email}`}
                  className="text-blue-500 hover:text-blue-600"
                >
                  {email}
                </a>
                <span className="text-gray-500"> - {Title}</span>
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Avatar by <span className="text-gray-600">gravatar.com</span>.
                Or upload your own...
              </p>

              <div className="border-2 relative border-dashed border-gray-300 rounded-lg p-6 text-center">
                <label className="cursor-pointer block">
                  <p className="text-gray-400 text-lg">
                    Change Your Profile Picture{" "}
                    <span className="text-gray-500 font-medium">
                      click in this area
                    </span>
                  </p>

                  {fileName && enableEdit && (
                    <p className="mt-3 text-sm text-green-600 font-medium">
                      Selected: {fileName}
                    </p>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    disabled={!enableEdit}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setUploadFile(file);
                        setFileName(file.name);
                      }
                    }}
                    className="absolute top-0 left-0 opacity-0 cursor-pointer w-full h-full"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl sora-normal text-gray-700 mb-8">Account</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <label className="text-gray-600">Username</label>
                <div
                  className={`md:col-span-3 ${enableEdit ? "" : "bg-[#f2f2f2]"}`}
                >
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
                <div
                  className={`md:col-span-3 ${enableEdit ? "" : "bg-[#f2f2f2]"}`}
                >
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
                <div
                  className={`md:col-span-3 relative ${enableEdit ? "" : "bg-[#f2f2f2]"}`}
                >
                  <input
                    id="passwordField"
                    type="password"
                    value={password}
                    placeholder="Enter New Password"
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={enableEdit === false ? true : false}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-gray-700"
                  />

                  {/* <span
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
                  </span> */}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <label className="text-gray-600">
                  Full name <span className="text-red-500">*</span>
                </label>
                <div
                  className={`md:col-span-3 ${enableEdit ? "" : "bg-[#f2f2f2]"}`}
                >
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
                <div
                  className={`md:col-span-3 ${enableEdit ? "" : "bg-[#f2f2f2]"}`}
                >
                  <input
                    type="text"
                    value={Title}
                    // onChange={(e) => setTitle(e.target.value)}
                    disabled={enableEdit === false ? true : false}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-gray-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <label className="text-gray-600">Language</label>
                <div
                  className={`md:col-span-3 ${enableEdit ? "" : "bg-[#f2f2f2]"}`}
                >
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
