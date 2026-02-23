import React, { use, useEffect, useState } from "react";

import HeaderTable from "../Component/HeaderTable";
import AdminLayout from "../Component/AdminLayout";
import AddNewProduct from "../Component/AddNewProduct";

import { MarketPlaceData } from "../data/userDashboard.json";
import { newMarketPlaceData } from "../data/userDashboard.json";
import { Link } from "react-router-dom";
import SmallCard from "../Component/SmallCard";
import axios from "axios";
import toast from "react-hot-toast";
import BasicPagination from "../Component/BasicPagination";
import EditProduct from "../Component/EditProduct";

const AdminMarketPlace = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [againFetchProducts, setAgainFetchProducts] = useState(false);
  const [lastPage, setLastPage] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [editProductData, setEditProductData] = useState({});
  const [editPopup, setEditPopup] = useState(false);

  const LoginToken = localStorage.getItem("LoginToken");
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/products`,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );
      setProducts(response?.data?.products);
      setLastPage(response?.data?.last_page);
    } catch (error) {
      toast.error(error?.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );
      toast.success(response?.data?.message);
      setAgainFetchProducts(true);
    } catch (error) {
      toast.error(error?.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  const editProduct = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/edit-product`,
        {
          params: {
            id: id,
          },
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );

      setEditProductData(response?.data);
      setEditPopup(true);
    } catch (error) {
      toast.error(error?.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (againFetchProducts) {
      fetchProducts();
      setAgainFetchProducts(false);
    }
  }, [againFetchProducts, products]);
  return (
    <>
      <AdminLayout>
        {loading && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/40 flex justify-center items-center ">
            <div className="animate-spin rounded-full h-15 w-15 border-b-2 border-gray-900"></div>
          </div>
        )}
        <div className="mx-auto bg-white rounded-lg shadow-sm p-3">
          <HeaderTable
            headingContent={"Available for Financing"}
            marketplace={true}
            setShowAddProduct={setShowAddProduct}
            setProducts={setProducts}
            setLastPage={setLastPage}
            setSelectedCategory={setSelectedCategory}
          />
          {/* Cards Design */}

          <div>
            <div className="mt-8">
              {/* <h2 className="text-2xl sora-medium">Recent</h2> */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-6 w-full mt-8">
                {products?.length === 0 && (
                  <p className="text-xl text-center font-bold text-red-600">
                    No Products Available{" "}
                  </p>
                )}
                {products?.map((item, index) => (
                  <SmallCard
                    deleteProduct={deleteProduct}
                    editProduct={editProduct}
                    key={index}
                    data={item}
                    updateProduct="yes"
                  />
                ))}
              </div>
            </div>
          </div>
          {/* //<Pagination totalData={products?.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} /> */}
          <div className="mt-8 mx-auto flex justify-center w-full">
            <BasicPagination
              lastPage={lastPage}
              url={`get-category-search/${selectedCategory}`}
              setProducts={setProducts}
            />
          </div>
        </div>

        {/* Popup */}
        {showAddProduct && (
          <AddNewProduct
            setShowAddProduct={setShowAddProduct}
            setAgainFetchProducts={setAgainFetchProducts}
          />
        )}
        {editPopup && (
          <EditProduct
            data={editProductData}
            setShowAddProduct={setEditPopup}
            setAgainFetchProducts={setAgainFetchProducts}
          />
        )}
      </AdminLayout>
    </>
  );
};

export default AdminMarketPlace;
