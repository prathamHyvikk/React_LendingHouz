import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../Utility.css'
import FAQAccordion from '../FAQAccordion'
import TestimonialSlider from '../TestimonialSlider'
import gooddog from '../../../public/assets/Images/Group-1171275242-1.png'
import backgroundimg from '../../../public/assets/Images/image.png'
import HeroSection from '../HeroSection '
import img1 from '../../../public/assets/Images/t-1.png'
import img2 from '../../../public/assets/Images/t-2.png'
import img3 from '../../../public/assets/Images/t-3.png'
import img4 from '../../../public/assets/Images/t-4.png'
import HowItWorks from '../HowItWorks'
import GetStart from '../GetStart'
import useMeta from '../useMeta'


function Tire() {

    useMeta(
        "Tire Financing | Drive Now, Pay Later with Lending Houz",
        "Need new tires? Finance your purchase with simple monthly payments through Lending Houz. Fast, flexible, and affordable."
    )
    const stats = [
        { value: '5,000+', label: 'Tires Financed' },
        { value: '90%', label: 'Approval Rate' },
        { value: '$10M+', label: 'In Financing Provided' },
        { value: '4.9/5', label: 'Customer Satisfaction' },
    ];


    const steps = [
        {
            title: 'No Credit Needed',
            description: 'We approve all credit types',
            icon: img1,
            bgColor: '#E6F0FA',
        },
        {
            title: 'Fast & Easy Process',
            description: '3-minute application, instant decision',
            icon: img2,
            bgColor: '#FEF4E6',
        },
        {
            title: 'Top Tire Brands',
            description: 'Michelin, Bridgestone, Goodyear & more',
            icon: img3,
            bgColor: '#E6F0FA',
        },
        {
            title: 'Flexible Terms',
            description: 'Weekly or monthly payment plans',
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
            <Header />


            <section className='max-md:px-2 px-10'>
                <HeroSection
                    title="Get the Tires You Need Pay Later"
                    subtitle="Flexible tire financing with easy monthly payments. No credit? No problem."
                    imageSrc={gooddog}
                    imgealt="herosection image"
                />

            </section>

            <section className="bg-[#f5f7ff] max-md:px-2 py-10 px-10 rounded-2xl">
                <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">


                    <img
                        src={backgroundimg}
                        alt="Car on mountain road"
                        className="rounded-xl w-full max-h-[500px] object-cover"
                    />

                    <div className="text-center lg:text-left lg:ml-10">
                        <h1 className="  sora-regular mb-6">How It Works</h1>

                        <div className="space-y-5 text-gray-800">
                            <div>
                                <p className="sora-semibold">Step 1: Choose Your Tire</p>
                                <p className='sora-regular primary-text'>Select tires that fit your vehicle and budget.</p>
                            </div>

                            <div>
                                <p className="sora-semibold">Step 2: Apply for Financing</p>
                                <p className='sora-regular primary-text'>Quick online application – no credit score required to check.</p>
                            </div>

                            <div>
                                <p className="sora-semibold">Step 3: Install & Drive</p>
                                <p className='sora-regular primary-text' >Get your tires installed right away, pay later</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-12 max-md:px-2 px-10 text-center">
                <h1 className="sora-regular mb-12">Our Impact</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className={`px-4 ${index < stats.length - 1 ? 'border-r' : ''}`}
                        >
                            <p className="text-2xl sora-bold text-gray-900 mb-2">{item.value}</p>
                            <p className="text-sm  primary-text sora-regular text-gray-600">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>


            <section className='max-md:px-2 px-10'>
                <HowItWorks steps={steps} maintitle=" Why Choose Us?" bgColor="bg-gray-100" />
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
                    title="Don’t Wait Drive Safe Today"
                    subtitle="Get brand new tires with no upfront cost."
                />
            </section>

            <Footer />
        </>
    )
}

export default Tire
