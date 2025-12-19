import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../Utility.css";
import BtnGetStart from "../BtnGetStart";
import FAQAccordion from "../FAQAccordion";
import TestimonialSlider from "../TestimonialSlider";
import section1img from "/assets/Images/section1img.png";
import section2img from "/assets/Images/Group-1171275195.png";
import section6img from "/assets/Images/Group-1171275201.png";
import useMeta from "../useMeta";
import axios from "axios";

function Automotive() {
  useMeta(
    "Automotive Financing | Buy Cars with Lending Houz",
    "Finance your next car or truck easily. Lending Houz offers affordable plans and fast approvals for all your automotive needs."
  );
  const features = [
    { label: "Quick Online Process", icon: "ri-group-line" },
    { label: "All Credit Accepted", icon: "ri-group-line" },
    { label: "Multiple Lender Network", icon: "ri-group-line" },
    { label: "Personalized Service", icon: "ri-group-line" },
  ];

  const [financingFaqs, setFinancingFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const { data } = await axios.get("/data/automotivefaq.json");
        setFinancingFaqs(data);
      } catch (error) {
        console.error("Failed to load automotive FAQs:", error);
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
      <Header btncategory="Automotive" />
      {/* section 1 start  */}

      <section className="container flex flex-col items-center gap-4 max-md:px-2 px-10">
        <div className="flex flex-col gap-4 mb-4 items-center">
          <h1 className="sora-regular tracking-tight">
            Drive Your Dream Car Today
          </h1>
          <h6 className="primary-text sora-regular">
            Auto Financing Made Simple – Fast Approvals, Flexible Plans
          </h6>
        </div>
        <BtnGetStart category="Automotive" />
        <img src={section1img} className="mt-4 " alt="" />
      </section>

      {/* section 1 end  */}

      {/* section 2 start  */}

      <section className="container max-md:px-2 py-10 px-10">
        <div className="max-w-[619px] flex mx-auto items-center mb-4 gap-4 flex-col text-center">
          <h1 className="sora-regular">Why Choose Us?</h1>
          <h6 className="sora-regular primary-text">
            We make car financing simple, fast, and accessible for everyone. No
            matter your credit score, we connect you with trusted lenders and
            flexible options. Enjoy transparent terms, competitive rates, and
            expert support from start to finish.
          </h6>
        </div>
        <div className="flex flex-wrap min-lg:justify-evenly justify-center gap-4 p-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="group w-60 cursor-pointer rounded-lg border p-6 text-center transition-all duration-300 bg-white text-black hover:bg-[#0F6AE2] hover:text-white hover:border-transparent"
            >
              <i
                className={`${item.icon} text-3xl mb-3 transition-colors duration-300 group-hover:text-white text-[#0F6AE2]`}
              ></i>
              <p className="text-base sora-medium tracking-tight">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* section 2 end */}

      {/* section 3 start */}

      <div className="  py-10 max-md:px-2 px-10 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl  sora-regular mb-4">How It Works</h2>
            <h6 className="primary-text sora-regular mb-10 max-w-md">
              Apply online in minutes, get pre approved instantly with no credit
              impact. Choose your car, sign the paperwork, and drive away — it’s
              that easy!
            </h6>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-5 rounded-xl transition-all duration-300 hover:bg-black hover:text-white cursor-pointer">
                <div className="text-2xl mb-2 transition-colors duration-300">
                  <i className="ri-file-text-line"></i>
                </div>
                <h4 className=" sora-semibold mb-1">Fill Out a Simple Form</h4>
                <p className="text-sm primary-text sora-semibold">
                  Takes less than 3 minutes
                </p>
              </div>

              <div className="bg-gray-100 p-5 rounded-xl transition-all duration-300 hover:bg-black hover:text-white cursor-pointer">
                <div className="text-2xl mb-2 transition-colors duration-300">
                  <i className="ri-check-double-line"></i>
                </div>
                <h4 className="sora-semibold mb-1">Get Pre Approved</h4>
                <p className="text-sm primary-text sora-semibold">
                  Instantly, with no impact on credit
                </p>
              </div>

              <div className="bg-gray-100 p-5 rounded-xl transition-all duration-300 hover:bg-black hover:text-white cursor-pointer">
                <div className="text-2xl mb-2 transition-colors duration-300">
                  <i className="ri-car-line"></i>
                </div>
                <h4 className="sora-semibold mb-1">Choose Your Car</h4>
                <p className="text-sm primary-text sora-semibold">
                  From partnered dealers or private sellers
                </p>
              </div>

              <div className="bg-gray-100 p-5 rounded-xl transition-all duration-300 hover:bg-black hover:text-white cursor-pointer">
                <div className="text-2xl mb-2 transition-colors duration-300">
                  <i className="ri-roadster-line"></i>
                </div>
                <h4 className="sora-semibold mb-1">Finalize and Drive Away</h4>
                <p className="text-sm primary-text sora-semibold">
                  Stress free paperwork & fast closing
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <img src={section2img} alt="Phone 1" />
          </div>
        </div>
      </div>

      {/* section 3 end */}

      {/* section 4 start  */}

      <div className="container max-md:px-2 px-10">
        <FAQAccordion
          title={"Frequently Asked  Questions"}
          faqs={financingFaqs}
        />
      </div>

      {/* section 4 end  */}

      {/* section 5 start  */}

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

      {/* section 5 end  */}

      {/* section 6 start  */}

      <div className="container max-md:px-2 px-10">
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-full lg:w-1/2 flex justify-center">
              <img src={section6img} alt="" />
            </div>

            <div className="w-full lg:w-1/2 text-center  lg:text-left">
              <h1 className="text-4xl    sora-regular mb-6 ">
                Ready to Get Started?
              </h1>
              <h6 className=" primary-text mb-8 text-base">
                Pre approval is quick, free, and doesn’t impact your credit
                score. Apply in just minutes using our secure online form.
                There’s no obligation, and you’ll instantly know where you
                stand. We make it easy to shop for your next car with
                confidence—no stress, no surprises.
              </h6>
              <div className="max-md:flex max-md:justify-center">
                <BtnGetStart category="Automotive" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* section 6 end   */}

      <Footer />
    </>
  );
}

export default Automotive;
