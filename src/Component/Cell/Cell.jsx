import React from 'react'
import '../Utility.css'
import Header from '../Header'
import Footer from '../Footer'
import HeroSection from '../HeroSection '
import heroimg from '@assets/Images/Hero.png'
import finance from '@assets/Images/fianance.png'
import cards from '@assets/Images/cards.png'
import BtnGetStart from '../BtnGetStart'
import FAQAccordion from '../FAQAccordion'
import TestimonialSlider from '../TestimonialSlider'
import GetStart from '../GetStart'
import useMeta from '../useMeta'


function Cell() {

    useMeta(
        " Cell Phone Financing | Buy the Latest Phones Now, Pay Later",
        "Get the smartphone you want without the upfront cost. Lending Houz offers simple financing options for all major phone brands."
    )

    const cellFAq = [
        {
            question: "Which brands can I finance?",
            answer: "Apple, Samsung, Google, and most major unlocked Android models qualify.",
        },
        {
            question: "Is a down payment required?",
            answer: "INot for approved applicants; you can finance 100 % of the purchase price.",
        },
        {
            question: "Do you offer early upgrades?",
            answer: " Yes—after 12 on-time payments, you can trade in and upgrade.",
        },
        {
            question: "What happens if I lose the phone?",
            answer: " Add device-protection coverage at checkout, or you remain responsible for the balance.",
        },
        {
            question: "How long are the payment plans?",
            answer: " Select 6-, 12-, or 18-month plans with fixed monthly payments.",
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
            <Header btncategory="Cell_Phone" />

            {/* section 1 start  */}

            <section className='max-md:px-2 px-10'>
                <HeroSection reverse
                    title="Get the Phone You Want Pay Over Time"
                    subtitle="No credit check. Low monthly payments. Instant approval decision."
                    imageSrc={heroimg}
                    imgealt="herosection image"
                    btncategory="Cell_Phone"
                />

            </section>

            {/* section 1 end  */}

            {/* section 2 start  */}

            <section className="container md:py-10 max-md:hidden max-md:px-2 px-10 py-2">
                <div className="  flex flex-col items-start md:justify-between lg:flex-row lg:items-center gap-12">

                    <div className="flex flex-col">
                        <h1 className=" sora-regular mb-4">How It Works</h1>
                        <h6 className="primary-text sora-regular mb-6">Simple, Fast, and Hassle-Free</h6>
                        <BtnGetStart category='Cell_Phone' />
                    </div>

                    <div className="flex gap-10 lg:w-1/2 w-full max-md:flex-col ">

                        <img src={cards} alt="" className='mx-auto' />
                        <div className='flex flex-col gap-5'>
                            <div>
                                <h4 className="text-lg font-semibold">1. Choose Your Phone</h4>
                                <p className="text-sm text-blue-600">
                                    Browse top models from brands you love — from budget to flagship.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">2. Apply for Financing</h4>
                                <p className="text-sm text-blue-600">
                                    Fill out a quick online form. No credit check required.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">3. Get Approved & Checkout</h4>
                                <p className="text-sm text-blue-600">
                                    Approval in minutes. Start using your new phone while you pay over time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 2 end  */}

            {/* section 3 start  */}

            <section className="container max-md:px-2 py-2 px-10">
                <div className=" rounded-lg lg:items-center lg:justify-between  py-2 flex flex-col lg:flex-row  ">

                    <div className='flex flex-col gap-5'>
                        <h1 className=" sora-regular text-gray-900  ">Financing Benefits</h1>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg sora-semibold font-semibold">No Credit Needed</h3>
                                <p className="primary-text sora-regular ">Your approval is based on income not your credit history.</p>
                            </div>
                            <div>
                                <h3 className="text-lg sora-semibold font-semibold">Flexible Payment Plans</h3>
                                <p className="primary-text sora-regular ">Spread the cost over 12, 18, or 24 months.</p>
                            </div>
                            <div>
                                <h3 className="text-lg sora-semibold font-semibold">Instant Approval Decision</h3>
                                <p className="primary-text sora-regular ">No long waits know your status within minutes.</p>
                            </div>
                            <div>
                                <h3 className="text-lg sora-semibold font-semibold">Secure & Transparent</h3>
                                <p className="primary-text sora-regular ">No hidden fees, no surprises. Everything is upfront.</p>
                            </div>
                        </div>
                    </div>


                    <img
                        src={finance}
                        alt="Person"
                        className=" max-w-[512px] w-full object-cover lg:mx-0 mx-auto"
                    />

                </div>
            </section>


            {/* section 3 end */}

            {/* section 4 start  */}

            <section className='max-md:px-2 px-10' >
                <FAQAccordion title={"Frequently Asked  Questions"} faqs={cellFAq} />
            </section>

            {/* section 4 end  */}

            {/* section 5 start */}

            <div className="container max-md:px-2 px-10">
                <div className='flex flex-col  gap-2 items-center text-center'>
                    <h1 className='sora-regular max-md:leading-10'>What Our Customers Say</h1>
                    <h6 className='sora-regular primary-text max-w-[630px]'>Discover how nexPay is transforming the way people manage their money with real stories from satisfied users</h6>
                </div>
                <TestimonialSlider testimonials={testimonialsData} />
            </div>

            {/* section 5 end */}

            {/* section 6 start  */}

            <section className='max-md:px-2 px-10' >
                <GetStart
                    title="Own the Phone You Deserve Without the Upfront Cost"
                    subtitle="Low monthly payments. Easy approval. No credit barriers."
                    btncategory="Cell_Phone"
                />
            </section>

            {/* section 6 end */}

            <Footer />
        </>
    )
}

export default Cell