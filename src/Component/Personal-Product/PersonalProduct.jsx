import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../Utility.css";
import FAQAccordion from "../FAQAccordion";
import TestimonialSlider from "../TestimonialSlider";
import gooddog from "/assets/Images/pngtree-smile-phone-and-video-call-with-a-business-woman-in-studio-png-image_13175806 2.png";
import backgroundimg from "/assets/Images/Group-1171275275.png";
import HeroSection from "../HeroSection ";
import section1img from "/assets/Images/Frame-1707481313.png";
import img1 from "/assets/Images/Tools-5.png";
import img2 from "/assets/Images/tool-1.png";
import img3 from "/assets/Images/tool-3.png";
import img4 from "/assets/Images/tool-4.png";
import HowItWorks from "../HowItWorks";
import GetStart from "../GetStart";
import useMeta from "../useMeta";
import axios from "axios";

function PersonalProduct() {
  useMeta(
    "Personal Product Financing | Get What You Need, Now",
    "From wellness products to daily-use items, finance your personal product purchases easily with Lending Houz."
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

  const steps = [
    {
      title: "No Upfront Burden",
      description: "No big upfront costs—just easy monthly plans.",
      icon: img1,
      bgColor: "#E6F0FA",
    },
    {
      title: " Fast, Easy Approval",
      description: "Get approved in minutes with minimal documentation.",
      icon: img2,
      bgColor: "#FEF4E6",
    },
    {
      title: "No Credit Impact",
      description: "Checking your eligibility won’t affect your credit score.",
      icon: img3,
      bgColor: "#E6F0FA",
    },
    {
      title: "Get More, Stress Less",
      description: "All your essentials—from home to health.",
      icon: img4,
      bgColor: "#F0E6FA",
    },
  ];

  const [personalFaqs, setPersonalFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const { data } = await axios.get("/data/personalproductfaq.json");
        setPersonalFaqs(data);
      } catch (error) {
        console.error("Failed to load personal product FAQs:", error);
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
      <Header btncategory="Personal_Product" />

      <section className="max-md:px-2 lg:pb-5 px-10">
        <HeroSection
          title="Get What You Want—Without the Wait"
          subtitle="Finance personal products with low monthly payments—no upfront cost, no credit impact."
          imageSrc={gooddog}
          imgealt="herosection image"
          btncategory="Personal_Product"
        />
      </section>

      <div className="container max-md:px-2 px-10   py-10 ">
        <h1 className="sora-regular   leading-10 text-center ">
          Smart Financing for the Products You Love
        </h1>
        <h6 className="sora-regular mb-10 text-center  mt-5 ">
          From everyday essentials to lifestyle upgrades, get the personal
          products you want—without financial stress. Our flexible financing
          options let you buy now and pay later, with fast approvals and no
          credit impact to check eligibility.
        </h6>
        <img src={section1img} className="mx-auto" alt="" />
      </div>

      <section className="  max-md:px-2 px-10  pt-10 rounded-2xl pb-10">
        <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left ">
            <h1 className="  sora-regular leading-10 mb-6">
              What is Personal Product Financing?
            </h1>
            <p className="sora-regular">
              Whether it’s a phone upgrade, home gym, beauty tool, or new
              appliance—you shouldn’t have to delay the things that improve your
              life. With our personal product financing, you can buy now, pay
              over time without breaking your budget.{" "}
            </p>
          </div>
          <img
            src={backgroundimg}
            alt="Car on mountain road"
            className="rounded-xl w-full max-h-[500px] object-cover"
          />
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
          faqs={personalFaqs}
        />
      </div>

      <div className="container max-md:px-2 px-10">
        <div className="flex flex-col gap-2 items-center text-center">
          <h1 className="sora-regular max-md:leading-10">
            What Our Customers Say
          </h1>
          <h6 className="sora-regular primary-text max-w-[630px]">
            Discover how nexPay is transforming the way people manage their
            money with real stories from satisfied users
          </h6>
        </div>
        <TestimonialSlider testimonials={testimonialsData} />
      </div>

      <section className="max-md:px-2 px-10">
        <GetStart
          title="Call to Action"
          subtitle="Check your eligibility in seconds—no credit impact."
          btncategory="Personal_Product"
        />
      </section>

      <Footer />
    </>
  );
}

export default PersonalProduct;
