import React from 'react'
import '../Utility.css'
import Header from '../Header'
import Footer from '../Footer'
import Herosection2 from '../Herosection2'
import BtnGetStart from '../BtnGetStart'
import GetStart from '../GetStart'
import TestimonialSlider from '../TestimonialSlider'
import FAQAccordion from '../FAQAccordion'

function Home2() {
    const financingFaqs = [
        {
            question: "Do I need a good credit score to qualify?",
            answer: "No. We offer no credit-check financing options. Your eligibility is based on your income and other basic information, not your credit score.",
        },
        {
            question: "Is there a down payment required?",
            answer: "It depends on your credit profile...",
        },
        {
            question: "What phones are available for financing?",
            answer: "No. We offer no credit-check financing options...",
        },
        {
            question: "How long are the payment plans?",
            answer: "It depends on your credit profile...",
        },
    ];

    const financeItems = [
        {
            icon: 'car-line',
            title: 'Automotive',
            description: 'Enhance, protect, and personalize your ride',

        },
        {
            icon: 'smartphone-line',
            title: 'Cell Phone',
            description: 'Sleek, durable phone customization',
        },
        {
            icon: 'device-line',
            title: 'Electronics',
            description: 'Custom wraps & skins for your gadgets',
        },
        {
            icon: 'emotion-happy-line',
            title: 'Dog',
            description: 'Style and safety for your furry friend',
        },
        {
            icon: 'vip-diamond-line',
            title: 'Jewelry',
            description: 'Statement pieces for every occasion',
        },
        {
            icon: 'plant-line',
            title: 'Landscape Equipment',
            description: 'Powerful equipment for landscaping pros',
        },
        {
            icon: 'sun-foggy-line',
            title: 'Livestock Equipment',
            description: 'Rugged gear made for farmers and ranchers',
        },
        {
            icon: 'tools-line',
            title: 'Tool',
            description: 'Built for performance and durability',
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
    return (
        <>
            <Header />
            <Herosection2 title="Simple Financing for Equipment, Products & More"
                subtitle="Helping You Get What You Need — Without the Upfront Cost"
                description="At CTI, we make financing fast, flexible, and stress-free. Whether you're a farmer, landscaper, contractor, or individual — we help you afford the equipment, tools, and personal products you need to grow, work, or live better. No banks. No hassle. Just easy monthly payments that fit your life."
            />
            <section className="py-10 px-2 container text-center">
                <h1 className=" sora-regular mb-2">What We Finance</h1>
                <h6 className="primary-text mb-10 text-sm md:text-base">
                    We offer tailored financing solutions for:
                </h6>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
                    {financeItems.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-lg p-6  relative shadow-sm transition-all duration-300 text-left ${item.active ? 'primary-bg text-white' : 'bg-white text-black'
                                }`}
                        >
                            <div className="text-3xl mb-4">
                                <i className={`ri-${item.icon} ${item.active ? 'text-white' : 'primary-text'}`}></i>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm mb-4">{item.description}</p>
                            <BtnGetStart />
                        </div>
                    ))}
                </div>
            </section>

            <div className="container px-2">
                <FAQAccordion title={"Frequently Asked  Questions"} faqs={financingFaqs} />
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
                    title="Call to Action "
                    subtitle="Pre-Qualify Now – No Impact on Credit Score"
                />
            </section>
            <Footer />
        </>
    )
}

export default Home2
