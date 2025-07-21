import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Utility.css'
import BtnGetStart from '../BtnGetStart'
import FAQAccordion from '../FAQAccordion'
import TestimonialSlider from '../TestimonialSlider'
import ringimg from '@assets/Images/thetho.png'
import section3img from '@assets/Images/Group1171275218.png'
import HeroSection from '../HeroSection '
import img1 from '@assets/Images/me-Icon.png'
import img2 from '@assets/Images/me-Icon-1.png'
import img3 from '@assets/Images/me-Icon-2.png'
import img4 from '@assets/Images/me-Icon-3.png'
import HowItWorks from '../HowItWorks'
import GetStart from '../GetStart'
import useMeta from '../useMeta'




function MedicalEquipment() {
    useMeta(
        "Medical Equipment Financing | Support Healthcare Needs Today",
        "Finance essential medical devices and equipment with ease. Lending Houz offers practical solutions for patients and professionals"
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
    const MedicalFaq = [
        {
            question: "Who can apply—clinics or individuals?",
            answer: " Both. We finance healthcare practices and home-care users alike.",
        },
        {
            question: "What documentation is needed?",
            answer: "A valid prescription or proof-of-use letter from a licensed provider.",
        },
        {
            question: "Do you offer deferred payments until insurance reimbursement?",
            answer: "Yes—ask about our 90-day deferral plan.",
        },
        {
            question: "Can I finance refurbished equipment?",
            answer: " Yes, as long as it meets current safety standards and has a warranty.",
        },
        {
            question: "How long are the terms?",
            answer: " Terms range from 12 to 60 months, depending on equipment value.",
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
        "Diagnostic & Imaging Equipment (MRI, X-ray, Ultrasound)",
        "Surgical Tools & Operating Room Equipment",
        "Dental & Orthodontic Equipment",
        "Patient Monitoring Systems",
        "AnniverLaboratory Instrumentssary & Gifting Collections",
    ];
    return (
        <>
            <Header />


            <section className='max-md:px-2 px-10'>
                <HeroSection
                    title="Upgrade Your Care with Medical Equipment Financing"
                    subtitle="Affordable, Flexible Financing for the Equipment You Need"
                    imageSrc={ringimg}
                    imgealt="herosection image"
                />

            </section>

            <div className=" container py-10  max-md:px-2 px-10 text-center">
                <h1 className="sora-regular leading-10 max-w-[1072px] mx-auto max-md:leading-10 text-center text-gray-900 mb-8">Trusted by Healthcare Professionals Nationwide</h1>
                <div className="flex flex-col md:flex-row justify-around md:items-start text-center  mx-auto space-y-6 md:space-y-0 md:space-x-6">
                    <div className="flex flex-col gap-2 items-center">
                        <h2 className='primary-text sora-medium text-[48px]' >+1200</h2>
                        <p className="text-2xl font-semibold leading-7 text-gray-900">Healthcare Providers Financed</p>
                        <p className="  sora-regular  text-gray-900">Partnered with 1200+ trusted doctors for expert care.</p>

                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <h2 className='primary-text sora-medium text-[48px]' >$50+</h2>
                        <p className="text-2xl font-semibold leading-7 text-gray-900">Million in Equipment Financed</p>
                        <p className="  sora-regular  text-gray-900">Access to essential tools without straining budgets.</p>

                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <h2 className='primary-text sora-medium text-[48px]' >98%</h2>
                        <p className="text-2xl font-semibold leading-7 text-gray-900">Approval Rate</p>
                        <p className="  sora-regular  text-gray-900">We work hard to say "yes" — even when others don’t.</p>

                    </div>

                </div>
            </div>

            <section className=" container pb-10 max-md:px-2 px-10 flex items-center justify-between p-4">
                <div className="w-full rounded-lg flex flex-col gap-10 lg:flex-row items-center">
                    <div className="flex flex-col lg:ml-10 max-md:items-center">
                        <h1 className="text-4xl sora-regular max-md:text-center text-gray-800">Finance a Wide Range of Medical Equipment</h1>
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


            <section className='max-md:px-2 px-10'>
                <HowItWorks steps={steps} maintitle="Why Finance with Us" bgColor="bg-gray-100" />
            </section>
            <div className="container max-md:px-2 px-10">
                <FAQAccordion title={"Frequently Ask Questions"} faqs={MedicalFaq} />
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
                />
            </section>

            <Footer />
        </>
    )
}

export default MedicalEquipment