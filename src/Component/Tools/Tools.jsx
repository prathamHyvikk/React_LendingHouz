import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Utility.css'
import FAQAccordion from '../FAQAccordion'
import TestimonialSlider from '../TestimonialSlider'
import gooddog from '@assets/Images/pngwing.com-(30)-1.png'
import backgroundimg from '@assets/Images/Group-1171275260.png'
import HeroSection from '../HeroSection '
import img1 from '@assets/Images/tool-1.png'
import img2 from '@assets/Images/tool-2.png'
import img3 from '@assets/Images/tool-3.png'
import img4 from '@assets/Images/tool-4.png'
import HowItWorks from '../HowItWorks'
import GetStart from '../GetStart'
import useMeta from '../useMeta'


function Tools() {

    useMeta(
        " Tool Financing | Buy Power Tools Now, Pay Over Time",
        "Don’t delay your next project. Finance hand tools, power tools and more with Lending Houz’s convenient payment options."
    )
    const items = [
        {
            icon: 'ri-home-gear-line',
            label: 'Contractors & Builders',
        },
        {
            icon: 'ri-tools-line',
            label: 'Auto Mechanics & Body Shops',
        },
        {
            icon: 'ri-plug-line',
            label: 'Plumbers & Electricians',
        },
        {
            icon: 'ri-ruler-2-line',
            label: 'Carpenters & Renovators',
        },
        {
            icon: 'ri-shape-line',
            label: 'DIY Professionals & Side Hustlers',
        },
    ];

    const steps = [
        {
            title: 'Fast, Hassle-Free Approvals',
            description: 'Apply in minutes and get approved quickly—often the same day.',
            icon: img1,
            bgColor: '#E6F0FA',
        },
        {
            title: 'No Credit Impact to Check Eligibility',
            description: 'Explore your options risk-free.',
            icon: img2,
            bgColor: '#FEF4E6',
        },
        {
            title: 'Flexible Monthly Payments',
            description: 'Choose terms that work with your budget and income.',
            icon: img3,
            bgColor: '#E6F0FA',
        },
        {
            title: 'Wide Range of Equipment Covered',
            description: 'From power tools to diagnostics—we finance it all.',
            icon: img4,
            bgColor: '#F0E6FA',
        },
    ];

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
            <Header btncategory="Tool" />


            <section className='max-md:px-2 px-10'>
                <HeroSection
                    title="Power Your Projects with Flexible Tools Financing"
                    subtitle="Get pro tools fast—no upfront cost, low payments, no credit check."
                    imageSrc={gooddog}
                    imgealt="herosection image"
                    btncategory="Tool"
                />

            </section>

            <div className="container max-md:px-2 px-10 py-10 ">
                <h1 className="sora-regular text-center mb-10">Who We Serve</h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 max-w-6xl mx-auto">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-3">
                            <i className={`text-3xl primary-text ${item.icon}`}></i>
                            <p className="text-sm  sora-medium text-gray-800">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <section className=" p-6 md:p-12 py-10 rounded-2xl">
                <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    <div className="text-center lg:text-left ">
                        <h1 className="  sora-regular leading-10 mb-4">Why Finance with Us?</h1>
                        <h6 className='sora-regular primary-text' > Don’t let your growth be limited by your budget</h6>
                        <p className='sora-regular'>Whether you’re a contractor, mechanic, woodworker, or tradesperson, our financing solutions help you invest in the tools you need—right when you need them. Upgrade or expand your toolkit while keeping your cash flow healthy.</p>
                    </div>
                    <img
                        src={backgroundimg}
                        alt="Car on mountain road"
                        className="rounded-xl w-full max-h-[500px] object-cover"
                    />


                </div>
            </section>


            <section className='max-md:px-2 px-10'>
                <HowItWorks steps={steps} maintitle=" Why Choose Us?" bgColor="bg-gray-100" />
            </section>



            <div className="container max-md:px-2 px-10">
                <FAQAccordion title={"Frequently Asked  Questions"} faqs={financingFaqs} />
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
                    title="Get Started Today – No Credit Impact!"
                    subtitle="Upgrade your tools. Boost your productivity. Grow your business."
                    btncategory="Tool"
                />
            </section>

            <Footer />
        </>
    )
}

export default Tools
