import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Utility.css'
import FAQAccordion from '../FAQAccordion'
import TestimonialSlider from '../TestimonialSlider'
import ringimg from '@assets/Images/pngwing.com-(23)-2.png'
import pingimg from '@assets/Images/pngwing.com-(25)-2.png'
import HeroSection from '../HeroSection '
import img1 from '@assets/Images/Featured-icon-1.png'
import img2 from '@assets/Images/feature-icon.png'
import img3 from '@assets/Images/Featured-icon-2.png'
import img4 from '@assets/Images/Featured-icon-3.png'
import HowItWorks from '../HowItWorks'
import GetStart from '../GetStart'
import useMeta from '../useMeta'
import axios from 'axios'



function PowerSports() {
    useMeta(
        " Power Sports Financing | ATVs, Dirt Bikes and More",
        "Fuel your adventure. Finance power sports gear like ATVs, UTVs and more with Lending Houz’s flexible loan solutions."
    )

    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    const getOffset = (percent) => circumference - (percent / 100) * circumference;

    const steps = [
        {
            title: 'Choose Your Product',
            description: 'Shop from a wide range of phones, laptops, tablets, TVs, gaming consoles & more.',
            icon: img1,
            bgColor: '#E6F0FA',
        },
        {
            title: 'Apply in Minutes',
            description: 'Our fast, hassle-free application process gets you approved in just a few clicks.',
            icon: img2,
            bgColor: '#FEF4E6',
        },
        {
            title: 'Get Approved Instantly',
            description: 'We work with all credit types including no credit or bad credit.',
            icon: img3,
            bgColor: '#E6F0FA',
        },
        {
            title: 'Pay Over Time',
            description: 'Pick a plan that works for your budget. No hidden fees. No surprises.',
            icon: img4,
            bgColor: '#F0E6FA',
        },
    ];
    const [powerFaqs, setPowerFaqs] = useState([])

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const { data } = await axios.get('/data/powersportsfaq.json')
                setPowerFaqs(data)
            } catch (error) {
                console.error('Failed to load power sports FAQs:', error)
            }
        }

        fetchFaqs()
    }, [])

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
            <Header  btncategory="Power_Sports" />


            <section className='max-md:px-2 px-10'>
                <HeroSection
                    title="Adventure Starts Here Finance Your Power Sports Ride Today"
                    subtitle="Get the adrenaline without the upfront cost."
                    imageSrc={ringimg}
                    imgealt="herosection image"
                    btncategory="Power_Sports" 
                />

            </section>

            <section className='max-md:px-2 py-10 px-10'>
                <HowItWorks steps={steps} maintitle="Who We Help" bgColor="bg-gray-100" />
            </section>

            <section className="container py-4 max-md:px-2 px-10">
                <h1 className=" sora-regular leading-10  text-center mb-10">Vehicles We Help You Own</h1>
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-28">

                    <div className="flex flex-col w-full lg:items-end   gap-4">
                        <button className="flex md:max-w-[377px] w-full items-center lg:ml-auto justify-between primary-bg gap-4  text-white px-4 py-3 rounded-full text-left font-medium transition-all">
                            <span>Street & Off-Road Motorcycles</span>
                            <i className="ri-motorbike-fill text-xl"></i>
                        </button>

                        <button className="flex md:max-w-[377px] w-full  lg:mr-10 items-center justify-between primary-bg gap-4 text-white px-4 py-3 rounded-full text-left font-medium transition-all">
                            <span>All-Terrain Vehicles (ATVs)</span>
                            <i className="ri-roadster-fill text-xl"></i>
                        </button>

                        <button className="flex  md:max-w-[377px] w-full lg:mr-16 items-center justify-between primary-bg gap-4 text-white px-4 py-3 rounded-full text-left font-medium transition-all">
                            <span>Utility Terrain Vehicles (UTVs)</span>
                            <i className="ri-truck-fill text-xl"></i>
                        </button>

                        <button className="flex  md:max-w-[377px] w-full lg:mr-16 items-center justify-between primary-bg gap-4 text-white px-4 py-3 rounded-full text-left font-medium transition-all">
                            <span>Jet Skis & Watercraft</span>
                            <i className="ri-water-flash-fill text-xl"></i>
                        </button>

                        <button className="flex md:max-w-[377px] w-full lg:mr-10 items-center justify-between primary-bg gap-4 text-white px-4 py-3 rounded-full text-left font-medium transition-all">
                            <span>Snowmobiles</span>
                            <i className="ri-snowflake-fill text-xl"></i>
                        </button>

                        <button className="flex md:max-w-[377px] w-full  lg:ml-auto items-center justify-between primary-bg gap-4 text-white px-4 py-3 rounded-full text-left font-medium transition-all">
                            <span>Scooters, E-bikes, & Trailers</span>
                            <i className="ri-bike-fill text-xl"></i>
                        </button>
                    </div>

                    <div className=" w-full">
                        <img
                            src={pingimg}
                            alt="ATV Vehicle"
                            className="w-full object-contain"
                        />
                    </div>
                </div>
            </section>


            <section className="container py-10 max-md:px-2 px-10">
                <h1 className=" text-center leading-10 sora-regular">Our Impact in Numbers</h1>
                <h6 className="primary-text text-center mt-2 max-lg:mt-10 mb-10">Trusted by thousands of riders nationwide.</h6>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">

                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-32 h-32">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                                <circle
                                    cx="60"
                                    cy="60"
                                    r={radius}
                                    fill="transparent"
                                    stroke="#E5E7EB"
                                    strokeWidth="10"
                                />
                                <circle
                                    cx="60"
                                    cy="60"
                                    r={radius}
                                    fill="transparent"
                                    stroke="#2563EB"
                                    strokeWidth="10"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={getOffset(50)}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="primary-bg text-center flex justify-center items-center text-white p-2 rounded-full size-8">
                                    <i className="ri-car-fill"></i>
                                </div>
                                <p className="mt-2 primary-text font-semibold text-xl">800+</p>
                            </div>
                        </div>
                        <h6 className="mt-4 sora-medium text-gray-700">800+ Vehicles Financed</h6>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-32 h-32">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                                <circle
                                    cx="60"
                                    cy="60"
                                    r={radius}
                                    fill="transparent"
                                    stroke="#E5E7EB"
                                    strokeWidth="10"
                                />
                                <circle
                                    cx="60"
                                    cy="60"
                                    r={radius}
                                    fill="transparent"
                                    stroke="#2563EB"
                                    strokeWidth="10"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={getOffset(98)}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="primary-bg text-center flex justify-center items-center text-white p-2 rounded-full size-8">
                                    <i className="ri-user-star-fill"></i>
                                </div>
                                <p className="mt-2 primary-text font-semibold text-xl">4.9/5</p>
                            </div>
                        </div>
                        <h6 className="mt-4 sora-medium text-gray-700">4.9/5 Customer Satisfaction</h6>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-32 h-32">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                                <circle
                                    cx="60"
                                    cy="60"
                                    r={radius}
                                    fill="transparent"
                                    stroke="#E5E7EB"
                                    strokeWidth="10"
                                />
                                <circle
                                    cx="60"
                                    cy="60"
                                    r={radius}
                                    fill="transparent"
                                    stroke="#2563EB"
                                    strokeWidth="10"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={getOffset(90)}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="primary-bg text-center flex justify-center items-center text-white p-2 rounded-full size-8">
                                    <i className="ri-flashlight-fill"></i>
                                </div>
                                <p className="mt-2 primary-text font-semibold text-xl">90%</p>
                            </div>
                        </div>
                        <h6 className="mt-4 sora-medium text-gray-700">90% Same-Day Approvals</h6>
                    </div>
                </div>
            </section>


            <section className="container max-md:px-2 px-10">
                <FAQAccordion title={"Frequently Asked  Questions"} faqs={powerFaqs} />
            </section>


            <section className="container max-md:px-2 px-10">
                <div className='flex flex-col gap-2 items-center text-center'>
                    <h1 className='sora-regular leading-10'>What Our Customers Say</h1>
                    <h6 className='sora-regular primary-text max-w-[630px]'>Discover how nexPay is transforming the way people manage their money with real stories from satisfied users</h6>
                </div>
                <TestimonialSlider testimonials={testimonialsData} />
            </section>


            <section className='max-md:px-2 px-10' >
                <GetStart
                    title="Ready to Ride?"
                    subtitle="Start your application today and bring home the thrill."
                    btncategory="Power_Sports" 
                />
            </section>

            <Footer />
        </>
    )
}

export default PowerSports
