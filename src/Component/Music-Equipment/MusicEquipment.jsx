import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Utility.css'
import FAQAccordion from '../FAQAccordion'
import TestimonialSlider from '../TestimonialSlider'
import ringimg from '../../../public/assets/Images/Group-1171275223.png'
import section3img from '../../../public/assets/Images/Group-1171275225.png'
import HeroSection from '../HeroSection '
import quipmentimg from '../../../public/assets/Images/Frame-1707481172.png'
import quipmentimg1 from '../../../public/assets/Images/Frame-1707481172-(1).png'
import quipmentimg2 from '../../../public/assets/Images/Frame-1707481172-(2).png'
import quipmentimg3 from '../../../public/assets/Images/Frame-1707481172-(3).png'
import quipmentimg4 from '../../../public/assets/Images/Frame-1707481172-(4).png'
import quipmentimg5 from '../../../public/assets/Images/Frame-1707481172-(5).png'
import GetStart from '../GetStart'
import useMeta from '../useMeta'



function MusicEquipment() {

    useMeta(
        "Music Equipment Financing | Buy Guitars, DJ Gear & More",
        "Whether you're a musician or hobbyist, Lending Houz helps you finance musical instruments and gear with simple payment plans."
    )
    const musicFaq = [
        {
            question: "What gear qualifies?",
            answer: "Guitars, keyboards, pro-audio mixers, studio monitors, and DJ setups.",
        },
        {
            question: "Is there a minimum purchase?",
            answer: "Yes—equipment must total at least $300 before tax.",
        },
        {
            question: "Do you finance vintage instruments?",
            answer: "We do, provided you supply a recent appraisal",
        },
        {
            question: "Can I finance multiple items?",
            answer: "Yes—bundle several pieces into one payment plan.",
        },
        {
            question: "Are accessories included?",
            answer: "Cases, cables, and stands can be added if financed with the main item.",
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
        "Own top-tier instruments without upfront costs",
        "Access the latest sound equipment to stay competitive",
        "Spread payments  over time with low monthly plans",
        "Preserve your cash flow while growing your craft or business",
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
            <Header />


            <section className='max-md:px-2 px-10'>
                <HeroSection
                    title="Power Your Sound with Flexible Financing"
                    subtitle="Turn Your Passion into Performance"
                    imageSrc={ringimg}
                    imgealt="guitar image"
                />

            </section>

            <section className=" container py-10  flex items-center justify-between p-4">
                <div className="w-full rounded-lg flex flex-col gap-10 lg:flex-row items-center">
                    <img
                        src={section3img}
                        alt="Laptop with Headphones"
                        className='lg:w-1/2'
                    />
                    <div className="flex flex-col gap-4 lg:ml-10">
                        <h1 className="text-4xl sora-regular text-gray-800">Finance the Gear to Create the Music You Love</h1>
                        <h6 className='sora-regular primary-text ' >From guitars and keyboards to studio mixers and DJ equipment, we offer fast, affordable financing options so you can:</h6>
                        <ul className="mt-4  ">
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
                </div>
            </section>

            <section className="container max-md:px-2 px-10">
                <h1 className="text-3xl sora-regular text-center mb-10">Equipment We Finance</h1>
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


            <div className="container max-md:px-2 pt-10 px-10">
                <FAQAccordion title={"Frequently Ask Questions"} faqs={musicFaq} />
            </div>


            <div className="container max-md:px-2 px-10">
                <div className='flex flex-col gap-2 items-center text-center'>
                    <h1 className='sora-regular'>What Our Customers Say</h1>
                    <h6 className='sora-regular max-md:leading-7 primary-text max-w-[630px]'>Discover how nexPay is transforming the way people manage their money with real stories from satisfied users</h6>
                </div>
                <TestimonialSlider testimonials={testimonialsData} />
            </div>


            <section className='max-md:px-2 px-10' >
                <GetStart
                    title="Your New Best Friend Is Waiting"
                    subtitle="Start your financing application today and bring your new companion home."
                />
            </section>

            <Footer />
        </>
    )
}

export default MusicEquipment