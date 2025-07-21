import React from 'react'
import '../Utility.css'
import Header from '../Header'
import Footer from '../Footer'
import HeroSection from '../HeroSection '
import graphics from '@assets/Images/Graphic.png'
import img1 from '@assets/Images/electroni-Icon-Backpack.png'
import img2 from '@assets/Images/electroni-Icon-Analytic.png'
import img3 from '@assets/Images/electro-Icon-Backpack (1).png'
import img4 from '@assets/Images/elctroni-Icon-Analytic (1).png'
import laptop from '@assets/Images/laptop.png'
import videoimg from '@assets/Images/Video.png'
import HowItWorks from '../HowItWorks'
import GetStart from '../GetStart'
import TestimonialSlider from '../TestimonialSlider'
import FAQAccordion from '../FAQAccordion'
import useMeta from '../useMeta'


function Electronics() {
    useMeta(
        " Electronics Financing | Laptops, TVs, Consoles & More",
        "Shop electronics with ease. Finance your favorite gadgets- laptops, smart TVs, gaming consoles, etc through Lending Houz."
    )
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
    const ElectroFaq = [
        {
            question: "Which items qualify?",
            answer: "Laptops, desktops, gaming consoles, premium TVs, and pro-audio gear over $500.",
        },
        {
            question: "How fast is approval?",
            answer: " Most applicants receive a decision within minutes.",
        },
        {
            question: "Are warranties included?",
            answer: "Manufacturer warranties apply; extended protection is optional at checkout.",
        },
        {
            question: "Can I bundle multiple devices?",
            answer: "Yes—combine eligible items into one loan and one monthly payment.",
        },
        {
            question: "What term lengths are available?",
            answer: " Choose 6-, 12-, or 24-month plans with fixed interest.",
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
        "$0 Down Available",
        "Instant Pre–Approval with No Hard Credit Check",
        "Payment Plans from 3 to 36 Months",
        "Early Payoff Without Penalties",
        "Transparent Terms & Fixed Monthly Payments",
    ];
    const options2 = [
        "Smartphones (iPhone, Samsung & more)",
        "Laptops, PCs & Tablets",
        "TVs & Home Theater Systems",
        "Gaming Consoles & Accessories",
        "Smart Speakers, Wearables, and More",
    ];
    return (
        <>
            <Header btncategory="electronics" />

            {/* section 1 start  */}

            <section className='max-md:px-2 pb-10 px-10'>
                <HeroSection
                    title="Upgrade Your Tech Now Pay Later with Electronics Financing"
                    subtitle="Get the Electronics You Want Today. Pay Over Time. No Credit? No Problem."
                    imageSrc={graphics}
                    imgealt="herosection image"
                    btncategory="electronics"
                />

            </section>

            {/* section 1 end  */}

            {/* section 2 start  */}

            <section className='max-md:px-2 px-10'>
                <HowItWorks steps={steps} maintitle="How It Works" bgColor="bg-gray-100" />
            </section>

            {/* section 2 end  */}

            {/* section 3 start  */}

            <section className=" container max-md:px-2 px-10  pb-10 flex items-center justify-between ">
                <div className="w-full rounded-lg flex flex-col gap-3 lg:flex-row lg:items-center  ">
                    <img
                        src={laptop}
                        alt="Laptop with Headphones"
                        className='lg:w-1/2'

                    />

                    <div className="xl:ml-20 text-left">
                        <h1 className="text-4xl sora-regular text-gray-800">What You Can Finance</h1>
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

            <section className=" container max-md:px-2 px-10  flex items-center justify-between  ">
                <div className="w-full rounded-lg flex flex-col gap-10 lg:flex-row items-center">

                    <div className="text-left w-full">
                        <h1 className="text-4xl sora-regular text-gray-800">Flexible Financing Options</h1>
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
                            className=' rounded-2xl w-full object-cover '
                        />
                    </div>

                </div>
            </section>

            {/* section 3 end   */}


            {/* section 4 start  */}

            <section className='max-md:px-2 pt-10 px-10' >
                <FAQAccordion title={"Frequently Ask Questions"} faqs={ElectroFaq} />
            </section>

            {/* section 4 end  */}

            {/* section 5 start */}

            <section className='max-md:px-2 px-10' >
                <div className='flex flex-col gap-2 items-center text-center'>
                    <h1 className='sora-regular'>What Our Customers Say</h1>
                    <h6 className='sora-regular primary-text max-w-[630px]'>Discover how nexPay is transforming the way people manage their money with real stories from satisfied users</h6>
                </div>
                <TestimonialSlider testimonials={testimonialsData} />
            </section>

            {/* section 5 end */}

            {/* section 6 start  */}

            <section className='max-md:px-2 px-10' >
                <GetStart
                    title="Ready to Get Started?"
                    subtitle="Apply now and bring home your pup as soon as today."
                    btncategory="electronics"
                />
            </section>

            {/* section 6 end */}


            <Footer />
        </>
    )
}

export default Electronics