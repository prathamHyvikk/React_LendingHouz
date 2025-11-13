import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Utility.css'
import FAQAccordion from '../FAQAccordion'
import TestimonialSlider from '../TestimonialSlider'
import ringimg from '@assets/Images/pngwing.com-(36)-11.png'
import HeroSection from '../HeroSection '
import recreationimg from '@assets/Images/Group-1171275273.png'
import quipmentimg from '@assets/Images/Frame-1707481172.png'
import quipmentimg1 from '@assets/Images/Frame-1707481172-(1).png'
import quipmentimg2 from '@assets/Images/Frame-1707481172-(2).png'
import quipmentimg3 from '@assets/Images/Frame-1707481172-(3).png'
import quipmentimg4 from '@assets/Images/Frame-1707481172-(4).png'
import quipmentimg5 from '@assets/Images/Frame-1707481172-(5).png'
import GetStart from '../GetStart'
import useMeta from '../useMeta'
import axios from 'axios'


function Recreation() {

    useMeta(
        "Recreation Product Financing | Boats, RVs, and More",
        "Finance your lifestyle. Lending Houz helps you purchase recreational gear, from boats to camping equipment with ease."
    )
    const [recreationFaqs, setRecreationFaqs] = useState([])

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const { data } = await axios.get('/data/recreationfaq.json')
                setRecreationFaqs(data)
            } catch (error) {
                console.error('Failed to load recreation FAQs:', error)
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
    const options = [
        "$0 Down Available",
        "Instant Pre–Approval with No Hard Credit Check",
        "Payment Plans from 3 to 36 Months",
        "Early Payoff Without Penalties",
        "Transparent Terms & Fixed Monthly Payments",
    ];

    const equipmentData = [
        {
            title: "Guitars & Amplifiers",
            image: quipmentimg,
        },
        {
            title: "Microphones & Audio Interfaces",
            image: quipmentimg1,
        },
        {
            title: "Drums & Percussion",
            image: quipmentimg2,
        },
        {
            title: "Mixers, Monitors & Recording Software",
            image: quipmentimg3,
        },
        {
            title: "DJ Controllers & Lighting Equipment",
            image: quipmentimg4,
        },
        {
            title: "PA Systems and Live Sound Gear",
            image: quipmentimg5,
        },
    ];
    return (
        <>
            <Header btncategory="Recreation" />


            <section className='max-md:px-2 px-10'>
                <HeroSection
                    title="Power Your Sound with Flexible Financing"
                    subtitle="Turn Your Passion into Performance"
                    imageSrc={ringimg}
                    imgealt="guitar image"
                    btncategory="Recreation"
                />

            </section>


            <section className="container pt-10 max-md:px-2 px-10">
                <div className='max-w-[805px] text-center mx-auto mb-10'>
                    <h1 className="text-3xl sora-regular text-center ">What We Offer</h1>
                    <h6 className='sora-regular primary-text' >Whether it’s adrenaline-pumping adventures or peaceful weekend escapes, we help you finance the tools of recreation:</h6>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2  justify-center lg:grid-cols-3 gap-10">
                    {equipmentData.map((item, index) => (
                        <div
                            key={index}
                            className=" justify-center flex flex-col rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-lg mb-4 mx-auto  w-64   h-40 object-cover"
                            />
                            <h3 className="text-md font-medium">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <section className="   max-md:px-2 px-10 py-10 rounded-2xl">
                <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="text-center lg:text-left lg:ml-10">
                        <h1 className="  sora-regular mb-6">Why Finance with Us?</h1>

                        <div className="space-y-5 text-gray-800">
                            <div>
                                <p className="sora-semibold">Fast, Hassle-Free Approvals</p>
                                <p className='sora-regular primary-text'>Apply online and get approved in minutes.</p>
                            </div>

                            <div>
                                <p className="sora-semibold">Flexible Monthly Payments</p>
                                <p className='sora-regular primary-text'>Pick a plan that fits your lifestyle and budget.</p>
                            </div>

                            <div>
                                <p className="sora-semibold">No Credit Impact to Check Eligibility</p>
                                <p className='sora-regular primary-text' >Explore your options risk-free.</p>
                            </div>
                            <div>
                                <p className="sora-semibold"> Low Rates, No Hidden Fees</p>
                                <p className='sora-regular primary-text' >Transparent terms and affordable payments.</p>
                            </div>
                        </div>
                    </div>
                    <img
                        src={recreationimg}
                        alt="Car on mountain road"
                        className="rounded-xl  max-w-[637px] w-full object-contain max-h-[637px] "
                    />
                </div>
            </section>

            <div className="container max-md:px-2 px-10">
                <FAQAccordion title={"Frequently Asked  Questions"} faqs={recreationFaqs} />
            </div>


            <div className="container max-md:px-2 px-10">
                <div className='flex flex-col gap-2 items-center text-center'>
                    <h1 className='sora-regular'>What Our Customers Say</h1>
                    <h6 className='sora-regular primary-text max-w-[630px]'>Discover how nexPay is transforming the way people manage their money with real stories from satisfied users</h6>
                </div>
                <TestimonialSlider testimonials={testimonialsData} />
            </div>


            <section className='max-md:px-2 px-10' >
                <GetStart
                    title="Call to Action"
                    subtitle="Start your next adventure today—financed your way."
                    btncategory="Recreation"
                />
            </section>

            <Footer />
        </>
    )
}

export default Recreation
