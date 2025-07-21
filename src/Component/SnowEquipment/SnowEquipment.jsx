import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Utility.css'
import BtnGetStart from '../BtnGetStart'
import FAQAccordion from '../FAQAccordion'
import TestimonialSlider from '../TestimonialSlider'
import ringimg from '@assets/Images/snow-img.png'
import section3img from '@assets/Images/newimg.png'
import HeroSection from '../HeroSection '
import img1 from '@assets/Images/se-1.png'
import img2 from '@assets/Images/se-2.png'
import img3 from '@assets/Images/se-3.png'
import img4 from '@assets/Images/se-4.png'
import HowItWorks from '../HowItWorks'
import GetStart from '../GetStart'
import useMeta from '../useMeta'


function SnowEquipment() {
    useMeta(
        "Snow Equipment Financing | Stay Ready for Winter",
        "Don’t wait for snow to hit. Finance snowblowers, plows and other winter tools with Lending Houz."
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
    const options = [
        "$0 Down Available",
        "Instant Pre–Approval with No Hard Credit Check",
        "Payment Plans from 3 to 36 Months",
        "Early Payoff Without Penalties",
        "Transparent Terms & Fixed Monthly Payments",
    ];

    const items = [
        {
            icon: 'snowflake-line',
            title: 'Snow Plows & Blades',
        },
        {
            icon: 'windy-line',
            title: 'Snow Blowers',
        },
        {
            icon: 'bus-line',
            title: 'Snow Removal Trucks & Attachments',
        },
    ];

    return (
        <>
            <Header />


            <section className='max-md:px-2  pb-10 px-10'>
                <HeroSection
                    title="Power Through Winter with Snow Equipment Financing"
                    subtitle="Get the Tools You Need—When You Need Them Most"
                    imageSrc={ringimg}
                    imgealt="herosection image"
                />

            </section>

            <div className=" container py-10 px-4 text-center">
                <h1 className="sora-regular max-w-[1072px] max-lg:leading-10 mx-auto text-center text-gray-900 mb-8">Equipment We Finance</h1>
                <div className=" grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-between gap-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 p-4 bg-white shadow-sm rounded-lg w-full sm:w-auto sm:min-w-[280px] transition hover:shadow-md border"
                        >
                            <div className="w-12 h-12 rounded-full primary-bg flex items-center justify-center text-white text-xl">
                                <i className={`ri-${item.icon}`}></i>
                            </div>
                            <p className="text-sm font-semibold max-sm:text-start text-black">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <section className=" container py-12 gap-5  flex flex-col  items-center  justify-between p-4">
                <h1 className='sora-regular leading-10 text-center mb-4 max-md:leading-10'>Conquer Winter with Affordable Snow Equipment Financing</h1>
                <div className="w-full rounded-lg flex flex-col gap-10 lg:flex-row items-center">
                    <div className="flex flex-col lg:ml-10">
                        <h6 style={{ wordSpacing: "0.5rem" }} className="text-4xl  sora-regular mb-4 text-gray-800">
                            Don’t let upfront costs freeze your progress. Harsh winters demand reliable equipment—and we make it easier than ever to get it. With our specialized snow equipment financing, you can invest in the plows, snow blowers, salt spreaders, and heavy-duty trucks you need without a large upfront payment.
                            Whether you're preparing for a busy season or replacing outdated gear, our financing solutions are designed to keep your operations running smoothly and your cash flow intact. From solo contractors to large snow removal companies, we serve businesses of all sizes with fast approvals, customizable payment plans, and no impact on your credit just to explore options.</h6>
                        <BtnGetStart />
                    </div>
                    <img
                        className='lg:w-1/2'
                        src={section3img}
                        alt="Laptop with Headphones "
                    />
                </div>
            </section>

            <section className='max-md:px-2 px-10'>
                <HowItWorks steps={steps} maintitle="Why Finance with Us" bgColor="bg-gray-100" />
            </section>
            <div className="container max-md:px-2 px-10">
                <FAQAccordion title={"Frequently Ask Questions"} faqs={financingFaqs} />
            </div>


            <div className="container max-md:px-2 px-10">
                <div className='flex flex-col gap-2 items-center text-center'>
                    <h1 className='sora-regular leading-10'>What Our Customers Say</h1>
                    <h6 className='sora-regular primary-text max-w-[630px]'>Discover how nexPay is transforming the way people manage their money with real stories from satisfied users</h6>
                </div>
                <TestimonialSlider testimonials={testimonialsData} />
            </div>


            <section className='max-md:px-2 px-10' >
                <GetStart
                    title="Take the First Step Toward Elegance"
                    subtitle="Pre-Qualify Now – No Impact on Credit Score"
                />
            </section>

            <Footer />
        </>
    )
}

export default SnowEquipment
