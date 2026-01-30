import React, { useEffect, useState } from "react";
import AdminLayout from "../Component/AdminLayout";
import SmallCard from "../Component/SmallCard";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const AdminProductDetail = () => {
  // const [mainImage, setMainImage] = useState(
  //   "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
  // );

  const [number, setNumber] = useState(0);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [product, setProduct] = useState();
  const [recentProducts, setRecentProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartLoading, setCartLoading] = useState(false);
  const LoginToken = localStorage.getItem("LoginToken");
  const { id } = useParams();
  const userId = useSelector((state) => state.person.id);
  

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/single-product`,
        {
          params: {
            id: id,
          },
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );

      console.log(response.data);
      setProduct(response?.data);
      setImages([
        response?.data?.image_url,
        ...response?.data?.other_images_url,
      ]);
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        Object.entries(errors).forEach(([field, messages]) => {
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

  const recentProduct = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/recent-product`,
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );

      setRecentProducts(response?.data.data);
    } catch (error) {
      toast.error(error?.response.data.message);
    }
  };

  const updateCart = async (type) => {
    if (!userId || cartLoading) return;

    setCartLoading(true);

    try {
      if (type === "add") {
        await axios.post(
          `${import.meta.env.VITE_BASE_URL}/cart/update-quantity`,
          {
            product_id: id,
            user_id: userId,
            quantity: number + 1,
          },
          { headers: { Authorization: `Bearer ${LoginToken}` } },
        );

        setNumber((prev) => prev + 1);
        toast.success("Added to cart");
      }

      if (type === "remove") {
        if (number === 1) {
          await axios.post(
            `${import.meta.env.VITE_BASE_URL}/cart/delete`,
            {
              product_id: id,
              user_id: userId,
            },
            { headers: { Authorization: `Bearer ${LoginToken}` } },
          );

          setNumber(0);
          toast.success("Removed from cart");
        } else {
          await axios.post(
            `${import.meta.env.VITE_BASE_URL}/cart/update-quantity`,
            {
              product_id: id,
              user_id: userId,
              quantity: number - 1,
            },
            { headers: { Authorization: `Bearer ${LoginToken}` } },
          );

          setNumber((prev) => prev - 1);
          toast.success("Removed from cart");
        }
      }
    } catch {
      toast.error("Cart update failed");
    } finally {
      setCartLoading(false);
    }
  };

  const addToCart = async () => {
    if (!userId) {
      toast.error("Please login first");
      return;
    }

    if (number > 0) return;
    setCartLoading(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/cart/add`,
        {
          product_id: id,
          user_id: userId,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );

      setNumber(1);
      toast.success("Added to cart");
    } catch (error) {
      const errors = error?.response?.data?.errors;

      if (errors) {
        Object.values(errors)
          .flat()
          .forEach((msg) => toast.error(msg));
      } else {
        toast.error(error?.response?.data?.message || "Something went wrong");
      }
    } finally {
      setCartLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
    recentProduct();
  }, []);

  console.log(recentProducts)

  return (
    <>
      <AdminLayout>
        <div className="bg-white rounded-lg shadow-lg sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {loading ? (
              <div>
                <div className="mb-4 w-full h-96 bg-gray-200 rounded-lg" />

                <div className="flex justify-center gap-4">
                  {[1, 2, 3].map((_, i) => (
                    <div
                      key={i}
                      className="sm:w-24 w-20 h-20 bg-gray-200 rounded-lg"
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <img
                    src={images[selectedImage]}
                    alt="House"
                    className="w-full h-96 object-contain rounded-lg"
                  />
                </div>

                <div className="flex justify-center gap-4">
                  {images?.map((image, index) => (
                    <div key={index} className="">
                      <img
                        src={image}
                        alt="Thumbnail "
                        className={`sm:w-24 w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                          index === selectedImage
                            ? "border-blue-500"
                            : "border-transparent"
                        } `}
                        onClick={() => setSelectedImage(index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="max-sm:ps-2">
              <h1 className=" text-2xl sm:text-3xl sora-bold text-gray-800 mb-2">
                {loading ? (
                  <div className="w-1/2 h-6 bg-gray-200 rounded-lg"></div>
                ) : (
                  product?.name
                )}
              </h1>
              {/* <p className="text-sm text-gray-600 mb-4">ORDER ID #123123</p> */}

              <div className="flex  items-center gap-4 mb-6">
                <div>
                  <span className="text-sm text-gray-600 sora-bold">$</span>
                  <span className="sm:text-3xl text-2xl ps-1 sora-bold text-blue-600">
                    {product?.price}
                  </span>
                </div>
                <div className="bg-blue-50 px-3 py-1 rounded">
                  <p className="text-blue-600 sora-semibold">
                    Save {product?.discount_percent}%
                  </p>
                  <p className="text-xs text-gray-600">
                    Inclusive deal of the day
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 my-6 mt-10">
                <div className="flex items-center border rounded-lg">
                  <button
                    disabled={cartLoading || number === 0}
                    onClick={() => updateCart("remove")}
                    className="px-3 py-1 cursor-pointer disabled:opacity-50"
                  >
                    -
                  </button>

                  <div className="w-14 text-center border-x py-1">{number}</div>

                  <button
                    disabled={cartLoading || number === 0}
                    onClick={() => updateCart("add")}
                    className="px-3 py-1 cursor-pointer disabled:opacity-50"
                  >
                    +
                  </button>
                </div>

                <button
                  disabled={cartLoading || number > 0}
                  onClick={addToCart}
                  className={`${cartLoading || number > 0 ? " pointer-events-none " : "cursor-pointer"} bg-blue-600 text-white px-6 py-2 rounded disabled:opacity-50`}
                >
                  {cartLoading ? "Adding..." : "Add To Cart"}
                </button>
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
            <p className="text-sm text-gray-700">{product?.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="!text-2xl sora-medium">Recent</h2>
            <div className="grid md:grid-cols-3 items-center gap-6 w-full mt-8">
              {recentProducts.map((item, index) => (
                <SmallCard key={index} data={item} imageUrl={"yes"} />
              ))}
            </div>
          </div>
        </div>

        {cartLoading && (
          <div className="w-full h-screen absolute top-[5%] left-[10%] bg-white/80  flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        )}
      </AdminLayout>
    </>
  );
};

export default AdminProductDetail;
