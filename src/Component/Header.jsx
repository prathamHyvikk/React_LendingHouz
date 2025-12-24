import React, { useState, useEffect, useRef } from "react";
import "./Utility.css";
import logo from "/assets/Images/header-logo.png";
import { Link } from "react-router-dom";
import BtnGetStart from "./BtnGetStart";
import { useSelector } from "react-redux";

function Header({ btncategory }) {
  const [drop, setDrop] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobiledrop, setMobileDrop] = useState(false);
  const dropdownRef = useRef(null);

  const authenticate = useSelector((state) => state.auth.value);

  const togglenav = () => {
    setOpen(!open);
    setMobileDrop(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDrop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScrollLock = () => {
      const isMobile = window.innerWidth < 1024;
      if (open && isMobile) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    };

    handleScrollLock(); // run immediately
    window.addEventListener("resize", handleScrollLock); // listen for screen changes

    return () => {
      window.removeEventListener("resize", handleScrollLock);
      document.body.style.overflow = "visible"; // reset on cleanup
    };
  }, [open]);

  return (
    <header className=" px-2">
      <div className="container max-md:py-4 md:p-8 flex justify-between items-center rounded-lg  ">
        <Link to="/" className="logo">
          <img className="max-w-[223px] max-sm:w-1/2" src={logo} alt="Logo" />
        </Link>

        <ul className="flex items-center desk-element gap-4 min-xl:gap-10">
          <li>
            <Link to="/" className="sora-bold text-black hover:text-[#FF9201]">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="sora-bold text-black hover:text-[#FF9201]"
            >
              About
            </Link>
          </li>
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setDrop(!drop)}
              className="sora-bold text-black hover:text-[#FF9201] cursor-pointer"
            >
              Financing Options{" "}
              <i
                className={`transition-transform ${
                  drop ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                }`}
              ></i>
            </button>
            {drop && (
              <div className="absolute flex flex-col   md:h-64   md:overflow-y-scroll mt-2 w-52 bg-white border border-gray-200 rounded shadow z-10">
                {/* <Link className="px-4 py-2  hover:bg-gray-100" to="/automotive">Automotive</Link> */}
                {/* <Link className="px-4 py-2  hover:bg-gray-100" to="/cell">Cell Phone</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/dog">Dog</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/electronics">Electronics</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/e-bike">E-Bike</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/jewellery">Jewelry</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/kiosk">Kiosk</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/landscap-equipment">Landscape Equipment</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/livestock-equipment">Livestock Equipment</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/medical-equipment">Medical Equipment</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/music-equipment">Music Equipment</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/personal-product">Personal Product</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/professional-tools">Professional Tools</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/pet">Pets</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/power-sports">Power Sports</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/recreation">Recreation</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/snow-equipment">Snow Equipment</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/tire">Tire</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/tools">Tools</Link>
                                <Link className="px-4 py-2  hover:bg-gray-100" to="/scuba-diving">Scuba-Diving</Link> */}
                {/* <Link className="px-4 py-2  hover:bg-gray-100" to="/vehical">Vehicle</Link> */}

                <Link className="px-4 py-2 hover:bg-gray-100" to="/cell">
                  Cell Phone
                </Link>
                {/* <Link className="px-4 py-2 hover:bg-gray-100" to="/dog">Dog</Link> */}
                <Link className="px-4 py-2 hover:bg-gray-100" to="/e-bike">
                  E-Bike
                </Link>
                <Link className="px-4 py-2 hover:bg-gray-100" to="/electronics">
                  Electronics
                </Link>
                <Link className="px-4 py-2 hover:bg-gray-100" to="/jewellery">
                  Jewelry
                </Link>
                <Link className="px-4 py-2 hover:bg-gray-100" to="/kiosk">
                  Kiosk
                </Link>
                <Link
                  className="px-4 py-2 hover:bg-gray-100"
                  to="/landscap-equipment"
                >
                  Landscape Equipment
                </Link>
                <Link
                  className="px-4 py-2 hover:bg-gray-100"
                  to="/livestock-equipment"
                >
                  Livestock Equipment
                </Link>
                <Link
                  className="px-4 py-2 hover:bg-gray-100"
                  to="/medical-equipment"
                >
                  Medical Equipment
                </Link>
                <Link
                  className="px-4 py-2 hover:bg-gray-100"
                  to="/music-equipment"
                >
                  Music Equipment
                </Link>
                <Link
                  className="px-4 py-2 hover:bg-gray-100"
                  to="/personal-product"
                >
                  Personal Product
                </Link>
                <Link className="px-4 py-2 hover:bg-gray-100" to="/pet">
                  Pets
                </Link>
                <Link
                  className="px-4 py-2 hover:bg-gray-100"
                  to="/power-sports"
                >
                  Power Sports
                </Link>
                <Link
                  className="px-4 py-2 hover:bg-gray-100"
                  to="/professional-tools"
                >
                  Professional Tools
                </Link>
                <Link className="px-4 py-2 hover:bg-gray-100" to="/recreation">
                  Recreation
                </Link>
                <Link
                  className="px-4 py-2 hover:bg-gray-100"
                  to="/scuba-diving"
                >
                  Scuba-Diving
                </Link>
                <Link
                  className="px-4 py-2 hover:bg-gray-100"
                  to="/snow-equipment"
                >
                  Snow Equipment
                </Link>
                <Link className="px-4 py-2 hover:bg-gray-100" to="/tire">
                  Tire
                </Link>
                <Link className="px-4 py-2 hover:bg-gray-100" to="/tools">
                  Tools
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link
              to="/testimonial"
              className="sora-bold text-black hover:text-[#FF9201]"
            >
              Testimonial
            </Link>
          </li>
          <li>
            <Link
              to="/faqs"
              className="sora-bold text-black hover:text-[#FF9201]"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="/become-partner"
              className="sora-bold text-black hover:text-[#FF9201]"
            >
              Become Partner
            </Link>
          </li>
        </ul>

        {/* <button className="py-4 max-lg:hidden px-10 primary-text bg-white rounded-2xl sora-bold tracking-wide">
                    Get Started <i className="ri-arrow-right-long-line"></i>
                </button> */}
        <div className="desk-element ">
          <BtnGetStart category={btncategory} />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-toggle">
          <button onClick={togglenav}>
            <i className="ri-bar-chart-horizontal-line text-black hover:text-[#FF9201] sora-bold"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
                fixed top-0 right-0 h-full min-lg:hidden w-64 z-40 shadow-lg p-6 primary-bg transition-transform duration-300 ease-in-out
                ${open ? "translate-x-0" : "translate-x-full"}
            `}
      >
        <button onClick={togglenav} className="text-right w-full mb-6 text-xl">
          <i className="ri-close-line text-black "></i>
        </button>
        <nav className="flex flex-col overflow-y-auto h-full pb-10 gap-4">
          <Link to="/" className="sora-bold text-black  ">
            Home
          </Link>
          <Link to="/about" className="sora-bold text-black  ">
            About
          </Link>
          <div className="relative">
            <button
              onClick={() => setMobileDrop(!mobiledrop)}
              className="sora-bold text-black   cursor-pointer"
            >
              Financing Options{" "}
              <i
                className={`transition-transform ${
                  mobiledrop ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                }`}
              ></i>
            </button>
            {mobiledrop && (
              <div className="mt-2 flex flex-col text-black   border-gray-200">
                <Link className="px-4 py-2 hover:text-black" to="/cell">
                  Cell Phone
                </Link>
                {/* <Link className="px-4 py-2 hover:text-black" to="/dog">Dog</Link> */}
                <Link className="px-4 py-2 hover:text-black" to="/e-bike">
                  E-Bike
                </Link>
                <Link className="px-4 py-2 hover:text-black" to="/electronics">
                  Electronics
                </Link>
                <Link className="px-4 py-2 hover:text-black" to="/jewellery">
                  Jewelry
                </Link>
                <Link className="px-4 py-2 hover:text-black" to="/kiosk">
                  Kiosk
                </Link>
                <Link
                  className="px-4 py-2 hover:text-black"
                  to="/landscap-equipment"
                >
                  Landscape Equipment
                </Link>
                <Link
                  className="px-4 py-2 hover:text-black"
                  to="/livestock-equipment"
                >
                  Livestock Equipment
                </Link>
                <Link
                  className="px-4 py-2 hover:text-black"
                  to="/medical-equipment"
                >
                  Medical Equipment
                </Link>
                <Link
                  className="px-4 py-2 hover:text-black"
                  to="/music-equipment"
                >
                  Music Equipment
                </Link>
                <Link
                  className="px-4 py-2 hover:text-black"
                  to="/personal-product"
                >
                  Personal Product
                </Link>
                <Link className="px-4 py-2 hover:text-black" to="/pet">
                  Pets
                </Link>
                <Link className="px-4 py-2 hover:text-black" to="/power-sports">
                  Power Sports
                </Link>
                <Link
                  className="px-4 py-2 hover:text-black"
                  to="/professional-tools"
                >
                  Professional Tools
                </Link>
                <Link className="px-4 py-2 hover:text-black" to="/recreation">
                  Recreation
                </Link>
                <Link className="px-4 py-2 hover:text-black" to="/scuba-diving">
                  Scuba-Diving
                </Link>
                <Link
                  className="px-4 py-2 hover:text-black"
                  to="/snow-equipment"
                >
                  Snow Equipment
                </Link>
                <Link className="px-4 py-2 hover:text-black" to="/tire">
                  Tire
                </Link>
                <Link className="px-4 py-2 hover:text-black" to="/tools">
                  Tools
                </Link>
              </div>
            )}
          </div>
          <Link to="/testimonial" className="sora-bold text-black  ">
            Testimonial
          </Link>
          <Link to="/faqs" className="sora-bold text-black  ">
            FAQs
          </Link>
          <Link to="/become-partner" className="sora-bold text-black  ">
            Become Partner
          </Link>
          <button className="md:py-4 w-fit p-3 cursor-pointer md:px-10 primary-text bg-white rounded-2xl sora-bold tracking-wide">
            Get Started <i className="ri-arrow-right-long-line"></i>
          </button>
        </nav>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          onClick={togglenav}
          className="fixed inset-0 min-lg:hidden bg-black/10 backdrop-blur-sm z-30"
        ></div>
      )}
    </header>
  );
}

export default Header;
