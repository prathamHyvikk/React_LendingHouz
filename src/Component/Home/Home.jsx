import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Utility.css'
import FAQAccordion from '../FAQAccordion'
import TestimonialSlider from '../TestimonialSlider'
import homeimg from '@assets/Images/bernard-hermant-KqOLr8OiQLU-unsplash 1.png'
import section2img from '@assets/Images/homefinance.jpg'
import section3img from '@assets/Images/Group-1171275219.png'
import HeroSection from '../HeroSection '
import img1 from '@assets/Images/home-1.png'
import img2 from '@assets/Images/home-2.png'
import img3 from '@assets/Images/home-3.png'
import img4 from '@assets/Images/home-4.png'
import img1t from '@assets/Images/home-T-1.png'
import img2t from '@assets/Images/home-T-2.png'
import img3t from '@assets/Images/home-T-3.png'
import img4t from '@assets/Images/home-T-4.png'
import HowItWorks from '../HowItWorks'
import GetStart from '../GetStart'
import useMeta from '../useMeta'
import axios from 'axios'


function Home() {
  useMeta(
    'Lending Houz | Flexible Financing for Everyday Products',
    'Shop smarter with Lending Houz. Get fast, easy financing for electronics, vehicles, tools, pets and more, all with simple terms and quick approvals.',
    '3BgjutyoDjGNnYj5r7wq5ZyQbfuG0xZ3hYbIi3_H0_w'
  );


  // fetch faq data 

  const [financingFaqs, setFinancingFaqs] = useState([])

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const { data } = await axios.get("/data/homefaq.json");
        setFinancingFaqs(data);
      } catch (error) {
        console.error("Failed to load financing FAQs:", error);
      }
    };

    fetchFaqs();
  }, []);

  // faq data end  

  const features = [
    { label: "Quick Online Process", icon: "ri-group-line" },
    { label: "All Credit Accepted", icon: "ri-group-line" },
    { label: "Multiple Lender Network", icon: "ri-group-line" },
    { label: "Personalized Service", icon: "ri-group-line" },
  ];
  const steps = [
    {
      title: 'Apply Online',
      description: 'Fill out our quick form in under 2 minutes',
      icon: img1,
      bgColor: '#E6F0FA',
    },
    {
      title: 'Get Matched',
      description: 'We connect you with the best financing options',
      icon: img2,
      bgColor: '#FEF4E6',
    },
    {
      title: 'Choose Your Plan',
      description: 'Pick the payment plan that works for you',
      icon: img3,
      bgColor: '#E6F0FA',
    },
    {
      title: 'Move In',
      description: 'Close the deal and step into your new home',
      icon: img4,
      bgColor: '#F0E6FA',
    },
  ];



  const testimonialsData = [
    {
      text:
        "NexCash has transformed the way I manage my personal finances. The wallet is secure, and I love the real-time notifications.",
      name: "Jane D",
      title: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text:
        "As a small business owner, NexCash Business Suite has been a game-changer. The invoicing and analytics tools save me so much time!",
      name: "Jane D",
      title: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      text:
        "The NexCash Gateway has helped us improve customer satisfaction by providing a smooth and secure payment experience.",
      name: "Jane D",
      title: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      text:
        "The NexCash Gateway has helped us improve customer satisfaction by providing a smooth and secure payment experience.",
      name: "Jane D",
      title: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      text:
        "The NexCash Gateway has helped us improve customer satisfaction by providing a smooth and secure payment experience.",
      name: "Jane D",
      title: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      text:
        "The NexCash Gateway has helped us improve customer satisfaction by providing a smooth and secure payment experience.",
      name: "Jane D",
      title: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      text:
        "The NexCash Gateway has helped us improve customer satisfaction by providing a smooth and secure payment experience.",
      name: "Jane D",
      title: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
    },
  ];
  const options = [
    "Fast Approvals Get pre-qualified in minutes",
    "Low Monthly Payments Tailored to fit your budget",
    "Secure & Transparent Process No hidden fees, ever",
    "Expert Guidance Support from start to finish",
    "Available Nationwide Financing in all 50 states",
  ];
  const options2 = [
    "Single-family homes",
    "Condos & townhouses",
    "Multi-family units",
    "Manufactured & mobile homes",
    "FHA & VA-eligible properties",
  ];
  return (
    <>
      <Header />
      {/* section 1 start  */}

      <section className='max-md:px-2 px-10 lg:pb-10 pb-2'>
        <HeroSection
          title="Make Your Dream Home a Reality"
          subtitle="Get approved in minutes. Low rates, fast closings, and expert support every step of the way."
          imageSrc={homeimg}
          imgealt="herosection image"

        />

      </section>

      {/* section 1 end  */}

      {/* section 2 start */}
      <section className=" container lg:py-10  flex items-center justify-between p-4">
        <div className="w-full rounded-lg flex flex-col gap-10 lg:flex-row items-center">
          <img
            src={section2img}
            alt="Laptop with Headphones"
            className='object-cover lg:w-1/2 '
          />
          <div className="flex flex-col lg:ml-10">
            <h1 className="text-4xl sora-regular text-gray-800">Why Choose Us?</h1>
            <ul className="mt-4 space-y-2">
              {options.map((option, index) => (
                <li key={index} className="flex items-center primary-text sora-regular">
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
                  {option}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
      {/* section 2 end */}

      {/* section 3 start  */}

      <section className='max-md:px-2 px-10 py-10'>
        <HowItWorks steps={steps} maintitle="How Financing Works" bgColor="bg-gray-100" />
      </section>
      <section className=" container py-10  flex items-center justify-between p-4">
        <div className="w-full rounded-lg flex flex-col gap-10 lg:flex-row items-center">
          <div className="flex flex-col lg:ml-10">
            <h1 className="text-4xl sora-regular text-gray-800">Types of Properties We Finance</h1>
            <ul className="mt-4 space-y-2">
              {options2.map((options2, index) => (
                <li key={index} className="flex items-center primary-text sora-regular">
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
                  {options2}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={section3img}
            alt="Laptop with Headphones"
          />
        </div>
      </section>

      <div className=" container lg:py-10 px-4 text-center">
        <h1 className="sora-regular max-sm:leading-11 text-gray-900 mb-8">Trusted by Thousands</h1>
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-around items-center text-center  mx-auto space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12">
              {/* <i className="ri-home-2-line primary-text text-xl"></i> */}
              <img src={img1t} alt="" />
            </div>
            <p className="text-2xl font-bold text-gray-900">10,000+</p>
            <h6 className="primary-text">Homeowners financed</h6>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12">
              <img src={img2t} alt="" />
            </div>
            <p className="text-2xl font-bold text-gray-900">98%</p>
            <h6 className="primary-text">Customer satisfaction rate</h6>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12">
              <img src={img3t} alt="" />
            </div>
            <p className="text-2xl font-bold text-gray-900">$500M+</p>
            <h6 className="primary-text">In loans approved</h6>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12">
              <img src={img4t} alt="" />
            </div>
            <p className="text-2xl font-bold text-gray-900">15+ Years</p>
            <h6 className="primary-text">Of home financing experience</h6>
          </div>
        </div>
      </div>
      {/* section 3 end */}

      {/* section 4 start  */}

      <div className="container lg:py-10 max-md:px-2 px-10">
        <FAQAccordion title={"Frequently Asked  Questions"} faqs={financingFaqs} />
      </div>

      {/* section 4 end  */}

      {/* section 5 start  */}

      <div className="container lg:py-10 max-md:px-2 px-10">
        <div className='flex flex-col gap-2 items-center text-center'>
          <h1 className='sora-regular'>What Our Customers Say</h1>
          <h6 className='sora-regular primary-text max-w-[630px]'>Discover how nexPay is transforming the way people manage their money with real stories from satisfied users</h6>
        </div>
        <TestimonialSlider testimonials={testimonialsData} />
      </div>

      {/* section 5 end  */}

      {/* section 6 start  */}

      <section className='max-md:px-2 px-10 lg:py-10' >
        <GetStart
          title="Ready to Take the First Step?"
          subtitle="Pre-Qualify Now – No Impact on Credit Score"

        />
      </section>

      {/* section 6 end */}



      <Footer />
    </>
  )
}

export default Home
