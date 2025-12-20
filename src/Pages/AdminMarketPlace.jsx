import React, { useState } from "react";
import Pagination from "../Component/Pagination";
import HeaderTable from "../Component/HeaderTable";
import AdminLayout from "../Component/AdminLayout";
import AddNewProduct from "../Component/AddNewProduct";

import { recentMarketPlaceData } from "../data/userDashboard.json";
import { newMarketPlaceData } from "../data/userDashboard.json";
import { Link } from "react-router-dom";
import SmallCard from "../Component/SmallCard";

const AdminMarketPlace = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  return (
    <>
      <AdminLayout>
        <div className="mx-auto bg-white rounded-lg shadow-sm p-3">
          <HeaderTable
            headingContent={"Available for Financing"}
            marketplace={true}
            setShowAddProduct={setShowAddProduct}
          />
          <div className="">
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
          </div>

          <Pagination />
        </div>

        {/* Popup */}
        {showAddProduct && (
          <AddNewProduct setShowAddProduct={setShowAddProduct} />
        )}
      </AdminLayout>
    </>
  );
};

export default AdminMarketPlace;
