import React, { useEffect, useState } from "react";
import "../Utility.css";
import Header from "../Header";
import Footer from "../Footer";
import TitleSection from "../TitleSection";
import tractore from "/assets/Images/about-img.png";
import tractore2 from "/assets/Images/Group-1171275285-about.png";
import FAQAccordion from "../FAQAccordion";
import TestimonialSlider from "../TestimonialSlider";
import GetStart from "../GetStart";
import BtnGetStart from "../BtnGetStart";
import useMeta from "../useMeta";
import axios from "axios";

function About() {
  useMeta(
    "About Us | Lending Houz – Making Big Purchases Affordable",
    "Learn how Lending Houz is redefining retail finance. We help you buy what you need with affordable payment options and a hassle-free process."
  );

  const [financingFaqs, setFinancingFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const { data } = await axios.get("/data/aboutfaq.json");
        setFinancingFaqs(data);
      } catch (error) {
        console.error("Failed to load financing FAQs:", error);
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
      <Header />
      <TitleSection
        title="About Us"
        subtitle="Making Financing Simple, Honest, and Accessible"
        description={`At CTI Your Company Name, we believe everyone deserves access to the tools and products that help them grow — whether it's running a business, managing a farm, or improving life at home. That's why we offer flexible, transparent financing solutions for equipment, personal products, and more.`}
      />

      <section className="container max-md:px-2 px-10 py-10 text-center">
        <h1 className="sora-regular mb-2"> Our Mission</h1>
        <h6 className="sora-regular sora-light text-base max-w-[1057px]">
          To make financing straightforward, fast, and fair — empowering
          everyday people to afford what they need, when they need it, without
          relying on banks or complicated credit systems.
        </h6>
      </section>

      <section className="flex flex-col max-md:px-2 px-10 md:py-10 container items-center justify-between py-4    ">
        <h1 className=" sora-regular text-start w-full lg:text-center text-gray-900 mb-10">
          Who We Serve
        </h1>

        <div className="flex flex-row max-lg:flex-col items-center justify-between  gap-10  w-full">
          <img
            src={tractore}
            alt="Tractor"
            className=" max-w-[508px] w-full rounded-lg  "
          />

          <div className="lg:w-1/2 md:pl-6 w-full flex flex-col  items-start">
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 flex justify-center items-center mr-2"
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
                <div className="flex flex-col">
                  <h6 className="primary-text sora-semibold">
                    Farmers & Ranchers
                  </h6>
                  <p className="sora-regular">financing livestock equipment</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 flex justify-center items-center mr-2"
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
                <div className="flex flex-col">
                  <span className="primary-text sora-semibold">
                    Landscapers & Contractors
                  </span>
                  <p className="sora-regular">
                    financing work tools and vehicles
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 flex justify-center items-center mr-2"
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
                <div className="flex flex-col">
                  <span className="primary-text sora-semibold">
                    Families & Individuals
                  </span>
                  <p className="sora-regular">
                    financing furniture, electronics, and personal items
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 flex justify-center items-center mr-2"
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
                <div className="flex flex-col">
                  <span className="primary-text sora-semibold">
                    Small Businesses
                  </span>
                  <p className="sora-regular">
                    managing startup costs or upgrades
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col max-md:px-2 px-10 md:py-10 py-4 container items-center justify-between    ">
        <div className="flex flex-row max-lg:flex-col items-center justify-between gap-10  w-full">
          <div className="lg:w-1/2 md:pl-6 w-full flex flex-col items-start">
            <h1 className=" sora-regular md:text-4xl text-2xl  text-gray-900 mb-10">
              What Makes Us Different?
            </h1>
            <ul className="space-y-4">
              <li className="flex  items-start">
                <svg
                  className="w-5 h-5 flex justify-center items-center mr-2"
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
                <div className="flex flex-wrap items-center gap-2 ">
                  <span className="primary-text sora-semibold">
                    Fast, Easy Applications –
                  </span>
                  <p className="sora-regular">No long forms or red tape</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 flex justify-center items-center mr-2"
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
                <div className="flex flex-wrap items-center gap-2 ">
                  <span className="primary-text sora-semibold">
                    Fair & Flexible Terms –
                  </span>
                  <p className="sora-regular">Budget-friendly payments</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 flex justify-center items-center mr-2"
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
                <div className="flex flex-wrap items-center gap-2 ">
                  <span className="primary-text sora-semibold">
                    Friendly Support –{" "}
                  </span>
                  <p className="sora-regular">
                    Real people helping real people
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 flex justify-center items-center mr-2"
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
                <div className="flex flex-wrap items-center gap-2 ">
                  <span className="primary-text sora-semibold">
                    Transparent Process –{" "}
                  </span>
                  <p className="sora-regular">No hidden fees, no surprises</p>
                </div>
              </li>
            </ul>
            <div className="mt-7">
              <BtnGetStart />
            </div>
          </div>
          <img
            src={tractore2}
            alt="Tractor"
            className=" max-w-[508px] w-full rounded-lg  "
          />
        </div>
      </section>

      <div className="container max-md:px-2 px-10">
        <FAQAccordion
          title={"Frequently Asked  Questions"}
          faqs={financingFaqs}
        />
      </div>

      <div className="container max-md:px-2 px-10">
        <div className="flex flex-col gap-2 items-center text-center">
          <h1 className="sora-regular">What Our Customers Say</h1>
          <h6 className="sora-regular primary-text max-w-[630px]">
            Discover how nexPay is transforming the way people manage their
            money with real stories from satisfied users
          </h6>
        </div>
        <TestimonialSlider testimonials={testimonialsData} />
      </div>

      <section className="max-md:px-2 px-10">
        <GetStart
          title="Let’s Move Forward — Together"
          subtitle="Pre-Qualify Now – No Impact on Credit Score"
        />
      </section>

      <Footer />
    </>
  );
}

export default About;
