import React, { useEffect, useState } from "react";
import "../Utility.css";
import Header from "../Header";
import Footer from "../Footer";
import HeroSection from "../HeroSection ";
import graphics from "/assets/Images/kioskimg.png";
import img1 from "/assets/Images/electroni-Icon-Backpack.png";
import img2 from "/assets/Images/electroni-Icon-Analytic.png";
import img3 from "/assets/Images/electro-Icon-Backpack (1).png";
import img4 from "/assets/Images/elctroni-Icon-Analytic (1).png";
import laptop from "/assets/Images/kisokimg2.png";
import videoimg from "/assets/Images/kioskimage3.png";
import HowItWorks from "../HowItWorks";
import GetStart from "../GetStart";
import TestimonialSlider from "../TestimonialSlider";
import FAQAccordion from "../FAQAccordion";
import useMeta from "../useMeta";
import axios from "axios";
import kioskmodl1 from "/assets/Images/kisokmodl1.svg";
import kioskmdl2 from "/assets/Images/kisokmodl2.svg";
import kioskmdl3 from "/assets/Images/kioskmodl3.svg";

function Kiosk() {
  useMeta(
    "Kiosk Financing | Affordable Payment Plans with Lending Houz",
    "Start your vending or self-service business with ease. Finance kiosks and pay over time with flexible, affordable options from Lending Houz."
  );
  const steps = [
    {
      title: "$500M+",
      description: "In loans approved",
      icon: img1,
      bgColor: "#E6F0FA",
    },
    {
      title: "98%",
      description: "Customer satisfaction rate",
      icon: img2,
      bgColor: "#FEF4E6",
    },
    {
      title: "15+ Years",
      description: "Of home financing experience",
      icon: img3,
      bgColor: "#E6F0FA",
    },
    {
      title: "10,000+",
      description: "Homeowners financed",
      icon: img4,
      bgColor: "#F0E6FA",
    },
  ];

  const [financingFaqs, setFinancingFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const { data } = await axios.get("/data/kioskfaq.json");
        setFinancingFaqs(data);
      } catch (error) {
        console.error("Failed to load kiosk FAQs:", error);
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
  const options = [
    "Optimized for quick, seamless in-store checkout.",
    "Rugged outdoor kiosks built for all-weather use.",
    "Extended-service kiosks for 24/7 operations.",
    "Compact, space-saving kiosks for small shops and pop-ups.",
    "High-traffic kiosks designed for busy venues and secure payments.",
  ];
  const options2 = [
    "Always Available – Serve customers 24/7 without extra staff.",
    "Fast & Seamless – Quick transactions with smooth, intuitive touchscreens.",
    "Durable Build – Designed for high-traffic environments with long-lasting hardware.",
    "Smart Management – Real-time analytics, inventory tracking, and secure payments.",
    "Eco-Friendly – Reduce paper waste and energy consumption.",
  ];
  return (
    <>
      <Header btncategory="Kiosk" />

      <section className="max-md:px-2 pb-10 px-10">
        <HeroSection
          title="Engage with Ease. Shop Smarter, Serve Faster."
          subtitle="Experience the power of our self-service kiosks – seamless, efficient, and designed to keep your business always open."
          imageSrc={graphics}
          imgealt="herosection image"
          btncategory="Kiosk"
        />
      </section>

      <section className=" container max-md:px-2 px-10  pb-10 flex items-center justify-between ">
        <div className="w-full rounded-lg flex flex-col gap-3 lg:flex-row lg:items-center  ">
          <img src={laptop} alt="Laptop with Headphones" className="lg:w-1/2" />

          <div className="xl:ml-20 text-left">
            <h1 className="text-4xl sora-regular text-gray-800">
              Why Choose Us
            </h1>
            <ul className="mt-4 space-y-2">
              {options2.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 primary-text sora-regular text-base"
                >
                  <svg
                    className="w-5 h-5 min-w-[20px] min-h-[20px] mt-1"
                    fill="black"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10" fill="black" />
                    <path
                      d="M8 12l4 4 6-6"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-md:px-2 px-10">
        <div className=" mx-auto px-2">
          <h1 className="text-4xl sora-regular text-center text-gray-900 mb-10">
            Our Models
          </h1>

          <div className="flex justify-center py-10 gap-6 max-lg:flex-wrap ">
            <div className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col items-center min-w-[250px] max-w-[280px]">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                  src={kioskmodl1}
                  alt="City Commuter"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sora-semibold text-gray-900 mb-1">
                City Commuter
              </h3>
              <p className="text-gray-600 sora-regular text-sm">
                Designed for smooth and efficient urban travel.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col items-center min-w-[250px] max-w-[280px]">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                  src={kioskmdl2}
                  alt="Trail Blazer"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sora-semibold text-gray-900 mb-1">
                Trail Blazer
              </h3>
              <p className="text-gray-600 sora-regular text-sm">
                High-torque, rugged design for conquering off-road terrain.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col items-center min-w-[250px] max-w-[280px]">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                  src={kioskmdl3}
                  alt="Explorer Pro"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sora-semibold text-gray-900 mb-1">
                Explorer Pro
              </h3>
              <p className="text-gray-600 sora-regular text-sm">
                Urban Raider — street-ready setup with smooth handling for city
                rides.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" container max-md:px-2 px-10  flex items-center justify-between  ">
        <div className="w-full rounded-lg flex flex-col gap-10 lg:flex-row items-center">
          <div className="text-left w-full">
            <h1 className="text-4xl sora-regular text-gray-800">
              Types of Kiosks We Offer
            </h1>
            <ul className="mt-4 space-y-2">
              {options.map((option, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 primary-text sora-regular text-base"
                >
                  <svg
                    className="w-5 h-5 min-w-[20px] min-h-[20px] mt-1"
                    fill="black"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10" fill="black" />
                    <path
                      d="M8 12l4 4 6-6"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {option}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <img
              src={videoimg}
              alt="Laptop with Headphones"
              className=" rounded-2xl w-full object-cover "
            />
          </div>
        </div>
      </section>

      <section className="max-md:px-2 px-10">
        <HowItWorks
          steps={steps}
          maintitle="Trusted by Thousands"
          bgColor="bg-white"
        />
      </section>

      <section className="max-md:px-2 pt-10 px-10">
        <FAQAccordion
          title={"Frequently Asked  Questions"}
          faqs={financingFaqs}
        />
      </section>

      <section className="max-md:px-2 px-10">
        <div className="flex flex-col gap-2 items-center text-center">
          <h1 className="sora-regular">What Our Customers Say</h1>
          <h6 className="sora-regular primary-text max-w-[630px]">
            Discover how nexPay is transforming the way people manage their
            money with real stories from satisfied users
          </h6>
        </div>
        <TestimonialSlider testimonials={testimonialsData} />
      </section>

      <section className="max-md:px-2 px-10">
        <GetStart
          title="Ready to Take the First Step?"
          subtitle="Pre-Qualify Now – No Impact on Credit Score."
          btncategory="Kiosk"
        />
      </section>

      <Footer />
    </>
  );
}

export default Kiosk;
