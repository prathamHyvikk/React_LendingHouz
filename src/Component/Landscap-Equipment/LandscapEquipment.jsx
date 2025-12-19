import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../Utility.css";
import FAQAccordion from "../FAQAccordion";
import TestimonialSlider from "../TestimonialSlider";
import gooddog from "/assets/Images/Group-1171275280.png";
import backgroundimg from "/assets/Images/Group-1171275275.png";
import HeroSection from "../HeroSection ";
import tractore from "/assets/Images/Group-1171275281.png";
import img1 from "/assets/Images/download 8.png";
import img2 from "/assets/Images/download 9.png";
import img3 from "/assets/Images/download 10.png";
import img4 from "/assets/Images/images 13.png";
import img5 from "/assets/Images/images 11.png";
import img6 from "/assets/Images/images 12.png";
import GetStart from "../GetStart";
import WhyWeChoose from "../WhyWeChoose";
import useMeta from "../useMeta";
import axios from "axios";

function LandscapEquipment() {
  useMeta(
    "Landscaping Equipment Financing | Affordable Outdoor Tools",
    "From mowers to blowers, finance all your landscaping tools with Lending Houz and make outdoor upgrades more accessible."
  );
  const items = [
    {
      icon: "ri-home-gear-line",
      label: "Contractors & Builders",
    },
    {
      icon: "ri-tools-line",
      label: "Auto Mechanics & Body Shops",
    },
    {
      icon: "ri-plug-line",
      label: "Plumbers & Electricians",
    },
    {
      icon: "ri-ruler-2-line",
      label: "Carpenters & Renovators",
    },
    {
      icon: "ri-shape-line",
      label: "DIY Professionals & Side Hustlers",
    },
  ];

  const [financingFaqs, setFinancingFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const { data } = await axios.get("/data/landscapefaq.json");
        setFinancingFaqs(data);
      } catch (error) {
        console.error("Failed to load landscape equipment FAQs:", error);
      }
    };

    fetchFaqs();
  }, []);

  const testimonialsData = [
    {
      text: "NexCash has transformed the way I manage my personal finances. The wallet is secure, and I love the real-time notifications.",
      name: "Jane D",
      title: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "As a small business owner, NexCash Business Suite has been a game-changer. The invoicing and analytics tools save me so much time!",
      name: "Jane D",
      title: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      text: "The NexCash Gateway has helped us improve customer satisfaction by providing a smooth and secure payment experience.",
      name: "Jane D",
      title: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      text: "The NexCash Gateway has helped us improve customer satisfaction by providing a smooth and secure payment experience.",
      name: "Jane D",
      title: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      text: "The NexCash Gateway has helped us improve customer satisfaction by providing a smooth and secure payment experience.",
      name: "Jane D",
      title: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      text: "The NexCash Gateway has helped us improve customer satisfaction by providing a smooth and secure payment experience.",
      name: "Jane D",
      title: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      text: "The NexCash Gateway has helped us improve customer satisfaction by providing a smooth and secure payment experience.",
      name: "Jane D",
      title: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
  ];

  return (
    <>
      <Header btncategory="Landscape_Equipment" />

      <section className="px-2 pb-10">
        <HeroSection
          title="Power Your Landscaping Business — Without the Upfront Cost"
          subtitle="Finance mowers, trailers, trimmers, and more with low monthly payments."
          imageSrc={gooddog}
          imgealt="herosection image"
          btncategory="Landscape_Equipment"
        />
      </section>

      <section className="px-2 py-10 container ">
        <h1 className="sora-regular text-center">What We Finance</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 ">
          <div className="flex max-md:flex-col gap-5 items-center">
            <img
              className="w-[171px] h-[113px] object-cover rounded-2xl "
              src={img1}
              alt=""
            />
            <div>
              <h2 className="sora-semibold md:text-2xl ">
                Lawn tractors & trimmers
              </h2>
              <h6 className="sora-regular primary-text">
                Versatile for mowing, hauling, and edging—ideal tools for full
                yard maintenance.
              </h6>
            </div>
          </div>
          <div className="flex max-md:flex-col gap-5 items-center">
            <img
              className="w-[171px] h-[113px] object-cover rounded-2xl "
              src={img2}
              alt=""
            />

            <div>
              <h2 className="sora-semibold md:text-2xl ">
                Skid steers & compact loaders
              </h2>
              <h6 className="sora-regular primary-text">
                Tough, versatile machines built for digging, lifting, and moving
                heavy loads on any terrain.
              </h6>
            </div>
          </div>
          <div className="flex max-md:flex-col gap-5 items-center">
            <img
              className="w-[171px] h-[113px] object-cover rounded-2xl "
              src={img1}
              alt=""
            />
            <div>
              <h2 className="sora-semibold md:text-2xl ">
                Utility trailers & dump carts
              </h2>
              <h6 className="sora-regular primary-text">
                Perfect for hauling tools, debris, or supplies—built to make
                yard work easier.
              </h6>
            </div>
          </div>
          <div className="flex max-md:flex-col gap-5 items-center">
            <img
              className="w-[171px] h-[113px] object-cover rounded-2xl "
              src={img4}
              alt=""
            />

            <div>
              <h2 className="sora-semibold md:text-2xl ">
                Irrigation and turf equipment
              </h2>
              <h6 className="sora-regular primary-text">
                Keep landscapes healthy and green with efficient watering
                systems and turf care tools.
              </h6>
            </div>
          </div>
          <div className="flex max-md:flex-col gap-5 items-center">
            <img
              className="w-[171px] h-[113px] object-cover rounded-2xl "
              src={img1}
              alt=""
            />
            <div>
              <h2 className="sora-semibold md:text-2xl ">
                Blowers, edgers & chainsaws
              </h2>
              <h6 className="sora-regular primary-text">
                Power through cleanup, trim with precision, and cut with
                ease—essential tools for a polished landscape.
              </h6>
            </div>
          </div>
          <div className="flex max-md:flex-col gap-5 items-center">
            <img
              className="w-[171px] h-[113px] rounded-2xl "
              src={img6}
              alt=""
            />

            <div>
              <h2 className="sora-semibold md:text-2xl ">
                Zero-turn & ride-on mowers
              </h2>
              <h6 className="sora-regular primary-text">
                Fast, powerful, and built for large lawns—perfect for pro-level
                mowing with ease and precision.
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col px-2 py-12 container items-center justify-between    ">
        <h1 className=" sora-regular text-gray-900 mb-10">
          Why Choose Our Financing?
        </h1>

        <div className="flex flex-row max-md:flex-col items-center justify-between   w-full">
          <img
            src={tractore}
            alt="Tractor"
            className=" max-w-[508px] w-full rounded-lg  "
          />

          <div className="md:w-1/2 md:pl-6 w-full flex flex-col items-start">
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="ri-money-dollar-circle-line primary-text mr-2 mt-1"></i>
                <div className="flex flex-col">
                  <h6 className="primary-text sora-semibold">
                    No Large Upfront Cost{" "}
                  </h6>
                  <p className="sora-regular">
                    Keep your cash flow steady by spreading out payments.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="ri-calendar-check-line primary-text mr-2 mt-1"></i>
                <div className="flex flex-col">
                  <span className="primary-text sora-semibold">
                    Flexible Terms{" "}
                  </span>
                  <p className="sora-regular">
                    Choose the monthly plan that fits your budget.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="ri-shield-check-line primary-text mr-2 mt-1"></i>
                <div className="flex flex-col">
                  <span className="primary-text sora-semibold">
                    No Credit Impact to Check Eligibility{" "}
                  </span>
                  <p className="sora-regular">
                    See if you qualify without affecting your credit score.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="ri-time-line primary-text mr-2 mt-1"></i>
                <span className="primary-text sora-semibold">
                  Fast Approvals
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <WhyWeChoose />

      <div className="container px-2">
        <FAQAccordion
          title={"Frequently Asked  Questions"}
          faqs={financingFaqs}
        />
      </div>

      <div className="container px-2">
        <div className="flex flex-col gap-2 items-center text-center">
          <h1 className="sora-regular">What Our Customers Say</h1>
          <h6 className="sora-regular primary-text max-w-[630px]">
            Discover how nexPay is transforming the way people manage their
            money with real stories from satisfied users
          </h6>
        </div>
        <TestimonialSlider testimonials={testimonialsData} />
      </div>

      <section className="px-2">
        <GetStart
          title="Call to Action"
          subtitle="Check your eligibility in seconds—no credit impact."
          btncategory="Landscape_Equipment"
        />
      </section>

      <Footer />
    </>
  );
}

export default LandscapEquipment;
