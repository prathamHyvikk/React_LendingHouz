import React from 'react'
import '../Utility.css'
import Header from '../Header'
import Footer from '../Footer'
import HeroSection from '../HeroSection '
import graphics from '@assets/Images/ebike1.png'
import img1 from '@assets/Images/electroni-Icon-Backpack.png'
import img2 from '@assets/Images/electroni-Icon-Analytic.png'
import img3 from '@assets/Images/electro-Icon-Backpack (1).png'
import img4 from '@assets/Images/elctroni-Icon-Analytic (1).png'
import laptop from '@assets/Images/ebike2.png'
import videoimg from '@assets/Images/ebike3.png'
import HowItWorks from '../HowItWorks'
import GetStart from '../GetStart'
import TestimonialSlider from '../TestimonialSlider'
import FAQAccordion from '../FAQAccordion'
import useMeta from '../useMeta'
import kioskmodl1 from '@assets/Images/kisokmodl1.svg'
import kioskmdl2 from '@assets/Images/kisokmodl2.svg'
import kioskmdl3 from '@assets/Images/kioskmodl3.svg'


function Ebike() {
    useMeta(
        " E-Bike Financing | Ride Electric with Lending Houz",
        "Go green and ride smarter. Finance your electric bike today with Lending Houz and enjoy easy monthly payments and quick approvals."
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

    const EbikeFaq = [
        {
            question: "What makes your e-bikes stand out from others?",
            answer: "  Our e-bikes combine elegant design, high-torque motors, and long-range batteries, delivering style and performance for every ride.",

        },
        {
            question: "How far can I travel on a single charge?",
            answer: "Our models offer 40–60 miles per charge, depending on terrain, speed, and assist level — perfect for daily commutes or weekend adventures",

        },
        {
            question: "Are these bikes good for both city and off-road use?",
            answer: " Yes! The City Commuter is ideal for smooth urban rides, while the Trail Blazer and Adventure X easily handle hills, gravel, and trails.",

        },
        {
            question: "How powerful are the motors?",
            answer: " Our high-torque motors provide instant acceleration and hill-climbing capability — offering smooth control even on steep terrain.",

        },
        {
            question: " How long does charging take, and what’s the battery life?",
            answer: " Charging takes about 4–6 hours. Each battery is built for 500+ full charge cycles, ensuring long-term reliability.",

        },
        {
            question: "Are your e-bikes environmentally friendly?",
            answer: " Absolutely. Our electric bikes produce zero emissions, helping you reduce your carbon footprint while enjoying a cleaner, greener ride.",
        },
        {
            question: "Do I need a license, insurance, or registration?",
            answer: " In most regions, standard e-bikes do not require a license or insurance. Just ride responsibly and follow local road rules.",
        },
        {
            question: " What kind of maintenance do e-bikes require?",
            answer: "  Minimal upkeep — just keep tires inflated, the chain clean, and battery charged. Our models are designed for easy care and long-term durability.",
        },
        {
            question: "Which model is right for me?",
            points: [
                "City Commuter – daily travel and smooth roads.",
                "Trail Blazer – off-road and adventure riding.",
                "Adventure X – long-distance, all-terrain performance.Need help? Our experts can match you with the perfect model.",

            ],
        },
        {
            question: "What kind of maintenance or care do e-bikes need?",
            answer: " Our e-bikes require minimal maintenance — just keep the tires inflated, the chain clean, and charge the battery regularly. We also provide service tips and support to keep your bike performing like new.",
        }

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
        "Optimized for smooth, agile rides through city streets.",
        "High-torque power and rugged suspension for trails and climbs",
        "Extended-range battery for long-distance exploration.",
        "Lightweight, high-performance build for speed and stunts.",
        "Conquer sand, snow, mud, and rocky paths with ease.",
    ];
    const options2 = [
        "High-Torque Motor Tackle steep hills and rough trails with instant power",
        "Extended Range Go up to 50+ miles on a single charge.",
        "Durable Frame Built tough for off-road adventures and long-term reliability.",
        "Precision Control Smooth throttle response plus regenerative braking.",
        "Zero emissions, lower your carbon footprint.",
    ];
    return (
        <>
            <Header btncategory="e_bike" />

            <section className='max-md:px-2 pb-10 px-10'>
                <HeroSection
                    title="Ride in Style. Go Farther, Go Greener."
                    subtitle="Experience the thrill of our e_bikes – powerful, sustainable, and designed for every journey."
                    imageSrc={graphics}
                    imgealt="herosection image"
                    btncategory="e_bike"
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
                        <h1 className="text-4xl sora-regular text-gray-800">Why Choose Us</h1>
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

                <div className=" mx-auto px-2">
                    <h1 className="text-4xl sora-regular text-center text-gray-900 mb-10">
                        Our Models
                    </h1>

                    <div className="flex justify-center py-10 gap-6 max-lg:flex-wrap ">

                        <div className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col items-center min-w-[250px] max-w-[280px]">
                            <div className="w-12 h-12 mb-4 flex items-center justify-center">
                                <img
                                    src={kioskmodl1}
                                    alt="City Commuter"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-lg sora-semibold text-gray-900 mb-1">
                                Trail Blazer
                            </h3>
                            <p className="text-gray-600 sora-regular text-sm">
                                High-torque, rugged design for conquering off-road terrain.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col items-center min-w-[250px] max-w-[280px]">
                            <div className="w-12 h-12 mb-4 flex items-center justify-center">
                                <img
                                    src={kioskmdl2}
                                    alt="Trail Blazer"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-lg sora-semibold text-gray-900 mb-1">
                                Urban Raider
                            </h3>
                            <p className="text-gray-600 sora-regular text-sm">
                                Street-ready setup with smooth handling for city rides.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col items-center min-w-[250px] max-w-[280px]">
                            <div className="w-12 h-12 mb-4 flex items-center justify-center">
                                <img
                                    src={kioskmdl3}
                                    alt="Explorer Pro"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-lg sora-semibold text-gray-900 mb-1">
                                Adventure X
                            </h3>
                            <p className="text-gray-600 sora-regular text-sm">
                                Extended-range battery and upgraded suspension for long trails.
                            </p>
                        </div>


                    </div>
                </div>

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
                <FAQAccordion title={"Frequently Asked  Questions"} faqs={EbikeFaq} />
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
                    btncategory="Ebike"
                />
            </section>

            <Footer />
        </>
    )
}

export default Ebike