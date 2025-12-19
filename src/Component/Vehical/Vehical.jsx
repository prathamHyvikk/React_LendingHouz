import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../Utility.css";
import FAQAccordion from "../FAQAccordion";
import TestimonialSlider from "../TestimonialSlider";
import gooddog from "/assets/Images/Group-1171275242.png";
import backgroundimg from "/assets/Images/Background.png";
import HeroSection from "../HeroSection ";
import img1 from "/assets/Images/v-1.png";
import img2 from "/assets/Images/v-2.png";
import img3 from "/assets/Images/v-3.png";
import img4 from "/assets/Images/v-4.png";
import HowItWorks from "../HowItWorks";
import GetStart from "../GetStart";
import useMeta from "../useMeta";
import axios from "axios";

function Vehical() {
  useMeta(
    " Vehicle Financing | Buy Your Next Ride with Lending Houz",
    "Ready to hit the road? Get financing for your car, motorcycle or truck with quick approvals from Lending Houz."
  );

  const stats = [
    { value: "10,000+", label: "Vehicles Financed" },
    { value: "$25M+", label: "In Loans Approved" },
    { value: "2 Hour", label: "Average Approval Time" },
    { value: "4.9/5", label: "Customer Satisfaction" },
  ];

  const steps = [
    {
      title: "Wide Inventory Access",
      description: "Cars, trucks, SUVs & more",
      icon: img1,
      bgColor: "#E6F0FA",
    },
    {
      title: "Low Interest Rates",
      description: "Competitive APRs from top lenders",
      icon: img2,
      bgColor: "#FEF4E6",
    },
    {
      title: "Quick & Easy Process",
      description: "Get financing in less than 24 hours",
      icon: img3,
      bgColor: "#E6F0FA",
    },
    {
      title: "Safe & Secure",
      description: "Your data is fully encrypted",
      icon: img4,
      bgColor: "#F0E6FA",
    },
  ];

  const [vehicleFaqs, setVehicleFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const { data } = await axios.get("/data/vehicalfaq.json");
        setVehicleFaqs(data);
      } catch (error) {
        console.error("Failed to load vehicle FAQs:", error);
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
    "$0 Down Available",
    "Instant Pre–Approval with No Hard Credit Check",
    "Payment Plans from 3 to 36 Months",
    "Early Payoff Without Penalties",
    "Transparent Terms & Fixed Monthly Payments",
  ];

  return (
    <>
      <Header btncategory="Vehicle" />

      <section className="max-md:px-2 px-10">
        <HeroSection
          title="Drive Your Dream Car Today Easy Financing Starts Here"
          subtitle="Fast approvals, flexible plans, and vehicles for every budget."
          imageSrc={gooddog}
          imgealt="herosection image"
          btncategory="Vehicle"
        />
      </section>

      <section className="bg-[#f5f7ff] p-6 md:p-12 rounded-2xl">
        <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <img
            src={backgroundimg}
            alt="Car on mountain road"
            className="rounded-xl w-full max-h-[500px] object-cover"
          />

          <div className="text-center lg:text-left lg:ml-10">
            <h1 className="  sora-regular mb-6">How It Works</h1>

            <div className="space-y-5 text-gray-800">
              <div>
                <p className="sora-semibold">Step 1: Choose Your Vehicle</p>
                <p className="sora-regular primary-text">
                  Select from a wide range of new or used vehicles.
                </p>
              </div>

              <div>
                <p className="sora-semibold">Step 2: Apply Online</p>
                <p className="sora-regular primary-text">
                  Fill out a quick, secure form. No impact on credit score.
                </p>
              </div>

              <div>
                <p className="sora-semibold">Step 3: Get Approved Fast</p>
                <p className="sora-regular primary-text">
                  Approval within hours – drive off the lot the same day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 max-md:px-2 px-10 text-center">
        <h1 className="sora-regular mb-12">Our Impact</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`px-4 ${index < stats.length - 1 ? "border-r" : ""}`}
            >
              <p className="text-2xl sora-bold text-gray-900 mb-2">
                {item.value}
              </p>
              <p className="text-sm primary-text">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-md:px-2 px-10">
        <HowItWorks
          steps={steps}
          maintitle=" Why Choose Us?"
          bgColor="bg-gray-100"
        />
      </section>

      <div className="container max-md:px-2 px-10">
        <FAQAccordion
          title={"Frequently Asked  Questions"}
          faqs={vehicleFaqs}
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
          title="Ready to Start?"
          subtitle="Pre-Qualify Now – No Impact on Credit Score"
          btncategory="Vehicle"
        />
      </section>

      <Footer />
    </>
  );
}

export default Vehical;
