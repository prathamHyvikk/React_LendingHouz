import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Utility.css'
import BtnGetStart from '../BtnGetStart'
import FAQAccordion from '../FAQAccordion'
import TestimonialSlider from '../TestimonialSlider'
import ringimg from '@assets/Images/image56.png' 
import section3img from '@assets/Images/Grid.png'
import HeroSection from '../HeroSection '
import img1 from '@assets/Images/jw-arcticons_chooser.png'
import img2 from '@assets/Images/jw-fluent_payment-16-regular.png'
import img3 from '@assets/Images/jw-arcticons_asus-icon-pack-applyer.png'
import img4 from '@assets/Images/jw-cil_happy.png'
import HowItWorks from '../HowItWorks'
import GetStart from '../GetStart'
import useMeta from '../useMeta'


function Jewellery() {
    useMeta(
        "Jewelry Financing | Buy Gold, Diamonds & More with Ease",
        "Add sparkle to your life without the financial stress. Finance your next jewelry purchase with Lending Houz’s flexible payment plans."
    )

    const steps = [
        {
            title: 'Choose Your Jewellery',
            description: 'Select your favorite pieces from our collection — no minimum purchase required.',
            icon: img1,
            bgColor: '#E6F0FA',
        },
        {
            title: 'Select a Payment Plan',
            description: 'Spread your payments over 3, 6, or 12 months with 0% interest* or low monthly installments.',
            icon: img2,
            bgColor: '#FEF4E6',
        },
        {
            title: 'Apply Instantly',
            description: 'Fast, secure approval with no hidden fees and no credit score impact.',
            icon: img3,
            bgColor: '#E6F0FA',
        },
        {
            title: 'Enjoy Now, Pay Later',
            description: 'Take your jewellery home today and pay at your pace.',
            icon: img4,
            bgColor: '#F0E6FA',
        },
    ];
    const jwelleryFaq = [
        {
            question: "Do you finance both new and estate pieces?",
            answer: " Yes, provided each piece is appraised and insured.",
        },
        {
            question: "Is appraisal documentation required?",
            answer: " Upload a certified appraisal dated within the last 12 months.",
        },
        {
            question: "Can I insure through you?",
            answer: "We partner with top jewelry insurers—add coverage during checkout.",
        },
        {
            question: "What is the minimum purchase amount?",
            answer: "Jewelry must retail for at least $750 to qualify for financing.",
        },
        {
            question: "Can I upgrade the piece later?",
            answer: " Yes—trade in and finance an upgrade once you pay 50 % of the balance.",
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
        "Engagement & Wedding Rings",
        "Gold & Diamond Sets",
        "Luxury Watches",
        "Custom-Made Jewellery",
        "Anniversary & Gifting Collections",
    ];
    return (
        <>
            <Header btncategory="Jewelry"  />


            <section className='max-md:px-2 px-10'>
                <HeroSection
                    title="Make Your Dream Jewellery Affordable"
                    subtitle="Flexible Financing Plans for Every Budget"
                    imageSrc={ringimg}
                    imgealt="herosection image"
                    btncategory="Jewelry"
                />

            </section>

            <div className=" container py-12 px-4 text-center">
                <h1 className="sora-regular text-gray-900 mb-8">Why Finance with CTI Financing</h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-between items-center text-center  mx-auto   ">
                    <div className="flex flex-col w-full items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                            <i className="ri-discount-percent-line primary-text text-xl"></i>
                        </div>
                        <p className="text-2xl sora-regular text-gray-900">0% Interest Plans Available</p>

                    </div>
                    <div className="flex flex-col w-full items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                            <i className="ri-star-s-line primary-text text-xl"></i>
                        </div>
                        <p className="text-2xl sora-regular text-gray-900">No Hidden Fees or Surprises  </p>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                            <i className="ri-bank-card-line primary-text text-xl"></i>
                        </div>
                        <p className="text-2xl sora-regular text-gray-900">Quick & Easy Approval</p>

                    </div>
                    <div className="flex flex-col w-full items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                            <i className="ri-calendar-line primary-text text-xl"></i>
                        </div>
                        <p className="text-2xl sora-regular text-gray-900">Flexible Terms to Fit Your Budget</p>

                    </div>
                </div>
            </div>

            <section className=" container py-10  flex items-center justify-between p-4">
                <div className="w-full rounded-lg flex lg:justify-between flex-col gap-10 lg:flex-row items-center">
                    <div className="flex flex-col  gap-2">
                        <h1 className="text-4xl sora-regular text-gray-800">Popular Eligible Items</h1>
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
                    <img
                        src={section3img}
                        alt="Laptop with Headphones"
                    />
                </div>
            </section>


            <section className='max-md:px-2   px-10'>
                <HowItWorks steps={steps} maintitle="How Jewellery Financing Works" bgColor="bg-gray-100" />
            </section>
            <div className="container max-md:px-2 py-10 px-10">
                <FAQAccordion title={"Frequently Ask Questions"} faqs={jwelleryFaq} />
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
                    title="Take the First Step Toward Elegance"
                    subtitle="Pre-Qualify Now – No Impact on Credit Score"
                    btncategory="Jewelry"
                />
            </section>

            <Footer />
        </>
    )
}

export default Jewellery