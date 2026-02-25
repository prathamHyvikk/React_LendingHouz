import React, { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AdminCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const LoginToken = localStorage.getItem("LoginToken");
  const topRef = useRef(null);

  // Shared Headers
  const config = {
    headers: {
      Authorization: `Bearer ${LoginToken}`,
      "Content-Type": "multipart/form-data",
    },
  };

  // FETCH ALL
  const fetchCategories = useCallback(async () => {
    try {
      setFetching(true);
      const res = await axios.get(
        "https://cpanel.lendinghouz.com/api/get-categories",
        config,
      );
      // Handle different API response structures
      const data = res.data?.data || res.data || [];
      setCategories(Array.isArray(data) ? data : []);
    } catch (error) {
      const apiError = error.response.data.errors;
      if (apiError) {
        Object.entries(apiError).forEach(([field, messages]) => {
          messages.forEach((msg) => {
            toast.error(` ${msg}`);
          });
        });
      } else {
        toast.error(error?.response.data.message);
      }
    } finally {
      setFetching(false);
    }
  }, [LoginToken]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // ADD
  const handleAdd = async (e) => {
    e.preventDefault();
    if (!name.trim()) return toast.error("Please enter a category name");

    const formData = new FormData();

    formData.append("name", name);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://cpanel.lendinghouz.com/api/categories",
        formData,
        config,
      );

      setName("");
      setEditId(null);
      fetchCategories();
      toast.success(editId ? response.data.message : response.data.message);
    } catch (error) {
      const apiError = error.response.data.errors;
      if (apiError) {
        Object.entries(apiError).forEach(([field, messages]) => {
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

  // UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) return toast.error("Please enter a category name");

    const formData = new FormData();
    if (editId) formData.append("id", editId);
    formData.append("name", name);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://cpanel.lendinghouz.com/api/categories/update",
        formData,
        config,
      );

      setName("");
      setEditId(null);
      fetchCategories();
      toast.success(response.data.message);
    } catch (error) {
      const apiError = error.response.data.errors;
      if (apiError) {
        Object.entries(apiError).forEach(([field, messages]) => {
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

  //   (EDIT)
  const handleEditClick = async (id) => {
    setLoading(true);
    topRef.current?.scrollIntoView({ behavior: "smooth" });
    try {
      const res = await axios.get(
        `https://cpanel.lendinghouz.com/api/categories/single-category?id=${id}`,
        config,
      );
      const category = res.data?.data || res.data;
      setName(category.name);
      setEditId(category.id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      const apiError = error.response.data.errors;
      if (apiError) {
        Object.entries(apiError).forEach(([field, messages]) => {
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

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?"))
      return;

    const formData = new FormData();
    formData.append("id", id);

    try {
      await axios.post(
        "https://cpanel.lendinghouz.com/api/categories/delete",
        formData,
        config,
      );
      fetchCategories();
    } catch (error) {
      const apiError = error.response.data.errors;
      if (apiError) {
        Object.entries(apiError).forEach(([field, messages]) => {
          messages.forEach((msg) => {
            toast.error(` ${msg}`);
          });
        });
      } else {
        toast.error(error?.response.data.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div ref={topRef} />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#002E6D]">
            Category Management
          </h1>
          <div className="w-16 h-1 bg-yellow-400 mt-2 rounded-full"></div>
        </div>

        {/* Input Form */}
        <div className="bg-white shadow-sm rounded-2xl p-6 mb-8 border border-gray-100">
          <form
            onSubmit={editId ? handleSubmit : handleAdd}
            className="space-y-4"
          >
            <h2 className="text-lg font-semibold text-gray-700">
              {editId ? "Modify Category" : "Create New Category"}
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="e.g. Home Loan, Business Loan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-[#002E6D] focus:ring-2 focus:ring-[#002e6d21] outline-none transition-all"
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex-1 md:flex-none px-8 py-3 rounded-xl font-bold transition-all ${
                    editId
                      ? "bg-[#002E6D] text-white hover:bg-[#001d4a]"
                      : "bg-yellow-400 text-[#002E6D] hover:bg-yellow-500"
                  } disabled:opacity-50`}
                >
                  {loading
                    ? "Processing..."
                    : editId
                      ? "Update"
                      : "Add Category"}
                </button>
                {editId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditId(null);
                      setName("");
                    }}
                    className="px-6 py-3 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Data Table */}
        <div className="bg-white shadow-sm rounded-2xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#002E6D] text-white">
                  <th className="p-4 font-semibold">ID</th>
                  <th className="p-4 font-semibold">Category Name</th>
                  <th className="p-4 font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {fetching ? (
                  <tr>
                    <td colSpan="3" className="p-8 text-center text-gray-500">
                      Loading categories...
                    </td>
                  </tr>
                ) : categories.length > 0 ? (
                  categories.map((cat) => (
                    <tr
                      key={cat.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4 text-gray-600">#{cat.id}</td>
                      <td className="p-4 font-medium text-gray-800">
                        {cat.name}
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleEditClick(cat.id)}
                            className="p-2 px-4 text-sm rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(cat.id)}
                            className="p-2 px-4 text-sm rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="p-12 text-center text-gray-400">
                      No categories available. Add one above!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCategory;
