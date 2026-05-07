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
import { useSelector } from "react-redux";

const MarketPlace = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [againFetchProducts, setAgainFetchProducts] = useState(false);
  const [lastPage, setLastPage] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");

  const LoginToken = useSelector((state) => state.auth.token);
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const url = selectedCategory
        ? `${import.meta.env.VITE_BASE_URL}/get-category-search?category=${selectedCategory}`
        : `${import.meta.env.VITE_BASE_URL}/products`;

      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${LoginToken}` },
      });

      setProducts(response?.data?.products);
      setLastPage(response?.data?.last_page);
    } catch (error) {
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

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
            filter={true}
            resetbtn={true}
            setSelectedCategory={setSelectedCategory}
          />
          {/* Cards Design */}

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
                  <p className="text-lg md:col-span-2 xl:col-span-3 text-center font-bold text-red-600">
                    No Products Available{" "}
                  </p>
                )}
                {!loading &&
                  products?.map((item, index) => (
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
