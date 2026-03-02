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

const MarketPlace = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [againFetchProducts, setAgainFetchProducts] = useState(false);
  const [lastPage, setLastPage] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");

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
          {/* <div className="">
            <div className="mt-8">
              <h2 className="text-2xl sora-medium">Recent</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 w-full mt-8">
                {recentMarketPlaceData.map((item, index) => (
                  <Link
                    key={index}
                    to={`/admin/dashboard/marketplace/product/product-detail`}
                  >
                    <SmallCard data={item} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl sora-medium">New</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 w-full mt-8">
                {newMarketPlaceData.map((item, index) => (
                  <Link
                    key={index}
                    to={`/admin/dashboard/marketplace/product/product-detail`}
                  >
                    <SmallCard data={item} />
                  </Link>
                ))}
              </div>
            </div>
          </div> */}
          {loading && (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-13 w-13 border-b-3 border-gray-900"></div>
            </div>
          )}

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
                  <Link
                    key={index}
                    to={`/app/dashboard/marketplace/product/product-detail/${item?.id}`}
                  >
                    <SmallCard data={item} />
                  </Link>
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
      </AdminLayout>
    </>
  );
};

export default MarketPlace;
