import React, { useEffect, useState } from "react";
import logoImage from "/assets/Images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setId, setPersonRole, setUserType } from "../features/personRole";
import { setAuthenticate } from "../features/authenticate";
import axios from "axios";
import { FaRegUser } from "react-icons/fa";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [Title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  const role = useSelector((state) => state.person.value);
  const LoginToken = localStorage.getItem("LoginToken");
  const userId = useSelector((state) => state.person.id);

  const menuItems = [
    {
      name: "Dashboard",
      href: "dashboard",
      icon: "fas fa-tachometer-alt",
      dataPage: "dashboard",
    },
    {
      name: "Applications",
      href: "dashboard/applications",
      icon: "fas fa-file-alt",
      dataPage: "applications",
    },
    {
      name: "User",
      href: "dashboard/users",
      icon: "fas fa-chart-bar",
      dataPage: "user",
    },
    {
      name: "MarketPlace",
      href: "dashboard/marketplace",
      icon: "fas fa-shield-alt",
      dataPage: "marketplace",
    },
    {
      name: "Terms & Condition",
      href: "dashboard/terms&condition",
      icon: "fas fa-file-contract",
      dataPage: "terms",
    },
    {
      name: "Privacy Policy",
      href: "dashboard/privacy&policy",
      icon: "fas fa-shield-alt",
      dataPage: "privacy",
    },
  ];

  const currentPath = window.location.pathname;

  const handleLogout = () => {
    localStorage.removeItem("LoginToken");
    dispatch(setAuthenticate(false));
    dispatch(setPersonRole(""));
    dispatch(setId(null));
    dispatch(setUserType(""));
    navigate("/app/signin");
  };

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/single-user`,
        {
          user_id: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${LoginToken}`,
          },
        },
      );

      const user = response?.data?.data;

      setFullName(user?.name ?? "");
      setTitle(user?.role ?? "");
      setImage(user?.image_url ?? "");
    } catch (error) {
      const errors = error.response?.data.errors;
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

  // useEffect(() => {
  //   fetchUser();
  // }, [fetchUser, userId]);
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {/* hemburger icon - Mobile view */}
      <div className="">
        <div className="lg:hidden w-full ">
          <button
            id="sidebarToggleBtn"
            onClick={() => setShowSidebar(true)}
            className="lg:hidden p-3 bg-gray-200  cursor-pointer rounded-md m-3 fixed top-2 left-2 z-198"
          >
            <i className="fas fa-bars"></i>
          </button>

          <Link
            to={`/`}
            className="lg:hidden  w-full bg-gray-50 fixed top-0 py-2 px-2 z-1"
          >
            <img className="ml-auto" src={logoImage} alt="logo" />
          </Link>
        </div>

        <div
          className={`${
            showSidebar
              ? "fixed inset-0 w-full h-screen bg-black/40  z-196"
              : " "
          }`}
        ></div>
      </div>

      {/* sidebar */}
      <div
        id="sidebar"
        className={`bg-white h-screen sm:min-w-64 min-w-50 shadow-md lg:relative fixed ${
          showSidebar ? " translate-x-0 " : " max-lg:-translate-x-full"
        } top-0 z-199 h-full transition-all duration-300 ease-in-out`}
      >
        <div className="lg:p-6 p-4 flex justify-between items-center relative ">
          <div>
            <Link to={`/`}>
              <img
                className="lg:w-[208px] lg:max-w-[208px] md:w-36 w-30"
                src={logoImage}
                alt="logo"
              />
            </Link>
          </div>
          <button
            id="sidebarCloseBtn"
            onClick={() => setShowSidebar(false)}
            className="lg:hidden absolute top-2 cursor-pointer right-2 p-1 rounded-md bg-gray-200"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <nav className="sm:mt-6 mt-3">
          <ul className="sora-semibold">
            {menuItems.map((item, i) => (
              <li key={i} id={item.dataPage} className="sm:mb-2 mb-1">
                {role === "app" && item.name === "User" ? (
                  ""
                ) : (
                  <NavLink
                    to={`/${role}/${item.href}`}
                    className={`flex items-center sm:px-6 px-3 py-3 max-sm:text-sm text-[#002E6D] hover:bg-[#D7F4FE] transition-all page-Link
                ${
                  currentPath == `/${role}/${item.href}`
                    ? "active-page text-(--primary-color)"
                    : ""
                }`}
                    data-page={item.dataPage}
                  >
                    <i className={item.icon + " mr-3"} />
                    <span>{item.name}</span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 sm:w-64 p-6 border-t border-gray-300">
          <Link to={`/${role}/dashboard/profile`}>
            <div className="flex items-center">
              <div className="sm:w-10 w-8 sm:h-10 h-8 overflow-hidden rounded-full bg-gray-300 flex items-center justify-center">
                {image ? (
                  <img
                    id="profilePreview"
                    src={image}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover border-4 border-gray-100"
                  />
                ) : (
                  <div className="sm:w-10 w-8 sm:h-10 h-8 rounded-full border-4 border-gray-100 flex items-center justify-center">
                    <FaRegUser size={20} />
                  </div>
                )}
              </div>
              <div className="ml-3">
                <p className="sm:text-sm text-xs sora-medium text-gray-700">
                  {fullName}
                </p>
                <button
                  className={`text-xs px-2 py-1 ${
                    Title == "Administrator"
                      ? "bg-yellow-400"
                      : "bg-green-400 text-white"
                  }  rounded-full sora-semibold`}
                >
                  {Title}
                </button>
              </div>
            </div>
          </Link>

          <div className="mt-4 ml-1">
            {/* <Link to="/app/signin" className=" "> */}
            <button
              onClick={handleLogout}
              className="cursor-pointer text-red-500 hover:text-red-600 flex items-center gap-2 max-sm:text-sm"
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <span>Log out</span>
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
