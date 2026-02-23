import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditProduct = ({ data, setShowAddProduct, setAgainFetchProducts }) => {
  console.log(data);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategories] = useState("");
  const [cost, setCost] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [brand, setBrand] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [otherImage, setOtherImage] = useState([]);
  const [condition, setCondition] = useState("");

  const max_file = 2;
  const LoginToken = localStorage.getItem("LoginToken");

  // 1. Populate state with existing data
  useEffect(() => {
    if (data) {
      setName(data.name || "");
      // Formats date from "11/12/2025" to "2025-12-11" for HTML date input if necessary,
      // otherwise direct mapping if the format matches.
      setDate(data.date || "");
      setCategories(data.category || "");
      setCost(data.cost || "");
      setPrice(data.price || "");
      setDiscount(data.discount_percent || "");
      setBrand(data.brand || "");
      setStatus(data.status || "");
      setDescription(data.description || "");

      // API uses "New", Radio values use "new"
      setCondition(data.merchandise_condition?.toLowerCase() || "");
    }
  }, [data]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/categories`,
        { headers: { Authorization: `Bearer ${LoginToken}` } },
      );
      setCategoryList(response.data);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to fetch categories",
      );
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleOtherImages = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const totalFiles = otherImage.length + selectedFiles.length;

    if (totalFiles > max_file) {
      toast.error(`You can upload a maximum of ${max_file} images.`);
      e.target.value = "";
      return;
    }
    setOtherImage((prev) => [...prev, ...selectedFiles]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("id", data.id);
      formData.append("name", name);
      formData.append("date", date);
      formData.append("category", category);
      formData.append("cost", cost);
      formData.append("price", price);
      formData.append("discount_percent", discount);
      formData.append("brand", brand);
      formData.append("status", status);
      formData.append("description", description);
      formData.append("merchandise_condition", condition);

      if (image) formData.append("image", image);
      otherImage.forEach((file) => formData.append("other_images[]", file));

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/update-products`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      toast.success(response.data.message || "Product updated successfully");
      setShowAddProduct(false);
      setAgainFetchProducts(true);
    } catch (error) {
      setLoading(false);
      const apiErrors = error.response?.data?.errors;
      if (apiErrors) {
        const firstKey = Object.keys(apiErrors)[0];
        toast.error(
          Array.isArray(apiErrors[firstKey])
            ? apiErrors[firstKey][0]
            : apiErrors[firstKey],
        );
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="my-15 w-full absolute top-0 z-50 mx-auto bg-white/80 flex justify-center items-center">
          <div className="animate-spin rounded-full h-13 w-13 border-b-3 border-gray-900"></div>
        </div>
      )}
      <div className="fixed inset-0 bg-black/50 z-299 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 z-10 bg-white border-b px-6 py-4 flex items-center justify-between">
            <h2 className="text-2xl sora-bold text-(--primary-color)">
              Edit Product
            </h2>
            <button
              onClick={() => setShowAddProduct(false)}
              className="text-gray-500 cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm sora-semibold text-gray-700 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm sora-semibold text-gray-700 mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm sora-semibold text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategories(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg bg-white"
                >
                  <option value="">Select a category</option>
                  {categoryList.map((cat, i) => (
                    <option key={i} value={cat.id || cat}>
                      {cat.name || cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price & Cost Group */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm sora-semibold text-gray-700 mb-2">
                    Price *
                  </label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm sora-semibold text-gray-700 mb-2">
                    Cost *
                  </label>
                  <input
                    type="number"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>

              {/* Discount & Brand */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm sora-semibold text-gray-700 mb-2">
                    Discount (%) *
                  </label>
                  <input
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm sora-semibold text-gray-700 mb-2">
                    Brand *
                  </label>
                  <input
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm sora-semibold text-gray-700 mb-2">
                  Status *
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg bg-white"
                >
                  <option value="">Select status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                  <option value="out of stock">Out of Stock</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm sora-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="3"
                  className="w-full px-4 py-2 border rounded-lg resize-none"
                ></textarea>
              </div>

              {/* Images */}
              <div className="">
                <div>
                  <label className="block text-sm sora-semibold text-gray-700 mb-1">
                    Image{" "}
                    <span className="text-xs text-gray-500 ">
                      ( jpg , jpeg , png )
                    </span>
                  </label>
                  <input
                    type="file"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                    accept="image/*"
                    className="w-full   px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent"
                  />
                  {data.image_url && (
                    <p className="text-[10px] mt-1 text-blue-500 truncate">
                      Current: {data.image}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block mt-5 text-sm sora-semibold text-gray-700 mb-1">
                    Extra Images{" "}
                    <span className="text-xs text-gray-500 ">
                      (max 2 jpg , jpeg , png )
                    </span>
                  </label>
                  <input
                    type="file"
                    multiple
                    onChange={handleOtherImages}
                    accept="image/*"
                    className="w-full   px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent"
                  />
                </div>
              </div>

              {/* Condition */}
              <div>
                <label className="block text-sm sora-semibold text-gray-700 mb-2">
                  Condition
                </label>
                <div className="flex gap-4 flex-wrap">
                  {[
                    "new",
                    "used",
                    "cpo",
                    "refurbished",
                    "parts",
                    "salvage",
                  ].map((cond) => (
                    <label
                      key={cond}
                      className="flex gap-1 items-center cursor-pointer capitalize"
                    >
                      <input
                        type="radio"
                        name="condition"
                        value={cond}
                        checked={condition === cond}
                        onChange={(e) => setCondition(e.target.value)}
                      />
                      <span>{cond}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4 justify-end border-t pt-6">
              <button
                type="button"
                onClick={() => setShowAddProduct(false)}
                className="px-6 py-2 border-2 border-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className={` ${
                  loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                } px-6 py-3 bg-[#0080C6] text-white sora-semibold rounded-lg hover:bg-[#006ba1] transition`}
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
