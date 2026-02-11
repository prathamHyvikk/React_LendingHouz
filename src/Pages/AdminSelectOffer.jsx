import React, { useEffect, useState } from "react";
import AdminLayout from "../Component/AdminLayout";
import { Link, useNavigate } from "react-router-dom";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CartSteper from "../Component/CartSteper";
import { useCart } from "react-use-cart";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { setQuantity } from "../features/cart";

const AdminSelectOffer = () => {
  const [offerType, setOfferType] = useState("weekly");
  const navigate = useNavigate();
  const { addItem, totalItems, items } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const LoginToken = localStorage.getItem("LoginToken");
  const userId = useSelector((state) => state.person.id);
  const [financePopup, setFinancePopup] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setQuantity(totalQuantity));
  }, [totalQuantity]);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/cart`,
        {
          params: {
            user_id: userId,
          },
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );

      console.log(response.data);
      setProducts(response?.data?.data);
      setTotalQuantity(response?.data?.total_quantity);
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

  const updateQuantity = async (cartId, productId, newQty) => {
    if (newQty < 1) return;
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/cart/update-quantity`,
        {
          cart_id: cartId,
          product_id: productId,
          quantity: newQty,
          user_id: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );

      // update UI state
      setProducts((prev) =>
        prev.map((item) =>
          item.id === cartId ? { ...item, quantity: String(newQty) } : item,
        ),
      );

      setTotalQuantity(response?.data?.total_quantity);
    } catch (error) {
      toast.error("Failed to update quantity");
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (cartId, productId) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/cart/delete`,
        {
          cart_id: cartId,
          product_id: productId,
          user_id: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );

      setProducts((prev) => prev.filter((item) => item.id !== cartId));

      setTotalQuantity(response?.data?.total_quantity);
    } catch {
      toast.error("Failed to remove item");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId && LoginToken) {
      fetchCart();
    }
  }, [userId]);

  console.log(products);

  return (
    <>
      <AdminLayout>
        <div className="max-w-6xl mx-auto mt-6 lg:mt-14">
          <div className="w-full max-lg:max-w-xl max-lg:mx-auto max-lg:space-y-12 lg:grid lg:grid-cols-12 gap-8">
            <div className="col-span-7">
              {/* Back */}
              <div className="mb-10 border-b border-gray-200 pb-6">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span className="sora-medium">Continue shopping</span>
                </button>
              </div>

              {/* Header */}
              <div className="mb-8">
                <h2 className="text-xl sora-semibold text-gray-900">
                  Financing cart
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  You have {totalQuantity} item{products.length > 1 && "s"} in
                  your cart
                </p>
              </div>

              {/* Items */}

              <div className="max-w-[658px] w-full mx-auto space-y-4">
                {products?.map((item) => (
                  <div
                    key={item.id}
                    className="
        flex flex-col sm:flex-row sm:items-center sm:justify-between
        gap-4 sm:gap-6
        p-5 bg-white rounded-xl
        border border-gray-100
        shadow-sm hover:shadow-md transition
      "
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <img
                        src={item?.product?.image_url}
                        alt="product"
                        className="w-20 h-16 object-cover rounded-lg bg-gray-100 shrink-0"
                      />

                      <div className="min-w-0">
                        <h3 className="text-sm sora-semibold text-gray-900 text-wrap">
                          {item?.product?.name}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5">
                          ${item?.product?.price}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6">
                      <div className="flex min-[1025px]:flex-col  min-[1200px]:flex-row items-center bg-gray-50 border border-gray-200 rounded-full px-1">
                        <button
                          onClick={() =>
                            Number(item.quantity) === 1
                              ? removeFromCart(item.id, item.product_id)
                              : updateQuantity(
                                  item.id,
                                  item.product_id,
                                  Number(item.quantity) - 1,
                                )
                          }
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white rounded-full transition"
                        >
                          −
                        </button>

                        <span className="w-8 text-center text-sm sora-semibold text-gray-800">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.product_id,
                              Number(item.quantity) + 1,
                            )
                          }
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white rounded-full transition"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center gap-3 min-w-[110px] justify-end">
                        <span className="text-sm sora-bold text-gray-900">
                          ${item.product.price * item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            removeFromCart(item.id, item.product_id)
                          }
                          className="
              w-9 h-9 flex items-center justify-center rounded-full
              bg-red-50 text-red-500
              hover:bg-red-100 hover:text-red-600
              transition
            "
                        >
                          <MdDelete size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-5 mt-10">
              <CartSteper />
            </div>
          </div>
        </div>
        {loading && (
          <div className="fixed inset-0 z-50 bg-white/70 flex items-center justify-center">
            <div className="h-14 w-14 border-b-2 border-black rounded-full animate-spin"></div>
          </div>
        )}
      </AdminLayout>
    </>
  );
};

export default AdminSelectOffer;
