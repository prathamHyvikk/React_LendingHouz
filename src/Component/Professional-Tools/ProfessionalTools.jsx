import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Utility.css'
import FAQAccordion from '../FAQAccordion'
import TestimonialSlider from '../TestimonialSlider'
import gooddog from '../../../public/assets/Images/pngwing.com-(31)-10.png' 
import HeroSection from '../HeroSection '
import img1 from '../../../public/assets/Images/Featured-icon-1.png'
import img2 from '../../../public/assets/Images/feature-icon.png'
import img3 from '../../../public/assets/Images/Featured-icon-2.png'
import img4 from '../../../public/assets/Images/Featured-icon-3.png' 
import GetStart from '../GetStart'
import useMeta from '../useMeta'


function ProfessionalTools() {
    useMeta(
        "Professional Tool Financing | Equip Your Trade with Ease",
        "Power your profession with the right tools. Lending Houz provides convenient financing for mechanics, builders, electricians & more."
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

    const ProfessionalFaq = [
        {
            question: "Which trades do you serve?",
            answer: " Construction, HVAC, plumbing, electrical, and auto repair.",
        },
        {
            question: "Can I finance multiple tool sets at once?",
            answer: "Yes—bundle everything under one loan for a single payment.",
        },
        {
            question: "Are warranties required?",
            answer: "We recommend manufacturer warranties but don’t require them.",
        },
        {
            question: "Do you offer zero-interest promos?",
            answer: "Yes—seasonal 0 % APR promotions are available for select brands.",
        },
        {
            question: "How quickly can I upgrade?",
            answer: " Trade in and upgrade after 18 on-time payments",
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

    const services = [
        {
            icon: 'ri-user-settings-line',
            title: 'Engineered for Performance',
            desc: 'Designed for efficiency and endurance, even under extreme conditions.',
        },
        {
            icon: 'ri-battery-charge-line',
            title: 'Next-Gen Power Options',
            desc: 'Cordless freedom with advanced battery technology—work longer with less downtime.',
        },
        {
            icon: 'ri-shield-star-line',
            title: 'Built to Last',
            desc: 'Shock-resistant, weatherproof, and ready for rugged work environments.',
        },
        {
            icon: 'ri-tools-line',
            title: 'Precision Guaranteed',
            desc: 'Tools that match your skill—with tight tolerances and pro-level accuracy.',
        },
    ];

    const stats = [
        { value: '25,000+', label: 'Tools Delivered' },
        { value: '10,000+', label: 'Projects Powered' },
        { value: '7,500+', label: 'Happy Contractors' },
        { value: '48–Hour', label: 'Average Delivery Time' },
    ];

    return (
        <>
            <Header />


            <section className='px-2'>
                <HeroSection
                    title="Built for Pros. Trusted on Every Job Site."
                    subtitle="From power tools to diagnostics—we finance it all."
                    imageSrc={gooddog}
                    imgealt="herosection image"
                />

            </section>

            <div className="py-16 px-2 container text-center bg-white">
                <h1 className=" sora-regular font-bold mb-12">Trusted by Professionals Nationwide</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8   ">
                    {stats.map((item, index) => (
                        <div key={index} className='relative h-fit' >
                            <div className="absolute bottom-0 right-0  size-[133px]  primary-bg rounded-xl  translate-x-2 translate-y-[15%]"></div>
                            <div className="relative  z-10 bg-white rounded-xl shadow-md px-6 py-8">
                                <p className="text-2xl sora-bold primary-text">{item.value}</p>
                                <p className="text-sm  sora-regular text-gray-800 mt-2">{item.label}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

            <div className="py-16 px-6 container">
                <h1 className="sora-regular text-center mb-12">Who We Serve</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {services.map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <i className={`text-2xl primary-text ${item.icon}`}></i>
                            <div>
                                <h6 className="sora-semibold mb-1">{item.title}</h6>
                                <p className="text-sm sora-regular text-gray-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
 

            <div className="container px-2">
                <FAQAccordion title={"Frequently Ask Questions"} faqs={ProfessionalFaq} />
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
                    title="Get Started Today – No Credit Impact!"
                    subtitle="Upgrade your tools. Boost your productivity. Grow your business."
                />
            </section>

            <Footer />
        </>
    )
}

export default ProfessionalTools
