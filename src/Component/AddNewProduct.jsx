import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddNewProduct = ({ setShowAddProduct }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategories] = useState();
  const [cost, setCost] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [condition, setCondition] = useState("");

  const LoginToken = localStorage.getItem("LoginToken");
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/categories`,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        }
      );

      setCategoryList(response.data);
    } catch (error) {
      toast.error("Network Error:", error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  console.log(image);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("date", date);
      formData.append("category", category);
      formData.append("cost", cost);
      formData.append("price", price);
      formData.append("brand", brand);
      formData.append("status", status);
      formData.append("description", description);
      formData.append("merchandise_condition", condition);

      if (image) {
        formData.append("image", image);
      }

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/products`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(response.data.message);
      setShowAddProduct(false);
    } catch (error) {
      if (error.response) {
        const apiError = error.response.data.errors;

        for (const key in apiError) {
          toast.error(apiError[key]);
        }
      }
      setLoading(false);
    }
  };

  return (
    <>
      <div
        id="addProductModal"
        className="fixed inset-0 bg-black/50 z-299  flex  items-center justify-center p-4"
      >
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 z-10 bg-white border-b px-6 py-4 flex items-center justify-between">
            <h2 className="text-2xl sora-bold text-(--primary-color)">
              Add New Product
            </h2>
            <button
              id="closeModal"
              onClick={() => setShowAddProduct(false)}
              className="text-gray-500 cursor-pointer hover:text-gray-700 transition"
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

          <form id="addProductForm" className="p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm sora-semibold text-gray-700 mb-2">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="productName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter product name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm sora-semibold text-gray-700 mb-2">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={date}
                  max={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm sora-semibold text-gray-700 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  onChange={(e) => setCategories(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent bg-white"
                >
                  <option value="">Select a category</option>
                  {categoryList.map((category, i) => (
                    <option key={i} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm sora-semibold text-gray-700 mb-2">
                  Price <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="0.00"
                    // step="0.01"
                    // min="0"
                    required
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm sora-semibold text-gray-700 mb-2">
                  Cost <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    name="price"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    placeholder="0.00"
                    required
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm sora-semibold text-gray-700 mb-2">
                  Brand <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="Enter brand name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm sora-semibold text-gray-700 mb-2">
                  Status <span className="text-red-500">*</span>
                </label>
                <select
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent bg-white"
                >
                  <option value="">Select status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                  <option value="out-of-stock">Out of Stock</option>
                </select>
              </div>

              <div>
                <label className="block text-sm sora-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="4"
                  placeholder="Enter product description (optional)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm sora-semibold text-gray-700 mb-2">
                  Image
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                  accept="image/*"
                  className="w-full   px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm sora-semibold text-gray-700 mb-2">
                  Merchandise Condition
                </label>

                <div className="flex  gap-4 flex-wrap">
                  <div className="flex gap-4 flex-wrap">
                    <label className="flex gap-1 items-center cursor-pointer">
                      <input
                        type="radio"
                        onChange={(e) => setCondition(e.target.value)}
                        checked={condition === "new"}
                        value="new"
                        name="condition"
                      />
                      <span>New</span>
                    </label>

                    <label className="flex gap-1 items-center cursor-pointer">
                      <input
                        type="radio"
                        onChange={(e) => setCondition(e.target.value)}
                        checked={condition === "used"}
                        value="used"
                        name="condition"
                      />
                      <span>Used</span>
                    </label>

                    <label className="flex gap-1 items-center cursor-pointer">
                      <input
                        type="radio"
                        onChange={(e) => setCondition(e.target.value)}
                        checked={condition === "cpo"}
                        value="cpo"
                        name="condition"
                      />
                      <span>CPO</span>
                    </label>

                    <label className="flex gap-1 items-center cursor-pointer">
                      <input
                        type="radio"
                        onChange={(e) => setCondition(e.target.value)}
                        value="refurbished"
                        name="condition"
                        checked={condition === "refurbished"}
                      />
                      <span>Refurbished</span>
                    </label>

                    <label className="flex gap-1 items-center cursor-pointer">
                      <input
                        type="radio"
                        onChange={(e) => setCondition(e.target.value)}
                        checked={condition === "parts"}
                        value="parts"
                        name="condition"
                      />
                      <span>Parts</span>
                    </label>

                    <label className="flex gap-1 items-center cursor-pointer">
                      <input
                        type="radio"
                        onChange={(e) => setCondition(e.target.value)}
                        checked={condition === "salvage"}
                        value="salvage"
                        name="condition"
                      />
                      <span>Salvage</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4 justify-end border-t pt-6">
              <button
                type="button"
                id="cancelBtn"
                onClick={() => setShowAddProduct(false)}
                className="px-6 py-2 border-2 cursor-pointer border-gray-300 text-gray-700 sora-semibold rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                onClick={(e) => handleSubmit(e)}
                className={` ${
                  loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                } px-6 py-3 bg-[#0080C6] text-white sora-semibold rounded-lg hover:bg-[#006ba1] transition`}
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewProduct;
