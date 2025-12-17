import React, { useState } from "react";
import Pagination from "../Component/Pagination";
import HeaderTable from "../Component/HeaderTable";
import AdminLayout from "../Component/AdminLayout";
import AddNewProduct from "../Component/AddNewProduct";

const MarketPlace = () => {
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
                <div className="flex items-center gap-2 bg-[#F4F4F4] p-2 rounded-md shadow-md">
                  <div className="w-38 h-24 overflow-hidden rounded-sm">
                    <img
                      className="w-full h-full object-cover"
                      src="/src/assets/Images/house.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-[13px]">
                    <p>Home Financing</p>
                    <p>Monday | 12/1/1222</p>
                    <p>Order ID #232</p>
                    <p>Financed</p>
                    <p>Active</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-[#F4F4F4] p-2 rounded-md shadow-md">
                  <div className="w-38 h-24 overflow-hidden rounded-sm">
                    <img
                      className="w-full h-full object-cover"
                      src="/src/assets/Images//jewellery.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-[13px]">
                    <p>Home Financing</p>
                    <p>Monday | 12/1/1222</p>
                    <p>Order ID #232</p>
                    <p>Financed</p>
                    <p>Active</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-[#F4F4F4] p-2 rounded-md shadow-md">
                  <div className="w-38 h-24 overflow-hidden rounded-sm">
                    <img
                      className="w-full h-full object-cover"
                      src="/src/assets/Images/house.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-[13px]">
                    <p>Home Financing</p>
                    <p>Monday | 12/1/1222</p>
                    <p>Order ID #232</p>
                    <p>Financed</p>
                    <p>Active</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl sora-medium">New</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 w-full mt-8">
                <div className="flex items-center gap-2 bg-[#F4F4F4] p-2 rounded-md shadow-md">
                  <div className="w-38 h-24 overflow-hidden rounded-sm">
                    <img
                      className="w-full h-full object-cover"
                      src="/src/assets/Images/house.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-[13px]">
                    <p>Home Financing</p>
                    <p>Monday | 12/1/1222</p>
                    <p>Order ID #232</p>
                    <p>Financed</p>
                    <p>Active</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-[#F4F4F4] p-2 rounded-md shadow-md">
                  <div className="w-38 h-24 overflow-hidden rounded-sm">
                    <img
                      className="w-full h-full object-cover"
                      src="/src/assets/Images/jewellery.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-[13px]">
                    <p>Home Financing</p>
                    <p>Monday | 12/1/1222</p>
                    <p>Order ID #232</p>
                    <p>Financed</p>
                    <p>Active</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-[#F4F4F4] p-2 rounded-md shadow-md">
                  <div className="w-38 h-24 overflow-hidden rounded-sm">
                    <img
                      className="w-full h-full object-cover"
                      src="/src/assets/Images/house.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-[13px]">
                    <p>Home Financing</p>
                    <p>Monday | 12/1/1222</p>
                    <p>Order ID #232</p>
                    <p>Financed</p>
                    <p>Active</p>
                  </div>
                </div>
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

export default MarketPlace;
