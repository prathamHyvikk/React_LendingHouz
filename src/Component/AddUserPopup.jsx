import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { IoClose, IoCloudUploadOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const AddUserPopup = ({ onClose, refreshUsers }) => {
  const LoginToken = useSelector((state) => state.auth.token);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);

    setTimeout(onClose, 300);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("dob", data.dob);
    formData.append("language", data.language);
    formData.append("user_type", data.user_type);
    formData.append("password", data.password);
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/add`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );

      toast.success(response?.data?.message || "User created successfully");
      refreshUsers();
      reset();
      onClose();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error adding user");
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = `w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-700 
                       focus:ring-2 focus:ring-[#0080C6]/20 focus:border-[#0080C6] 
                       transition-all duration-300 outline-none placeholder:text-gray-400`;

  const labelStyles = `block text-sm font-medium text-gray-600 mb-1.5 ml-1`;

  return (
    <div
      className={`fixed inset-0 z-[200] flex justify-center bg-slate-900/60 backdrop-blur-md px-4 py-10 overflow-y-auto transition-opacity duration-300 
        ${isOpen ? "opacity-100" : "opacity-0"} 
        items-start lg:items-center`}
    >
      <div
        className={`w-full max-w-4xl bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative transition-all duration-300 ease-out transform ${
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        {/* Header Section */}
        <div className="px-8 pt-12 pb-4 border-b border-gray-100">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2  rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-800 transition-colors"
          >
            <IoClose size={24} />
          </button>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">
            Create New Account
          </h2>
          <p className="text-gray-500 mt-1">
            Enter user details and assign permissions.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Name */}
            <div>
              <label className={labelStyles}>Full Name</label>
              <input
                className={inputStyles}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1 ml-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/*User Name */}
            <div>
              <label className={labelStyles}>User Name</label>
              <input
                className={inputStyles}
                {...register("username", { required: "Name is required" })}
              />
              {errors.username && (
                <p className="text-xs text-red-500 mt-1 ml-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className={labelStyles}>Email Address</label>
              <input
                type="email"
                className={inputStyles}
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1 ml-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className={labelStyles}>Phone Number</label>
              <input
                className={inputStyles}
                {...register("phone", { required: "Phone is required" })}
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1 ml-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* DOB */}
            <div>
              <label className={labelStyles}>Date of Birth</label>
              <input
                type="date"
                className={inputStyles}
                {...register("dob", { required: "DOB is required" })}
              />
              {errors.dob && (
                <p className="text-xs text-red-500 mt-1 ml-1">
                  {errors.dob.message}
                </p>
              )}
            </div>

            {/* Language */}
            <div>
              <label className={labelStyles}>Preferred Language</label>
              <select
                className={inputStyles}
                {...register("language", { required: "Language is required" })}
              >
                <option value="">Select Language</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </select>
              {errors.language && (
                <p className="text-xs text-red-500 mt-1 ml-1">
                  {errors.language.message}
                </p>
              )}
            </div>

            {/* User Type */}
            <div>
              <label className={labelStyles}>Access Level</label>
              <select
                className={inputStyles}
                {...register("user_type", { required: "User type required" })}
              >
                <option value="">Select Type</option>
                <option value="A">Administrator</option>
                <option value="C">Customer</option>
              </select>
              {errors.user_type && (
                <p className="text-xs text-red-500 mt-1 ml-1">
                  {errors.user_type.message}
                </p>
              )}
            </div>

            <div>
              <label className={labelStyles}>Password</label>
              <input
                className={inputStyles}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-xs text-red-500 mt-1 ml-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Image */}
            <div className="md:col-span-2 lg:col-span-2">
              <label className={labelStyles}>Profile Representation</label>
              <div className="flex items-center gap-4">
                <label className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-xl py-2 px-4 hover:bg-gray-50 cursor-pointer transition-all hover:border-[#0080C6]">
                  <div className="flex items-center gap-2 text-gray-500">
                    <IoCloudUploadOutline size={20} />
                    <span className="text-sm">Click to upload photo</span>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    {...register("image", {
                      required: "Image is required",
                      onChange: (e) => {
                        const file = e.target.files[0];
                        if (file) {
                          setImagePreview(URL.createObjectURL(file));
                        }
                      },
                    })}
                  />
                </label>
                {imagePreview && (
                  <div className="relative group">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="h-14 w-14 object-cover rounded-full border-2 border-white shadow-md"
                    />
                  </div>
                )}
              </div>
              {errors.image && (
                <p className="text-xs text-red-500 mt-1 ml-1">
                  {errors.image.message}
                </p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mt-12 pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-3 rounded-xl text-gray-500 font-medium hover:text-gray-800 hover:bg-gray-100 transition-all"
            >
              Discard
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-3 max-sm:order-first rounded-xl bg-[#0080C6]  text-white font-bold tracking-wide shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Complete Setup"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserPopup;
