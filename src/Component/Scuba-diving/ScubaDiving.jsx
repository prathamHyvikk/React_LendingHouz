import React from 'react'
import '../Utility.css'
import Header from '../Header'
import Footer from '../Footer'
import HeroSection from '../HeroSection '
import graphics from '@assets/Images/scuba1.png'
import img1 from '@assets/Images/scubasvg1.png'
import img2 from '@assets/Images/scubasvg2.png'
import img3 from '@assets/Images/scubasvg3.png'
import img4 from '@assets/Images/scubasvg4.png'
import laptop from '@assets/Images/scuba2.png'
import videoimg from '@assets/Images/scuba3.png'
import HowItWorks from '../HowItWorks'
import GetStart from '../GetStart'
import TestimonialSlider from '../TestimonialSlider'
import FAQAccordion from '../FAQAccordion'
import useMeta from '../useMeta'
import kioskmodl1 from '@assets/Images/kisokmodl1.svg'
import kioskmdl2 from '@assets/Images/kisokmodl2.svg'
import kioskmdl3 from '@assets/Images/kioskmodl3.svg'


function ScubaDiving() {
    useMeta(
        " Scuba Diving Equipment Financing | Lending Houz",
        " Make your next dive unforgettable. Finance scuba gear and equipment with Lending Houz’s flexible and affordable payment plans."
    )
    const steps = [
        {
            title: '$500M+',
            description: 'In loans approved',
            icon: img1,
            bgColor: '#E6F0FA',
        },
        {
            title: '98%',
            description: 'Customer satisfaction rate',
            icon: img2,
            bgColor: '#FEF4E6',
        },
        {
            title: '15+ Years',
            description: 'Of home financing experience',
            icon: img3,
            bgColor: '#E6F0FA',
        },
        {
            title: '10,000+',
            description: 'Homeowners financed',
            icon: img4,
            bgColor: '#F0E6FA',
        },
    ];
    const steps1 = [
        {
            title: 'Adventure, Anywhere',
            description: 'Adventure gear for both land and sea — all in one place',
            icon: img1,
            bgColor: '#E6F0FA',
        },
        {
            title: 'Curated for Quality',
            description: 'Expertly curated selection of trusted brands',
            icon: img2,
            bgColor: '#FEF4E6',
        },
        {
            title: 'Guidance Can Rely On',
            description: 'Dedicated support to guide your purchase',
            icon: img3,
            bgColor: '#E6F0FA',
        },
        {
            title: 'Quality Gear. Fair Prices.',
            description: 'Competitive prices with no compromise on quality',
            icon: img4,
            bgColor: '#F0E6FA',
        },
    ];

    const ScubaDivingFaq = [
        {
            question: " What scuba diving adventures do you offer?",
            answer: "We offer reef, wreck, night, drift, and advanced dives like Nitrox and cave diving — for all experience levels.",
        },
        {
            question: " Do I need certification to dive?",
            answer: "Beginners don’t need certification. Certified instructors guide you through every step. Advanced dives require a valid certification.",

        },
        {
            question: "What gear do you provide?",
            answer: " We offer high-quality wetsuits, masks, regulators, fins, and more from trusted brands, regularly inspected for safety.",
        },
        {
            question: "Can I buy diving gear online?",
            answer: " Yes! You can shop for beginner and pro-level scuba equipment at fair, competitive prices on our website.",

        },
        {
            question: "Is scuba diving safe for beginners?",
            answer: " Yes. Certified instructors lead all dives with full safety briefings and top-standard gear.",

        },
        {
            question: "Where can I dive with you?",
            answer: " We operate in top destinations like the Florida Keys, Cozumel, Bonaire, Hawaii, and Belize — all handpicked for safety and beauty.",

        },
        {
            question: "What should I bring for my dive?",
            answer: "Just your swimsuit, towel, sunscreen, and excitement — we’ll handle the rest.",

        },
        {
            question: "How can I book a dive?",
            answer: "Click “Get Started” and choose your package, and our team will help you schedule your dive or gear purchase.",

        },
        {
            question: " Do you offer group or family packages?",
            answer: " Yes. We offer custom diving experiences for families, friends, and corporate groups.",

        },
        {
            question: " Why choose LendingHouz Scuba Adventures?",
            answer: "With 15+ years of experience, premium gear, and 98% happy divers, we make every dive safe, fun, and unforgettable.",

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
        "Explore sunken ships and artificial reefs.",
        "Discover the ocean’s nocturnal marine life.",
        "For adventurous divers seeking stronger currents.",
        "Advanced options like Nitrox and cave diving.",
        "FHA & VA-eligible properties",
    ];
    const options2 = [
        "Top-quality brands trusted by divers worldwide",
        "Beginner-friendly sets and professional-grade",
        "Accessories that make every dive smooth and safe",

    ];
    return (
        <>
            <Header btncategory="scuba_diving" />

            <section className='max-md:px-2 pb-10 px-10'>
                <HeroSection
                    title="Dive into Adventure with Us ."
                    subtitle="Step out of the ordinary and embrace the thrill of new experiences! From breathtaking destinations to unforgettable journeys, we bring you the excitement, fun, and memories you’ll cherish forever."
                    imageSrc={graphics}
                    imgealt="herosection image"
                    btncategory="scuba_diving"
                />

            </section>

            <section className=" container max-md:px-2 px-10  pb-10 flex items-center justify-between ">
                <div className="w-full rounded-lg flex flex-col gap-3 lg:flex-row lg:items-center  ">
                    <img
                        src={laptop}
                        alt="Laptop with Headphones"
                        className='lg:w-1/2'

                    />

                    <div className="xl:ml-20 text-left">
                        <h1 className="text-4xl sora-regular text-gray-800">Dive into the Depths</h1>
                        <h6 className='mt-2 sora-regular'>Discover our premium range of scuba diving equipment designed for safety, comfort, and performance. From wetsuits and masks to regulators and fins, we provide everything you need to explore underwater worlds with confidence.</h6>
                        <ul className="mt-4 space-y-2">
                            {options2.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-2 primary-text sora-regular text-base"
                                >
                                    <svg
                                        className="w-5 h-5 min-w-[20px] min-h-[20px] mt-1"
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
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            <section className='max-md:px-2 px-10'>
                <HowItWorks steps={steps1} maintitle="Trusted by Thousands" bgColor="bg-white" />
            </section>

            <section className=" container max-md:px-2 px-10  flex items-center justify-between  ">
                <div className="w-full rounded-lg flex flex-col gap-10 lg:flex-row items-center">

                    <div className="text-left w-full">
                        <h1 className="text-4xl sora-regular text-gray-800">Types of Dives We Offer</h1>
                        <ul className="mt-4 space-y-2">
                            {options.map((option, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-2 primary-text sora-regular text-base"
                                >
                                    <svg
                                        className="w-5 h-5 min-w-[20px] min-h-[20px] mt-1"
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

                    <div className='w-full'>
                        <img
                            src={videoimg}
                            alt="Laptop with Headphones"
                            className=' rounded-2xl max-h-[596px] w-full object-contain '
                        />
                    </div>

                </div>
            </section>


            <section className='max-md:px-2 px-10'>
                <HowItWorks steps={steps} maintitle="Trusted by Thousands" bgColor="bg-white" />
            </section>

            <section className='max-md:px-2 pt-10 px-10' >
                <FAQAccordion title={"Frequently Asked  Questions"} faqs={ScubaDivingFaq} />
            </section>

            <section className='max-md:px-2 px-10' >
                <div className='flex flex-col gap-2 items-center text-center'>
                    <h1 className='sora-regular'>What Our Customers Say</h1>
                    <h6 className='sora-regular primary-text max-w-[630px]'>Discover how nexPay is transforming the way people manage their money with real stories from satisfied users</h6>
                </div>
                <TestimonialSlider testimonials={testimonialsData} />
            </section>

            <section className='max-md:px-2 px-10' >
                <GetStart
                    title="Ready to Take the First Step?"
                    subtitle="Pre-Qualify Now – No Impact on Credit Score."
                    btncategory="scuba_diving"
                />
            </section>

            <Footer />
        </>
    )
}

export default ScubaDiving