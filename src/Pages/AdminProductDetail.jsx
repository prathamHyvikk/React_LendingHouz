import React, { useState } from "react";
import AdminLayout from "../Component/AdminLayout";
import SmallCard from "../Component/SmallCard";
import { recentMarketPlaceData } from "../data/userDashboard.json";
import { Link } from "react-router-dom";

const AdminProductDetail = () => {
  const [mainImage, setMainImage] = useState(
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
  );

  const [number, setNumber] = useState(1);

  return (
    <>
      <AdminLayout>
        <div className="bg-white rounded-lg shadow-lg sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="mb-4">
                <img
                  src={mainImage}
                  alt="House"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>

              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200"
                  alt="Thumbnail 1"
                  className="sm:w-24 w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-blue-500"
                  onClick={() =>
                    setMainImage(
                      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200"
                    )
                  }
                />

                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200"
                  alt="Thumbnail 2"
                  className="sm:w-24 w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-gray-300"
                  onClick={() =>
                    setMainImage(
                      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200"
                    )
                  }
                />

                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200"
                  alt="Thumbnail 3"
                  className="sm:w-24 w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-gray-300"
                  onClick={() =>
                    setMainImage(
                      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200"
                    )
                  }
                />
              </div>
            </div>

            <div className="max-sm:ps-2">
              <h1 className=" text-2xl sm:text-3xl sora-bold text-gray-800 mb-2">
                Home Financing
              </h1>
              <p className="text-sm text-gray-600 mb-4">ORDER ID #123123</p>

              <div className="flex  items-center gap-4 mb-6">
                <div>
                  <span className="text-sm text-gray-600 sora-bold">$</span>
                  <span className="sm:text-3xl text-2xl ps-1 sora-bold text-blue-600">
                    10,000
                  </span>
                </div>
                <div className="bg-blue-50 px-3 py-1 rounded">
                  <p className="text-blue-600 sora-semibold">Save 25%</p>
                  <p className="text-xs text-gray-600">
                    Inclusive deal of the day
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 my-6 mt-10">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => number > 1 && setNumber(number - 1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>

                  <button className="w-14 text-center border-l border-r border-gray-300 py-1">
                    {number}
                  </button>
                  <button
                    onClick={() => setNumber(number + 1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <Link to="/admin/dashboard/cart/select-offer">
                  <button className="flex-1 cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-lg sora-semibold hover:bg-blue-700 transition-colors">
                    Apply
                  </button>
                </Link>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="sora-semibold text-gray-800">
                        Alex Morningstar
                      </h3>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-5 h-5 text-blue-600 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="w-5 h-5 text-blue-600 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="w-5 h-5 text-blue-600 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="w-5 h-5 text-blue-600 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="w-5 h-5 text-gray-300 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm sora-medium text-gray-700 mb-1">
                      Contrary to popular belief
                    </p>
                    <p className="text-[12px] text-gray-600">
                      Lorem Ipsum is not simply random text. It has roots in a
                      piece of classical Latin literature from 45 BC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="sm:text-4xl text-2xl sora-bold mb-3">Description</h2>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              sit expedita totam magnam perferendis voluptatum vel deserunt
              officiis minus inventore, suscipit animi sunt cum, et ad. Nemo
              culpa est perspiciatis.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="!text-2xl sora-medium">Recent</h2>
            <div className="grid md:grid-cols-3 items-center gap-6 w-full mt-8">
              {recentMarketPlaceData.map((item, index) => (
                <SmallCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminProductDetail;
