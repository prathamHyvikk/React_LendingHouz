import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Utility.css'
import FAQAccordion from '../FAQAccordion'
import TestimonialSlider from '../TestimonialSlider'
import gooddog from '@assets/Images/portrait-farmer-happy-young-woman-600nw-2397852291-removebg-preview-1.png'
import HeroSection from '../HeroSection '
import gridimg from '@assets/Images/Group-1171275283-grid.png'
import GetStart from '../GetStart'
import WhyWeChoose from '../WhyWeChoose'
import BtnGetStart from '../BtnGetStart'
import useMeta from '../useMeta'


function LivestockEquipment() {

    useMeta(
        "Livestock Equipment Financing | Support Your Farm with Lending Houz",
        "Need farm tools or livestock equipment? Lending Houz offers budget-friendly financing tailored for agricultural needs."
    )



    const LivestockFaq = [
        {
            question: "What can I finance?",
            answer: "Squeeze chutes, feeders, watering systems, and barn improvements.",
        },
        {
            question: "Do you require proof of farm income?",
            answer: "We verify basic farm revenue but focus mainly on collateral value.",
        },
        {
            question: "Can I bundle multiple items?",
            answer: "Yes—group several pieces under one easy loan",
        },
        {
            question: "How soon can I receive funding?",
            answer: "Many deals fund within five business days of approval.",
        },
        {
            question: "Is there a minimum purchase amount?",
            answer: "Yes—equipment must total at least $2,000.",
        },
    ];


    const options = [
        "Feeders & waterers",
        "Livestock scales",
        "Livestock trailers",
        "Electric & panel fencing",
        "Milking machines",
        "Veterinary handling equipment", 
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
    return (
        <>
            <Header />


            <section className='px-2'>
                <HeroSection
                    title="Affordable Financing for Your Livestock Equipment Needs"
                    subtitle="Get the tools you need to grow your farm with flexible payment options and competitive rates."
                    imageSrc={gooddog}
                    imgealt="herosection image"
                />

            </section>
            <section className='bg-gray-100'>
                <div className="flex flex-col items-center justify-center  container  py-10">
                    <h1 className=" text-center sora-regular mb-10">Why Finance With Us</h1>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="bg-white p-4 rounded-lg shadow-md w-72 text-center">
                            <div className="primary-bg rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                                <i className="ri-bank-card-line text-white text-xl"></i>
                            </div>
                            <h2 className="sora-semibold mb-2">No Credit Impact to Apply</h2>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md w-72 text-center">
                            <div className="primary-bg rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                                <i className="ri-money-dollar-circle-line text-white text-xl"></i>
                            </div>
                            <h2 className="sora-semibold mb-2">Flexible Terms That Fit Your Cash Flow</h2>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md w-72 text-center">
                            <div className="primary-bg rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                                <i className="ri-time-line text-white text-xl"></i>
                            </div>
                            <h2 className="sora-semibold mb-2">Fast Approvals, Often Within Minutes</h2>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md w-72 text-center">
                            <div className="primary-bg rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                                <i className="ri-shield-check-line text-white text-xl"></i>
                            </div>
                            <h2 className="sora-semibold mb-2">Trusted by Farmers Nationwide</h2>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md w-72 text-center">
                            <div className="primary-bg rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                                <i className="ri-wallet-3-line text-white text-xl"></i>
                            </div>
                            <h2 className="sora-semibold mb-2">Low Monthly Payments</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" container py-4  flex items-center justify-between p-4">
                <div className="w-full rounded-lg flex flex-col justify-between gap-10 lg:flex-row items-center">

                    <img   src={gridimg}  className=" w-full   max-w-[599px] object-cover rounded-xl"  />

                    <div className="flex flex-col gap-4 lg:ml-10">
                        <h1 className="text-4xl sora-regular text-gray-800">Finance a Wide Range of Livestock Equipment</h1>
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
                        <BtnGetStart/>
                    </div>

                </div>
            </section>

            <WhyWeChoose />

            <div className="container px-2">
                <FAQAccordion title={"Frequently Ask Questions"} faqs={LivestockFaq} />
            </div>


            <div className="container px-2">
                <div className='flex flex-col gap-2 items-center text-center'>
                    <h1 className='sora-regular'>What Our Customers Say</h1>
                    <h6 className='sora-regular primary-text max-w-[630px]'>Discover how nexPay is transforming the way people manage their money with real stories from satisfied users</h6>
                </div>
                <TestimonialSlider testimonials={testimonialsData} />
            </div>


            <section className='px-2' >
                <GetStart
                    title="Call to Action"
                    subtitle="Check your eligibility in seconds—no credit impact."
                />
            </section>

            <Footer />
        </>
    )
}

export default LivestockEquipment
